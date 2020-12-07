require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();

const embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Lektion")
  .setDescription("Kom ihåg lektionen kl 09.00");


function sendMessageMonday(channel) {
  new cron.CronJob("50 8 * * 1", () => {
    channel.send("@everyone");
    channel.send(embed);
  }).start();
}

function sendMessageFriday(channel) {
 new cron.CronJob("50 8 * * 5", () => {
      channel.send("@everyone");
      channel.send(embed);
    }).start();
}

client.login(process.env.BOT_TOKEN).then(() => {
  client.channels.fetch("613364620639469600").then((channel)=> {
    sendMessageMonday(channel)
    sendMessageFriday(channel)
  });
});
