import {
	type ChatInputCommandInteraction,
	SlashCommandBuilder,
} from "discord.js";

export interface Command {
	data: SlashCommandBuilder;
	execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

// hiで挨拶
export const hiCommand: Command = {
	data: new SlashCommandBuilder()
		.setName("hi")
		.setDescription("挨拶を返します"),
	execute: async (interaction) => {
		const user = interaction.options.getUser("target") ?? interaction.user;
		await interaction.reply(
			`${user} ……ふふ。ぼくはここにいますよ、プロデューサー。`,
		);
	},
};

export const commandList = [hiCommand];
