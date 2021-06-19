import { Request, Response } from "express";
import { IRequestDialog } from "../DialogFlowDto/resquest";

class Help {
	async helpService(request: Request, response: Response) {
		const { queryResult } = request.body as IRequestDialog;
		if (queryResult.intent.displayName !== "Ajuda") return;

		if (queryResult.parameters.servico === "Site") {
			response.json({
				fulfillmentMessages: [
					{
						text: {
							text: [
								"Qual tipo Site você quer criar?",
								"Landing page, Blog, Loja virtual ou Site institucional ou outros?",
							],
						},
					},
				],
			});
			return;
		}

		if (queryResult.parameters.servico === "Sistema") {
			response.json({
				fulfillmentMessages: [
					{
						text: {
							text: [
								"Qual tipo Sistema você quer criar?",
								"Sistema de gestão, Sistema de cadastros, Sistema de financeiro ou outros?",
							],
						},
					},
				],
			});
			return;
		}

		if (queryResult.parameters.servico === "Aplicativo") {
			response.json({
				fulfillmentMessages: [
					{
						text: {
							text: [
								"Qual tipo Aplicativo você quer criar?",
								"Aplicativo de saúde, Aplicativo de vendas online, Aplicativo de controle de gastos ou outros?",
							],
						},
					},
				],
			});
		}
	}

	async productHelp(request: Request, response: Response) {
		const { queryResult } = request.body as IRequestDialog;
		if (queryResult.intent.displayName !== "Produto") return;
		// if (queryResult.parameters.produto === "Landing page") {
		response.json({
			fulfillmentMessages: [
				{
					text: {
						text: [
							"Legal amigo que você quer desenvolver uma Landing Page",
							"Vamos conversa mais pelo whatsapp? meu número é (99) 98852-5464 ok?\nPode me chama lá para troca umas ideias! \n Pode ser?",
						],
					},
				},
			],
		});
		// }
	}
}

export { Help };
