const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async(client, msg, args) => {
  let rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!rUser) return msg.channel.send("Couldn't find the User!");
  let reason = args.join(" ").slice(22);
  
  let reportEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`${client.user.displayAvatarURL}`, `**[${client.user.username}'s Report Log's](https://youtube.com/)**`)
  .addField("Reported User:", `${rUser} With ID: ${rUser.id}`)
  .addField("Reported By:", `${msg.author} With ID: ${msg.author.id}`)
  .addField("Channel", msg.channel)
  .addField("Time", msg.createdAt)
  .addField("Reason", reason);
  
  let channeltarget = await client.memory.fetch(`ModLog.${msg.guild.id}.channel`)
  let channelmark = await client.memory.fetch(`ModLog.${msg.guild.id}.on`)
  
  if (!channeltarget) return msg.channel.send("Please You must set modlog channel!");
  if (!channelmark) return msg.channel.send("Please turn on modlog!");
  
if (channelmark == true) {
  let reportsChannel = msg.guild.channels.get(channeltarget);
  
  msg.delete().catch(O_o=>{});
  reportsChannel.send(reportEmbed);// cepet amat dh jadi :v
} else {
  return msg.channel.send("You do not set modlog channel you must set it!")
}
}

module.exports.help = {
  name: "report"
}