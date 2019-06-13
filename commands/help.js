//This command will be required package discord.js
const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require("fs");

exports.run = async(client, msg, args) => { // Modification
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  //if (!args[0]) {
    
    let embed1 = new RichEmbed()
    .setColor('RANDOM')
    .setTitle(`${client.user.username}'s Help List!`)
    .setAuthor(`My prefix is ${crafty[msg.guild.id].prefix}`, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setFooter(`Created By | CraftyBoat Team's`)
    .addField(":hammer_pick: Utility", `Use \`${crafty[msg.guild.id].prefix}Utility\``)
    .addField(":musical_note: Music", `Use \`${crafty[msg.guild.id].prefix}Music\``)
    .addField(":money_with_wings: Economy [Beta 2.1]", `Use \`${crafty[msg.guild.id].prefix}Economy\``)
    .addField(":warning: Administrator", `Use \`${crafty[msg.guild.id].prefix}Administrator\``)
    .addField(":lock: Developer", `Use \`${crafty[msg.guild.id].prefix}Developer\``)
    .addField(":helmet_with_cross: Support Bot", `Use \`${crafty[msg.guild.id].prefix}Developer\``)
    
    let embed2 = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor('Support me?', client.user.displayAvatarURL)
  .addField('Invite Me »', '[Click Here!](https://discord.now.sh/511890934460317697)')
  .addField('Official Server Bot »', '[Click Here!](https://discord.gg/jEYuAqH)')
  .addField('Subscribe Developer »', '**Kero First_Xz »** [Click Here!](https://www.youtube.com/channel/UCNg-0ZFPiUIjWPIPd3z0cug)\n**FaiqGamingYT - Minecraft »** [Click Here!](https://www.youtube.com/channel/UCKLLzidiLNXBFn30ZlOmT3A)')
    
   // msg.channel.send(embed1).then(m => m.channel.send(embed2))
    
  //}
  
  let embed = new Discord.RichEmbed()  // This is a defined for Embed
  .setColor('RANDOM') // This is a color for The Embed
  .setTitle(`${client.user.username}'s Help Commands`) // This for A Title in from Embed
  .setAuthor(`My prefix is ${crafty[msg.guild.id].prefix}`, client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Requested By: ${msg.author.tag}`)
  .addField(":hammer_pick: Utility", "**Avatar, Ping, Help, Say, BotInfo, ServerInfo, AFK [Dev Mode], Poll, ServerRole**") // You cant add The Command in Here and You cant add Any more field for The Type Commands
  .addField(":warning: Administrator", "**ModLog, Clear, Report, Ban, Kick, Prefix, Mute, UnMute, Welcomer**")// This is page two of the field
  .addField(":money_with_wings: Economy [Beta 2.1]", "**Balance, Daily, Pay, Work, Mine**") // This is page three of the field and you know you can't add ; in all field! in the end field you can add 
  .addField(":musical_note: Music", "**Play, Skip, Stop, Volume, Np, Queue, Pause, Resume**")
  .addField(":helmet_with_cross: Support Bot", "**Support**")
  .addField(":lock: Developer", "**Eval, Exec**")
  msg.channel.send(embed).then(msg => {
    
    msg.channel.send(embed2);
    
  })
  // This is will be send The Embed
} 
// Let's test it out!


exports.conf = {
  aliases: ['h']
}

exports.help = {
  name: "Help"
}