require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();

const command = require("./command");

let channel;

const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00");

client.login(process.env.BOT_TOKEN).then(() => {
  channel = client.channels.cache.get("784851435925667902");
});

let monday = new cron.CronJob("50 8 * * 1", () => {
  channel.send("@everyone")
  channel.send(embed);
});
let friday = new cron.CronJob("50 8 * * 5", () => {
  channel.send("@everyone")
  channel.send(embed);
});
monday.start();
friday.start();
