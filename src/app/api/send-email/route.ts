import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, services, message } = await request.json()

    // Validate required fields
    if (!fullName || !email || !message || !services || services.length === 0) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return Response.json(
        { error: 'Server configuration error', details: 'API key not configured' },
        { status: 500 }
      )
    }

    // Send admin notification email with user details
    // Note: In Resend free tier, we can only send to verified emails
    // So we send all details to the admin who will respond
    const result = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'ignisissolutions@gmail.com',
      subject: `New Contact Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #4f46e5, #3b82f6, #06b6d4); padding: 20px; border-radius: 8px; text-align: center;">
            <h1 style="color: white; margin: 0;">📬 New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa; border-radius: 8px; margin-top: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Inquiry Details</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4f46e5;">
              <p style="color: #4b5563; margin: 8px 0;">
                <strong>👤 Name:</strong> ${fullName}
              </p>
              <p style="color: #4b5563; margin: 8px 0;">
                <strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a>
              </p>
              <p style="color: #4b5563; margin: 8px 0;">
                <strong>📱 Phone:</strong> ${phone || 'Not provided'}
              </p>
              <p style="color: #4b5563; margin: 8px 0;">
                <strong>🎯 Services Interested In:</strong> ${services.join(', ')}
              </p>
              <p style="color: #4b5563; margin: 8px 0;">
                <strong>💬 Message:</strong><br/>
                <div style="background-color: #f3f4f6; padding: 10px; border-radius: 5px; margin-top: 8px;">
                  ${message.replace(/\n/g, '<br/>')}
                </div>
              </p>
            </div>

            <div style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 15px; margin-top: 20px;">
              <p style="color: #78350f; margin: 0;">
                <strong>⚡ Action Required:</strong> Reply to <a href="mailto:${email}" style="color: #78350f; text-decoration: underline;">${email}</a> within 24 hours.
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb;">
            <p>© 2026 Ignisis Solutions. Smart inquiries deserve smart responses.</p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return Response.json(
        { error: 'Failed to send email', details: result.error },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return Response.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}
