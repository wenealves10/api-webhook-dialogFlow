import express from "express";
import { Help } from "./Help/help";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dialogflow", (request, response) => {
	const help = new Help();
	help.handle(request, response);
});

app.listen(process.env.PORT || 3000);
