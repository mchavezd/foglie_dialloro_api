import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";
import { ContactDto } from "./contact.controller";

@Injectable()
export class ContactService {
  public async sendMail({
    name,
    email,
    message,
  }: ContactDto): Promise<boolean> {
    const transporter = createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    return new Promise((res, rej) => {
      transporter.sendMail(
        {
          to: process.env.MAIL_USER,
          from: process.env.MAIL_USER,
          subject: `Email from contact form: ${email}`,
          text: `${name}: ${message}`,
        },
        (err: any) => {
          if (err) rej(err);
          return res(true);
        },
      );
    });
  }
}
