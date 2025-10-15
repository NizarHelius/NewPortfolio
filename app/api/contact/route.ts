import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

type ContactBody = {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json()

    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transporter using SMTP details from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    const mail = {
      from: `${name} <${email}>`,
      to,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message}</p>`,
    }

    await transporter.sendMail(mail)

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("/api/contact error:", err)
    return NextResponse.json({ error: err?.message || "Internal Server Error" }, { status: 500 })
  }
}
