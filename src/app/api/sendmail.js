/* eslint-disable import/no-anonymous-default-export */
export default async function (req, res) {
    require("dotenv").config();
  
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "Holisticcare14@gmail.com",
        pass: process.env.MAIL_API,
      },
      secure: true,
    });
    const mailData = {
      from: req.body.email,
      to: "Holisticcare14@gmail.com",
      subject: `Message From Dental Implant Solution `,
      //   text: req.body.message + " | Sent from: " + req.body.email,
      html: `
        <div><strong>Email:</strong> ${req.body.email}</div>
        <br/>
        `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    res.status(200).json({ status: "OK" });
  }
  