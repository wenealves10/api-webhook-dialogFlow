import express from "express";
import dotenv from "dotenv";
import { Help } from "./Help/help";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/dialogflow", (request, response) => {
	const help = new Help();
	help.handle(request, response);
});

app.listen(process.env.PORT || 3000);
