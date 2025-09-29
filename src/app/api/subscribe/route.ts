import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import crypto from 'crypto';
import { validateEmail, normalizeEmail, validateNewsletterSource } from '../../../utils/validation';
import { logger } from '../../../utils/logger';

let adminApp: App | null = null;

function getAdmin() {
  if (!adminApp) {
    const projectId =
      process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    let privateKey = process.env.FIREBASE_PRIVATE_KEY || '';
    // Normalizar formatos: \n escapados, CRLF y posibles comillas
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
    const { email, source } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    if (source && !validateNewsletterSource(source)) {
      return NextResponse.json({ error: 'Parámetro source inválido' }, { status: 400 });
    }

    const app = getAdmin();
    const db = getFirestore(app);
    const emailNormalized = normalizeEmail(email);
    const id = crypto
      .createHash('sha256')
      .update(`${emailNormalized}|${source || 'hero'}`)
      .digest('hex');

    const ref = db.collection('newsletter_subscriptions').doc(id);
    const snap = await ref.get();

    if (snap.exists) {
      return NextResponse.json({ error: 'Ya suscrito' }, { status: 409 });
    }

    await ref.set({
      email: emailNormalized,
      createdAt: new Date(),
      source: source || 'hero',
    });

    return NextResponse.json({ success: true, id });
  } catch (e) {
    logger.error('Error en subscribe', e);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
