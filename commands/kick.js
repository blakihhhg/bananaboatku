const Discord = require("discord.js");
const config = require("../config.json");
const db = require("quick.db");

exports.run = async(client, msg, args) => {
  
  let kickTaged = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let channeltarget = await client.memory.fetch(`ModLog.${msg.guild.id}.channel`)
  let channelmark = await client.memory.fetch(`ModLog.${msg.guild.id}.on`)
  
  if (!channeltarget) return msg.channel.send("Please You must set modlog channel!");
  if (!channelmark) return msg.channel.send("Please turn on modlog!");
  
if (channelmark == true) {
  let logs = msg.guild.channels.get(channeltarget);
  
  if (!msg.member.hasPermissions("KICK_MEMBERS")) return msg.channel.send("You don't have permissions to Use this command!");
  
  if (!kickTaged) return msg.channel.send(`<@${msg.author.id}>, Please specify a Member To Kick!`);
  if (!reason) return msg.chanenl.send(`<@${msg.author.id}>, Please specify a Reason For This Kick!`);
  
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(kickTaged.user.displayAvatarURL)
  .addField("Kicked Member", `${kickTaged.user.username} with ID: ${kickTaged.user.id}`)//
  .addField("Kicked By", `${msg.author.username} with ID: ${msg.author.id}`)
  .addField("Kicked Time", msg.createdAt)
  .addField("Kicked At", msg.channel)
  .addField("Kicked Reason", reason)
  .setTimestamp()
  .setFooter(`• Kick User Information`, kickTaged.user.displayAvatarURL);
  
  msg.channel.send(`${kickTaged.user.username} has been Kicked by ${msg.author} Beacuse: ${reason}`);
  kickTaged.kick(reason);
  logs.send(embed);  
} else {
  return msg.channel.send("You do not set modlog channel you must set it!")
}
};
// Let's test it out!