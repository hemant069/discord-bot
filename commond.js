const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTMzMTYyMjUyNDkxMTM1Nzk5Mg.GfcUx2.D2SZbi91pdSRg5Vg18z2g5iCBbuE-7lN6GMYfc"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1331622524911357992"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
