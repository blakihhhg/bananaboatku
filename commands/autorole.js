const { RichEmbed } = require("discord.js");
const db = require("quick.db");
const fs = require('fs');
const config = require("../config.json");

exports.run = async (client, msg, args) => {
  
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  const role = msg.mentions.roles.first();
  
  if(!msg.member.hasPermission('MANAGE_GUILD') && msg.author.id !== '297130271864520705' && msg.author.id !== '271995898911916032') return msg.channel.send({ embed: { color: 0xFF0000, description: 'You do not have permissions!'}});
  
  if (!args[0]) {
    
    let embed = new RichEmbed()
    .setColor('RANDOM')
    .setAuthor('CraftyBoat AutoRole Helps', client.user.displayAvatarURL)
    .setTitle(`My prefix is ${crafty[msg.guild.id].prefix}`)
    .addField('Toggle On AutoRole', `\`\`\`${crafty[msg.guild.id].prefix}AutoRole on\`\`\``)
    .addField('Toggle Off AutoRole', `\`\`\`${crafty[msg.guild.id].prefix}AutoRole off\`\`\``)
    .addField('Selecting Role', `\`\`\`${crafty[msg.guild.id].prefix}AutoRole setrole [Mention Role]\`\`\``)
    .addField('For the Example',`\`\`\`${crafty[msg.guild.id].prefix}AutoRole setrole @Member\`\`\``)
    
    msg.channel.send(embed)
  } else if (args[0] == 'on') {
    client.role.set(`Role.${msg.guild.id}.on`, true)
    msg.channel.send('AutoRole turned On!!')
  } else if (args[0] == 'off') {
    client.role.set(`Role.${msg.guild.id}.on`, false)
    msg.channel.send('AutoRole turned Off!!')
  } else if (args[0] == 'setrole') {
    
    if(!role) return msg.channel.send("Please specify a mention role!")
    
    client.role.set(`Role.${msg.guild.id}.role`, role.id)
    msg.channel.send(`Successfully set the AutoRole to the Role : ${role}`)
  }
  
}