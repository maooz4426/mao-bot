import { REST, Routes } from "discord.js";
import { commandList } from "./index.ts";
import assert from "node:assert";
// 登録用関数
async function register() {
    assert.ok(process.env.TOKEN, 'TOKEN is required');
    assert.ok(process.env.CLIENT_ID, 'CLIENT_ID is required');

    const rest = new REST().setToken(process.env.TOKEN);

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: commandList.map((command) => command.data.toJSON()),
    });
}

register().catch((err) => console.log(err));
