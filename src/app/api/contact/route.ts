// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Sab fields fill karna lazmi hain!' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        sender: { 
          name: 'Vortex Code Labs Contact', 
          email: 'arham.khan@vortexcodelabs.com' 
        },
        to: [
          { 
            email: 'arham.khan@vortexcodelabs.com', 
            name: 'Arham Khan' 
          }
        ],
        replyTo: { 
          email: email, 
          name: name 
        },
        subject: `🚀 New Client Inquiry from ${name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0b0f0e; color: #ffffff; border-radius: 8px;">
            <h2 style="color: #00ff66;">New Message via Vortex Code Labs</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>User Email:</strong> <a href="mailto:${email}" style="color: #00ff66;">${email}</a></p>
            <hr style="border-color: #222;" />
            <p style="margin-top: 15px;"><strong>Message:</strong></p>
            <p style="background: #161b1a; padding: 12px; border-radius: 6px; color: #ddd;">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo Error:', errorData);
      throw new Error('Brevo API failed to send email');
    }

    return NextResponse.json({ success: true, message: 'Email successfully send ho gayi hai!' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}