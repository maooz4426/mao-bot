import { REST, Routes } from "discord.js";
import { commandList } from "./index.ts";
// 登録用関数
async function register() {
    const rest = new REST().setToken(process.env.TOKEN!);

    await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID!),
        { body: commandList.map((command) => command.data.toJSON()) }
    )
}

register().catch(err => console.log(err));
