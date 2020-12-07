require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();

const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00");

let chan;

let monday = new cron.CronJob("50 8 * * 1", () => {
    chan.send("@everyone");
    chan.send(embed);
});
monday.start();
let friday = new cron.CronJob("50 8 * * 5", () => {
  cha.send("@everyone");
  cha.send(embed);
});
friday.start();

let test = new cron.CronJob("5 9 * * 1", () => {
  cha.send("@everyone");
  cha.send(embed);
});
test.start



client.login(process.env.BOT_TOKEN).then(() => {
  chan = client.channels.cache.get("784852145139875861");
});
