const { Client, GatewayIntentBits, Events } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Pinged Bot !",
  });
});

client.on("messageCreate", (message) => {
  if (message === "help") {
    message.reply({
      content: "No one can help you now !",
    });
  } else {
    return;
  }
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.login(
  "MTI1MDc5MjY3MjA2NzU4ODE3Nw.Ga5vUf.KWhLlwUhilDlZNkQ9-qwTDSTYv892VAH9ih6_E"
);
console.log("Reached at end .");
