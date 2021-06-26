import { createTransport } from "nodemailer";

class SendMailer {
	async send(
		name: string | undefined,
		email: string | undefined,
		message: string | undefined,
		type: string | undefined
	) {
		const transporter = createTransport({
			service: "gmail",
			auth: {
				user: process.env.LOGIN_EMAIL,
				pass: process.env.LOGIN_EMAIL_PASSWORD,
			},
		});

		try {
			return transporter.sendMail({
				from: process.env.LOGIN_EMAIL,
				to: process.env.LOGIN_EMAIL,
				subject: type,
				text: `Nome: ${name} E-mail: ${email}\n Mensagem: ${message}`,
			});
		} catch (error) {
			throw new Error("Error send Mailer");
		}
	}
}

export { SendMailer };
