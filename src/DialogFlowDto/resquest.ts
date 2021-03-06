interface IRequestDialog {
	responseId: string;
	session: string;
	queryResult: {
		queryText: string;
		parameters: {
			servico?: string;
			name?: string;
			email?: string;
			message?: string;
		};
		allRequiredParamsPresent: boolean;
		fulfillmentText: string;
		fulfillmentMessages: object[];
		outputContexts: object[];
		intent: {
			name: string;
			displayName: string;
		};
		intentDetectionConfidence: number;
		diagnosticInfo: object;
		languageCode: string;
	};
	originalDetectIntentRequest: object;
}

export { IRequestDialog };
