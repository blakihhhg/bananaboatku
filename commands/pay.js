const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args) => {  
  if (!msg.mentions.members.first()) return msg.channel.send('**Please mention a user!**');
  
  let targetMember = msg.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''));
  
  if (isNaN(amount)) return msg.channel.send('Please define a number!');
  
  let targetBalance = await client.something.fetch(`RankEco_${targetMember.id}`),
      selfBalance = await client.something.fetch(`RankEco_${msg.author.id}`);
  
  if (targetBalance === null) targetBalance = 0;
  if (selfBalance === null) selfBalance = 0;
  
  if (amount > selfBalance) return msg.channel.send(`**Sorry, You don't have Enough Money!**`);
  
  client.something.add(`RankEco_${targetMember.id}`, amount);
  client.something.subtract(`RankEco_${msg.author.id}`, amount);
  
  msg.channel.send(`**Succesfully sent ${amount}$ to ${targetMember.user.tag}**`)
}

module.exports.conf = {
  aliases: ['transfer']
}