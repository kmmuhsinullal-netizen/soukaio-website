import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['name','email','country','product'];
    for (const key of required) if (!String(body[key] || '').trim()) return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(String(body.email))) return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    const inbox = process.env.SOUKAIO_INQUIRY_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (inbox && apiKey && from) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [inbox], subject: `New SouKaio enquiry — ${body.product}`, reply_to: body.email, text: Object.entries(body).map(([k,v]) => `${k}: ${v}`).join('\n') })
      });
      if (!response.ok) return NextResponse.json({ error: 'Email delivery is temporarily unavailable. Please contact us directly.' }, { status: 502 });
    } else {
      console.info('SouKaio enquiry received; configure RESEND_API_KEY, RESEND_FROM_EMAIL and SOUKAIO_INQUIRY_EMAIL to enable email delivery.', body);
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
