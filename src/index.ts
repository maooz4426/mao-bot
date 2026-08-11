import { Client, GatewayIntentBits, Message, Partials } from "discord.js";
import dotenv from "dotenv";

const   ciTestVar    = 'CI failure test'

// dotenv.config()

const client = new Client({
	intents: [
		// GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		// GatewayIntentBits.GuildMembers,
		// GatewayIntentBits.GuildMessages,
		// GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Message, Partials.Channel],
});

client.once("ready", () => {
	console.log("Ready");
	if (client.user) {
		console.log(client.user.tag);
	}
});

client.login(process.env.TOKEN);
