// Require Package
const { Client, RichEmbed, MessageEmbed, Util } = require("discord.js");//
const fs = require('fs'); // gw ada command work.js buat economy command ;v
// Buat Const Database Dulu
const db = require("quick.db");
const config = require("../config.json");
// lah gk ada file nya :v

// Ntar kita bikin beberapa args Args itu sesuai message ntar buat args modlog enable dan modlog disable dan modlog channels #channels name

// Run's the command's
exports.run = async(client, msg, args, member) => {
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
      crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  let guildId = msg.guild.id;
  
  if(!msg.member.hasPermission('MANAGE_GUILD')) return msg.channel.send({ embed: { color: 0xFF0000, description: 'You do not have permissions!'}});
  
if (!args[0]) {
  let embed = new RichEmbed()
  .setColor('RANDOM')
  .setTitle("<===== Tutorial ModLog Help =====>")
  .setDescription(`${crafty[msg.guild.id].prefix}modlog channel #channel \n${crafty[msg.guild.id].prefix}modlog on \n${crafty[msg.guild.id].prefix}modlog off \n \nExample: \n${crafty[msg.guild.id].prefix}modlog channel #logs`)
  
  msg.channel.send(embed); // Test dulu yah!
  
  } else if(args[0] == 'on') { // Mod log Enable/ !modlog on
     client.memory.set(`ModLog.${msg.guild.id}.on`, true)
     msg.channel.send(`Mod log has been enabled!`);
  } else if(args[0] == 'off') {
     client.memory.set(`ModLog.${msg.guild.id}.on`, false)
     msg.channel.send(`Mod log has been disabled!`);
  } else if(args[0] == 'channel') {
    var channel = msg.mentions.channels.first();
    
    if(!channel) return msg.channel.send("Please specify a mention channels!")
    
     let ModLog = client.memory.set(`ModLog.${msg.guild.id}.channel`, channel.id)
        msg.channel.send(`Succesfully Set Modlog To ${channel}`) 
  }                                                                     
}

exports.help = {
  name: "modlog",
  description: "send a log from moderation command!"
}