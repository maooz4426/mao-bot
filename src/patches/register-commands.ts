import assert from "node:assert";
import { REST, Routes } from "discord.js";
import { commandList } from "../commands/index.ts";

// 登録用関数
async function registerCommands() {
	assert.ok(process.env.TOKEN, "TOKEN is required");
	assert.ok(process.env.CLIENT_ID, "CLIENT_ID is required");

	const rest = new REST().setToken(process.env.TOKEN);

	await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
		body: commandList.map((command) => command.data.toJSON()),
	});

	console.log("finished");
}

registerCommands().catch((error) => console.error(error));
