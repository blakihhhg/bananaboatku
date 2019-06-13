const Discord = require("discord.js");
const config = require("../config.json");
const db = require("quick.db");

exports.run = async(client, msg, args) => {
  
  let banTaged = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let channeltarget = await client.memory.fetch(`ModLog.${msg.guild.id}.channel`)
  let channelmark = await client.memory.fetch(`ModLog.${msg.guild.id}.on`)
  
  if (!channeltarget) return msg.channel.send("Please You must set modlog channel!");
  if (!channelmark) return msg.channel.send("Please turn on modlog!");
  
if (channelmark == true) {
  let logs = msg.guild.channels.get(channeltarget);
  
  if (!msg.member.hasPermissions("BAN_MEMBERS")) return msg.channel.send("You don't have permissions to Use this command!");
  
  if (!banTaged) return msg.channel.send(`<@${msg.author.id}>, Please specify a Member To Ban!`);
  if (!reason) return msg.channel.send(`<@${msg.author.id}>, Please specify a Reason For This Ban!`);
  //if (!logs) return msg.channel.send(`<@${msg.author.id}>, Please create a Channel Called ${config.logsChannel} to log the bans!`);
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(banTaged.user.displayAvatarURL)
  .addField("Banned Member", `${banTaged.user.username} with ID: ${banTaged.user.id}`)//
  .addField("Banned By", `${msg.author.username} with ID: ${msg.author.id}`)
  .addField("Banned Time", msg.createdAt)
  .addField("Banned At", msg.channel)
  .addField("Banned Reason", reason)
  .setTimestamp()
  .setFooter(`• Ban User Information`, banTaged.user.displayAvatarURL);
  
  msg.channel.send(`${banTaged.user.username} has been Banned by ${msg.author} Beacuse: ${reason}`);
  banTaged.ban(reason);
  logs.send(embed);  
} else {
  return msg.channel.send("You do not set modlog channel you must set it!")
}
};
// Let's test it out!