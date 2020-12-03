require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();

let channel;

client.on("message", (msg) => {
  if (msg.content === "hej") {
    msg.channel.send("@everyone")
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Lektion")
      .setDescription("Kom ihåg lektionen kl 09.00");
    channel.send(embed);
  }
  else if (msg.content === "!clearchat") {
    msg.channel.messages.fetch().then(result => {
      msg.channel.bulkDelete(result)
    })
  }
});

const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00");

client.login(process.env.BOT_TOKEN).then(() => {
  channel = client.channels.cache.get("784086230769336353");
});

let monday = new cron.CronJob("50 8 * * 1", () => {
  channel.send("@everyone")
  channel.send(embed);
});
let friday = new cron.CronJob("50 8 * * 5", () => {
  channel.send("@everyone")
  channel.send(embed);
});
let test = new cron.CronJob("* * * * *", () => {
  channel.send("@everyone")
  channel.send(embed);
});
test.start()
monday.start();
friday.start();
