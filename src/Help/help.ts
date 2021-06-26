import { Request, Response } from "express";
import { IRequestDialog } from "../DialogFlowDto/resquest";
import { SendMailer } from "../services/sendMailer";

class Help {
	async handle(request: Request, response: Response) {
		const {
			queryResult: {
				intent: { displayName },
				parameters: { servico, email, message, name },
			},
		} = request.body as IRequestDialog;

		const dialogflowResponse = {
			followupEventInput: {
				name: "",
				parameters: {
					servico: "",
				},
			},
		};

		if (displayName === "Ajuda") {
			if (servico === "Landing page") {
				dialogflowResponse.followupEventInput.name = "product";
				dialogflowResponse.followupEventInput.parameters.servico =
					"Landing Page";
			}

			if (servico === "Sistema") {
				dialogflowResponse.followupEventInput.name = "product";
				dialogflowResponse.followupEventInput.parameters.servico = "Sistema";
			}

			if (servico === "Aplicativos") {
				dialogflowResponse.followupEventInput.name = "product";
				dialogflowResponse.followupEventInput.parameters.servico = "Aplicativo";
			}
			return response.json(dialogflowResponse);
		}

		if (displayName === "product") {
			const emails = new SendMailer();
			emails.send(name, email, message, servico);
			return response.json({
				fulfillmentText: `${name} obrigado! vamos entrar em contato pelo e-mail`,
			});
		}

		return response.json({});
	}
}

export { Help };
