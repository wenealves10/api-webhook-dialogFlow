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
					text: {
						text: [
							"Opa valeu pode conta comigo pode me chama no Whatsapp para nós troca uma ideia! meu número é (99)9 8852-5464",
							"https://wenedev.site",
						],
					},
				},
			],
		});
	}
});

app.listen(process.env.PORT || 3000);
