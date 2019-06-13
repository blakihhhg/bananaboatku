const { Client, RichEmbed, MessageEmbed, Util } = require("discord.js");
const fs = require('fs');
const db = require("quick.db");
const config = require("../config.json");

exports.run = async(client, msg, args) => {
    let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
    if(!crafty[msg.guild.id]){ 
      crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  if(!msg.member.hasPermission('MANAGE_GUILD') && msg.author.id !== '297130271864520705' && msg.author.id !== '271995898911916032') return msg.channel.send({ embed: { color: 0xFF0000, description: 'You do not have permissions!'}});
  
if (!args[0]) {
  let embed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`<====[ CraftyBoat Welcomer Help List ]====>`)
  .setTitle(`${msg.author.username} My prefix is \`${crafty[msg.guild.id].prefix}\``)
  .setDescription(`
\`\`\`${crafty[msg.guild.id].prefix}welcomer on                        \`\`\`

\`\`\`${crafty[msg.guild.id].prefix}welcomer off                       \`\`\`

\`\`\`${crafty[msg.guild.id].prefix}welcomer channel [Mention Channel] \`\`\`
`)
  msg.channel.send(embed);
  
  } else if(args[0] == 'on') {
    client.welcome.set(`welcome.${msg.guild.id}.on`, true);
    msg.channel.send("Turning on Welcomer messages");
    
  } else if(args[0] == 'off') {
    client.welcome.set(`welcome.${msg.guild.id}.on`, false);
    msg.channel.send("Turning off Welcomer messages");
    
  } else if(args[0] == 'channel') {
    var channel = msg.mentions.channels.first();
    if(!channel) return msg.channel.send("Please specify a mention channels!");
    let Welcome = client.welcome.set(`welcome.${msg.guild.id}.channel`, channel.id);
    msg.channel.send(`Succesfully set Welcomer Channels, Now Welcomer Channel is ${channel}`);
    
  } //else if(args[0] == 'text') {
    //msg.channel.send(`worked cmd`)
  //}
}