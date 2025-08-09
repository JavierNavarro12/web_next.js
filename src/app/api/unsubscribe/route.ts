import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

let adminApp: App | null = null;

function getAdmin() {
  if (!adminApp) {
    const projectId =
      process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error('Faltan credenciales de Firebase Admin');
    }

    if (!getApps().length) {
      adminApp = initializeApp({
        credential: cert({ projectId, clientEmail, privateKey }),
      });
    } else {
      adminApp = getApps()[0] as App;
    }
  }
  return adminApp!;
}

const UNSUBSCRIBE_SECRET = process.env.UNSUBSCRIBE_SECRET || '';

function sign(payload: string) {
  if (!UNSUBSCRIBE_SECRET) return '';
  return crypto.createHmac('sha256', UNSUBSCRIBE_SECRET).update(payload).digest('base64url');
}

export function generateUnsubscribeToken(email: string): string {
  const data = JSON.stringify({ email, iat: Date.now() });
  const payload = Buffer.from(data).toString('base64url');
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

function verifyUnsubscribeToken(token: string): { email: string } | null {
  const [payload, signature] = token.split('.');
  if (!payload || signature === undefined) return null;
  if (UNSUBSCRIBE_SECRET) {
    const expected = sign(payload);
    if (expected !== signature) return null;
  }
  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      email: string;
      iat: number;
    };
    if (!decoded.email) return null;
    // 7 días de validez
    if (Date.now() - decoded.iat > 7 * 24 * 60 * 60 * 1000) return null;
    return { email: decoded.email.toLowerCase() };
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    if (!token) return NextResponse.json({ error: 'Token requerido' }, { status: 400 });
    const verified = verifyUnsubscribeToken(token);
    if (!verified)
      return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 401 });

    const app = getAdmin();
    const db = getFirestore(app);
    const email = verified.email;

    const snapshot = await db
      .collection('newsletter_subscriptions')
      .where('email', '==', email)
      .get();

    if (snapshot.empty) {
      return NextResponse.json({ deleted: 0, message: 'Sin suscripciones' });
    }

    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    return NextResponse.json({ deleted: snapshot.size, success: true });
  } catch (e) {
    console.error('Error en unsubscribe:', e);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
