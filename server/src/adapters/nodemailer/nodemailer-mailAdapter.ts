import { MailAdapter, SendMailAdapter } from "../mail-adapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a62f96d2ae1a42",
      pass: "7915dc05a74216"
    }
});

export class NodemailMailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailAdapter) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Tálison Miguel <talisonmiguel84@gmail.com>',
            subject,
            html: body,
        })
    };
}