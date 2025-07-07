// app/api/inquiry/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    /*  ─ SMTP transport ─  */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT), // 465 SSL  ─o─ 587 TLS
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    /*  ─ mensaje ─  */
    await transporter.sendMail({
      from: `"Invertúneles 👩‍🌾" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO, // tu correo destino
      subject: "Nuevo formulario de proyecto personalizado",
      html: `
        <h2>Datos del agricultor</h2>
        <ul>
          <li><b>Cultivo:</b> ${data.crop}</li>
          <li><b>Zona:</b> ${data.location}</li>
          <li><b>Nombre:</b> ${data.name}</li>
          <li><b>Teléfono:</b> ${data.phone}</li>
        </ul>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
