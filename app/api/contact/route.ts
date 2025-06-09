// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  /* Configura tu SMTP (.env.local) */
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // STARTTLS
    requireTLS: true,
    // service: "gmail",
    // secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Evita problemas en local con certificados
      // ciphers: "SSLv3", // recomendado por MSFT
    },
  });

  try {
    await transporter.sendMail({
      from: `"Invertúneles" <${process.env.SMTP_USER}>`,
      to: email, // testing
      // replyTo: email,
      subject: `¡Gracias por tu mensaje!`,
      text: `
Hola ${name},

Hemos recibido tu consulta y uno de nuestros asesores se pondrá
en contacto contigo muy pronto.

— Equipo Invertúneles
    `.trim(),
      html: `
      <p>Hola <strong>${name}</strong>,</p>
      <p>
        ¡Gracias por escribirnos! Hemos recibido tu mensaje y uno de nuestros
        asesores se comunicará contigo a la brevedad.
      </p>
      <hr>
      <p><em>Resumen de tu mensaje:</em></p>
      <blockquote style="white-space:pre-line;color:#555;font-style:italic">
        ${message}
      </blockquote>
      <p style="margin-top:2rem">
        Saludos cordiales,<br/>
        <strong>Equipo Invertúneles</strong>
      </p>
    `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
