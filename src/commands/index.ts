import {
    type ChatInputCommandInteraction,
    SlashCommandBuilder,
} from "discord.js";

import { Persona } from "../persona/index.ts";

export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

// hiで挨拶
export const createHiCommand = (persona: Persona): Command => ({
    data: new SlashCommandBuilder()
        .setName("hi")
        .setDescription("挨拶を返します"),
    execute: async (interaction) => {
        const user = interaction.options.getUser("target") ?? interaction.user;
        await interaction.reply(persona.greet(user.toString()));
    },
});

export const createCommands = (persona: Persona): Command[] => [
    createHiCommand(persona),
];
