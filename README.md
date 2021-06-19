# api-webhook-dialogFlow

Your web service will receive a POST request from Dialogflow in the form of the response to a user query matched by intents with webhook enabled. Be sure that your web service meets all the

// response.json({
// fulfillmentMessages: [
// {
// card: {
// title: "Meu Portfólio",
// subtitle: "Crio vários sites e sistemas web",
// imageUri: "https://i.imgur.com/rKyEO9A.png",
// buttons: [
// {
// text: "Quero ver o site",
// postback: "https://www.wenedev.site",
// },
// ],
// },
// },
// ],
// });
