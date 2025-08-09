import crypto from 'crypto';

const UNSUBSCRIBE_SECRET = process.env.UNSUBSCRIBE_SECRET || '';

function sign(payload: string): string {
  if (!UNSUBSCRIBE_SECRET) return '';
  return crypto.createHmac('sha256', UNSUBSCRIBE_SECRET).update(payload).digest('base64url');
}

export function generateUnsubscribeToken(email: string): string {
  const data = JSON.stringify({ email, iat: Date.now() });
  const payload = Buffer.from(data).toString('base64url');
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifyUnsubscribeToken(token: string): { email: string } | null {
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
