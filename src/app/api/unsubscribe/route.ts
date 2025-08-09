import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { verifyUnsubscribeToken } from '../../../utils/unsubscribeToken';

let adminApp: App | null = null;

function getAdmin() {
  if (!adminApp) {
    const projectId =
      process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    let privateKey = process.env.FIREBASE_PRIVATE_KEY || '';
    privateKey = privateKey.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').trim();
    if (
      (privateKey.startsWith('"') && privateKey.endsWith('"')) ||
      (privateKey.startsWith("'") && privateKey.endsWith("'"))
    ) {
      privateKey = privateKey.slice(1, -1);
    }

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
