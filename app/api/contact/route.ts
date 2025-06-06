// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  /* Configura tu SMTP (.env.local) */
  const transporter = nodemailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: Number(process.env.SMTP_PORT),
    // secure: false, // STARTTLS
    service: "gmail", // o smtp.office365.com / Resend SMTP…
    secure: true, // puerto 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Evita problemas en local con certificados
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web Contact" <${process.env.SMTP_USER}>`,
      to: "taylorgr93@outlook.com", // testing
      // to: "contacto@invertuneles.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      // text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
