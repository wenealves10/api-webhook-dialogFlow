import express from "express";
import { IRequestDialog } from "./DialogFlowDto/resquest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dialogflow", (request, response) => {
	const { queryResult } = request.body as IRequestDialog;
	if (queryResult.intent.displayName === "Servico - yes") {
		response.json({
			fulfillmentMessages: [
				{
					card: {
						title: "Meu Portfólio",
						subtitle: "Crio vários sites e sistemas web",
						imageUri: "https://i.imgur.com/rKyEO9A.png",
						buttons: [
							{
								text: "Quero ver o site",
								postback: "https://www.wenedev.site",
							},
						],
					},
				},
			],
		});
	}
});

app.listen(process.env.PORT || 3000);
