const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args) => {
  let user = msg.mentions.members.first() || msg.author;
  let balan = await client.something.fetch(`RankEco_${user.id}`);
  if (balan === null) balan = 0;
  
  msg.channel.send(`${user}'s Balance is **💸${balan}**$!`)
   
}

exports.conf = {
  aliases: ['bal'],
  cooldown: 5
}

exports.help = {
  name: "balance"
}