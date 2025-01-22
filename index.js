const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply({
    content: "Hello from bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong");
});

client.login(
  "MTMzMTYyMjUyNDkxMTM1Nzk5Mg.GfcUx2.D2SZbi91pdSRg5Vg18z2g5iCBbuE-7lN6GMYfc"
);
