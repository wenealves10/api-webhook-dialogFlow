import { Request, Response } from "express";
import { IRequestDialog } from "../DialogFlowDto/resquest";

class Help {
	async handle(request: Request, response: Response) {
		const {
			queryResult: {
				intent: { displayName },
				parameters: { servico },
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
		}

		return response.json(dialogflowResponse);
	}
}

export { Help };
