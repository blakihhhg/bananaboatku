const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');

const statusAnimation =
{
	'online' : `<a:online:525583714000830464>`,
	'idle' : `<a:idle:525583596422037504>`,
	'streaming' : `<a:online:525583714000830464>`,
	'dnd' : `<a:dnd:525583568051765249>`,
	'invisible' : `<a:invisible:525583662285062164>`
};

const StatusText =
{
    'online' : 'Online',
    'idle' : 'Idle',
    'dnd' : 'Do Not Disturb',
    'offline' : 'Offline',
    'streaming' : 'Streaming'
}

module.exports.run = async (client, message, args) => {
  
  //message.mentions.users.first()
  
  let user; 
  if(message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }
  
  let mbr = message.guild.member(user)
  
  let sts = user.presence.status;
  let sts2 = user.presence.status;
  
  let dnd = 'dnd';
  let idl = 'idle';
  let onl = 'online';
  let off = 'offline';
  let strm = 'streaming';
  
  if (sts === dnd) sts = 'Do Not Disturb';
  if (sts2 === dnd) sts2 = statusAnimation.dnd;
  
  if (sts2 === idl) sts = 'Idle';
  if (sts2 === idl) sts2 = statusAnimation.idle;
  
  if (sts2 === onl) sts = 'Online';
  if (sts2 === onl) sts2 = statusAnimation.online;
  
  if (sts2 === off) sts = 'Offline';
  if (sts2 === off) sts2 = statusAnimation.invisible;
  
  if (sts2 === strm) sts = 'Streaming';
  if (sts2 === strm) sts2 = statusAnimation.streaming;
  //*/
    let role = mbr.roles.map(r => `${r.name}`)
    let uEmbed = new Discord.RichEmbed()
    .setAuthor("User Information", `${client.user.displayAvatarURL}`)
    .setColor("RANDOM")
    .setThumbnail(mbr.displayAvatarURL)
    .addField("**Userame**", mbr.displayName, true)
    .addField("**Discriminator**", user.discriminator, true)
    .addField("**ID**", user.id, true)
    .addField("**Bot**", `${mbr.bot ? "Yes" : "No"}`, true)
    .addField("**Role**", `${role}`, true)
    .addField("**Status**",`${sts2} **${sts}**`, true)
    .addField("**Roles**", `${mbr.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("**Playing**", `${user.presence.game ? `${user.presence.game.name}` : "Not playing anything."}`)
    //.addField("**Status**", `${message.author.presence.status} **${sts.lenght}**`, true)
    .addField("**Acc. Created At**", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- user.createdAt, {long: true})})`)
    .addField("**Joined At**", `${moment.utc(mbr.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- mbr.joinedAt, {long: true})})`)
    .setFooter("CraftyBoat Development", `${client.user.displayAvatarURL}`);
    message.channel.send(uEmbed);
}