import express from "express";
import { IRequestDialog } from "./DialogFlowDto/resquest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dialogflow", (request, response) => {
	const { queryResult } = request.body as IRequestDialog;
	if (queryResult.intent.displayName === "Ajuda") {
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
								"Sistema de gestão, Sistema de cadastra, Sistema de financeiro ou outros?",
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
});

app.listen(process.env.PORT || 3000);

// response.json({
//   fulfillmentMessages: [
//     {
//       card: {
//         title: "Meu Portfólio",
//         subtitle: "Crio vários sites e sistemas web",
//         imageUri: "https://i.imgur.com/rKyEO9A.png",
//         buttons: [
//           {
//             text: "Quero ver o site",
//             postback: "https://www.wenedev.site",
//           },
//         ],
//       },
//     },
//   ],
// });
