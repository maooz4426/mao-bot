import {
	Client,
	Collection,
	Events,
	GatewayIntentBits,
	Partials,
} from "discord.js";
import { commandList } from "./commands";

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
	partials: [Partials.Message, Partials.Channel],
});
client.commands = new Collection();

client.once("ready", () => {
	console.log("Ready");
	if (client.user) {
		console.log(client.user.tag);
	}
});

for (const command of commandList) {
	client.commands.set(command.data.name, command);
}
client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.log(error);
	}
});
client.login(process.env.TOKEN);
