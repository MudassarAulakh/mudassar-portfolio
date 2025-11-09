import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_PASS, // 16-character App Password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // receiver (your Gmail)
      subject: `New message from ${name}`,
      text: `
You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
