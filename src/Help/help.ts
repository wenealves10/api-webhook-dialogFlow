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

		if (displayName === "Ajuda") {
			if (servico === "Landing page") {
				return response.json({
					fulfillmentText: "Legal, qual tipo de site você quer?",
				});
			}
		}

		return response.json({
			fulfillmentText: "Espera um pouco ai...",
		});
	}
}

export { Help };
