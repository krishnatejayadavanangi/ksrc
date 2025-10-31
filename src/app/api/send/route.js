import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, countryCode, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not normal Gmail password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Message from ${name}`,
      text: `
You received a new message from your website:

Name: ${name}
Email: ${email}
Phone: ${countryCode} ${phone}
Message: ${message}
      `,
    };
    
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
