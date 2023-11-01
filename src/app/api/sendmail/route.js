import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  const { email, name, message } = body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "Holisticcare14@gmail.com",
      pass: "izyyvtazuasgalrr",
    },
    secure: true,
  });

  const mailData = {
    from: email,
    to: "Holisticcare14@gmail.com",
    subject: "Message From Holistic Residential Home",
    html: `
      <div><strong>Name:</strong> ${name}</div>
      <br/>
      <div><strong>Email:</strong> ${email}</div>
      <br/>
      <div><strong>Message:</strong> ${message}</div>
    `,
  };

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.error("Error sending email:", err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return NextResponse.json({ status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
