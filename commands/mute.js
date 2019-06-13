const { RichEmbed, Client } = require("discord.js");
const ms = require("ms");
const config = require("../config.json");
const db = require("quick.db");

exports.run = async (client, msg, args) => {

  let tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let reason = args.slice(1).join(' ');
  let channeltarget = await client.memory.fetch(`ModLog.${msg.guild.id}.channel`)
  let channelmark = await client.memory.fetch(`ModLog.${msg.guild.id}.on`)
  
  if (!channeltarget) return msg.channel.send("Please You must set modlog channel!");
  if (!channelmark) return msg.channel.send("Please turn on modlog!");
  
if (channelmark == true) {
  let logs = msg.guild.channels.get(channeltarget);
  
  if (!tomute) return msg.channel.send(`<@${msg.author.id}>, Please specify a Member To Mute!`);
  if (!reason) return msg.channel.send(`<@${msg.author.id}>, Please specify a Reason For This Mute!`);
  
  if (tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply("Can't mute them!");
  let muterole = msg.guild.roles.find(`name`, "Muted");// hmm
  
  if(!muterole){
    try{
      muterole = await msg.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let embed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor("CraftyBoat | Mute", `${client.user.displayAvatarURL}`)
  .setThumbnail(`${tomute.user.displayAvatarURL}`)
  .addField("Muted Member", `${tomute.user.username} with ID: ${tomute.user.id}`)
  .addField("Muted By", `${msg.author.username} with ID: ${msg.author.id}`)
  .addField("Muted Time", msg.createdAt)
  .addField("Muted At", msg.channel)
  .addField("Muted Reason", reason)
  
  await(tomute.addRole(muterole.id));
  logs.send(embed);
} else {
  return msg.channel.send("You do not set modlog channel you must set it!")
}
}