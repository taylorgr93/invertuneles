// app/api/inquiry/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { crop, location, name, phone, email } = await req.json();

    /*  ─ SMTP transport ─  */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ej. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT), // 465 SSL  ─o─ 587 TLS
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Evita problemas en local con certificados
        // ciphers: "SSLv3", // recomendado por MSFT
      },
    });

    /*  ─ mensaje ─  */
    await transporter.sendMail({
      from: `"Invertúneles 👩‍🌾" <${process.env.SMTP_USER}>`,
      to: email, // tu correo destino
      subject: "Nuevo formulario de proyecto personalizado",
      html: `
        <p>Hola <b>${name || "agricultor/a"}</b>,</p>

        <p>
          ¡Gracias por enviarnos la información sobre tu cultivo
          <em>${crop}</em> en <em>${location}</em>!
        </p>

        <p>
          Nuestro equipo analizará tus necesidades y se comunicará contigo lo antes
          posible al número <b>${phone}</b>.  
          Si necesitas contactarnos antes, responde a este correo o marca el
          <a href="tel:${phone}">${phone}</a>.
        </p>

        <p>¡Muchas gracias y que tengas un excelente día!</p>

        <p style="margin-top:2rem;">— El equipo de Invertúneles 🌱</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
