import express from "express";
import { IRequestDialog } from "./DialogFlowDto/resquest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dialogflow", (request, response) => {
	const { queryResult } = request.body as IRequestDialog;
	if (queryResult.intent.displayName === "Servico - yes") {
		response.json({ fulfillmentText: ["Test", "test"] });
	}
});

app.listen(process.env.PORT || 3000);
