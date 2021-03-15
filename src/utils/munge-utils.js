// copied this over because I thought the db might need regex, but that may not be the case; might only be needed on the backend later when connecting to the bot

export function makeRegex(string) {
	return new RegExp(string, 'gi');
}