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
			},
		};

		if (displayName === "Ajuda") {
			if (servico === "Landing page") {
				dialogflowResponse.followupEventInput.name = "site";
			}

			if (servico === "Sistema") {
				dialogflowResponse.followupEventInput.name = "sistemas";
			}

			if (servico === "Aplicativos") {
				dialogflowResponse.followupEventInput.name = "aplicativo";
			}
		}

		return response.json(dialogflowResponse);
	}
}

export { Help };
