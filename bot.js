require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();


let channel;

client.on("message", (msg) => {
  if (msg.content === "hej") {
    msg.reply("Hej!!");
    const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00")
  channel.send(embed)
  }
});

client.login(process.env.BOT_TOKEN).then(() => {
  channel = client.channels.cache.get("784086230769336353");
  
});

let monday = new cron.CronJob("50 8 * * 1", () => {
  channel.send("Kom ihåg lektionen med Ulf kl. 09.00");
});
let friday = new cron.CronJob("50 8 * * 5", () => {
  channel.send("Kom ihåg lektionen med Ulf kl. 09.00");
});

let test = new cron.CronJob("* * * * *", () => {
  channel.send("**```Kom ihåg lektionen med Ulf kl. 09.00```**");
  const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00")
  channel.send(embed)
});
monday.start();
friday.start();
test.start();
