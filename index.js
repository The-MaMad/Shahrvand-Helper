const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_BANS",
        "GUILD_VOICE_STATES"
    ]
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);
require('dotenv').config();

client.login(process.env.TOKEN);
