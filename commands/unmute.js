const Discord = require("discord.js");
const db = require("quick.db")
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**, Sorry You Can't Use The Command!`).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}**, Sorry I Dont Have Permission \`MANAGE_ROLES\` To Unmute A Member!`).then(msg=>msg.delete(5000));

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(`**${message.author.username}**, Sorry I Can't Search Your Member!`).then(msg=>msg.delete(5000));
    
    let reason = args.slice(1).join(' ');
    if (!reason) return message.channel.send(`<@${message.author.id}>, Please specify a Reason For This Mute!`);
    
    let channeltarget = await client.memory.fetch(`ModLog.${message.guild.id}.channel`)
    let logs = message.guild.channels.get(channeltarget);
  
    let muterole = message.guild.roles.find(x => x.name === 'Muted');
    if (!member.roles.has(muterole.id)) return message.channel.send(`**${message.author.username}**, Is Not Has Been Muted Try To Mute The Member.`).then(msg=>msg.delete(5000));
    await (member.removeRole(muterole.id));
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor("CraftyBoat | Mute", `${client.user.displayAvatarURL}`)
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .addField("UnMuted Member", `${member.user.username} with ID: ${member.user.id}`)
    .addField("UnMuted By", `${message.author.username} with ID: ${message.author.id}`)
    .addField("UnMuted Time", message.createdAt)
    .addField("UnMuted At", message.channel)
    .addField("UnMuted Reason", reason)
    logs.send(embed);
}

module.exports.help = {
    name: "unmute"
}