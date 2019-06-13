const { RichEmbed } = require("discord.js");
const fs = require("fs");
const config = require("../config.json");

exports.run = async (client, msg, args) => {
  
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  let embed1 = new RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${client.user.username}'s Utility Commands List!`)
  .setAuthor(`My prefix is ${crafty[msg.guild.id].prefix}`, client.user.displayAvatarURL)
  .setThumbnail(client.user.displayAvatarURL)
  .setTimestamp()
  .setFooter(`Created By | CraftyBoat Team's`)
  .addField("List »", `Show Avatar »\n\`${crafty[msg.guild.id].prefix}Avatar\`\nCheck Your HeartBeat»\n\`${crafty[msg.guild.id].prefix}Ping\`\nShow Help List »\n\`${crafty[msg.guild.id].prefix}Help\`\nMake Bot say »\n\`${crafty[msg.guild.id].prefix}Say\`\nCheck Info Bot »\n\`${crafty[msg.guild.id].prefix}BotInfo\`\nCheck Server Information »\n\`${crafty[msg.guild.id].prefix}ServerInfo\`\nSet Your Afk »\n\`${crafty[msg.guild.id].prefix}AFK\`\nCreate Voting »\n\`${crafty[msg.guild.id].prefix}Poll\`\nCheck Server Role's »\n\`${crafty[msg.guild.id].prefix}ServerRole\`\nCheck Server Emote »\n\`${crafty[msg.guild.id].prefix}ServerEmoji\``)
  
  let embed2 = new RichEmbed()
  .setColor('BLUE')
  .setAuthor('Support me?', client.user.displayAvatarURL)
  .addField('Invite Me »', '[Click Here!](https://discord.now.sh/511890934460317697)')
  .addField('Official Server Bot »', '[Click Here!](https://discord.gg/jEYuAqH)')
  .addField('Subscribe Developer »', '**Kero First_Xz »** [Click Here!](https://www.youtube.com/channel/UCNg-0ZFPiUIjWPIPd3z0cug)\n**FaiqGamingYT - Minecraft »** [Click Here!](https://www.youtube.com/channel/UCKLLzidiLNXBFn30ZlOmT3A)')
  
  msg.channel.send(embed1).then(m => m.channel.send(embed2))
  
}