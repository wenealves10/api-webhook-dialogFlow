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
			fulfillmentText: "",
		};

		if (displayName === "Ajuda") {
			if (servico === "Landing page") {
				dialogflowResponse.fulfillmentText =
					"Legal, vamos conversa mais sobre esse projeto?";
			}

			if (servico === "Sistema") {
				dialogflowResponse.fulfillmentText =
					"Legal, vamos conversa mais sobre esse projeto?";
			}

			if (servico === "Aplicativos") {
				dialogflowResponse.fulfillmentText =
					"Legal, vamos conversa mais sobre esse projeto?";
			}
		}

		return response.json(dialogflowResponse);
	}
}

export { Help };
