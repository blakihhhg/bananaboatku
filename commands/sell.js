const { RichEmbed } = require("discord.js");
const db = require("quick.db");
const config = require("../config.json");
const fs = require("fs");

exports.run = async (client, msg, args) => {
  
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  let stones = await client.inv.get(`Ore.${msg.author.id}.stone`)
  let coals = await client.inv.get(`Ore.${msg.author.id}.coal`)
  let redstones = await client.inv.get(`Ore.${msg.author.id}.redstone`)
  let lapiz = await client.inv.get(`Ore.${msg.author.id}.lapis`)
  let irons = await client.inv.get(`Ore.${msg.author.id}.iron`)
  let golds = await client.inv.get(`Ore.${msg.author.id}.gold`)
  let diamonds = await client.inv.get(`Ore.${msg.author.id}.diamond`)
  let emeralds = await client.inv.get(`Ore.${msg.author.id}.emerald`)
  
  let balan = await client.something.get(`RankEco_${msg.author.id}`)
  
  if (!args[0]) {
    
    msg.reply(`**Usage** \`\`\`${crafty[msg.guild.id].prefix}Sell [material] <all / amount>\`\`\``)
    
  } else if (args[0] == 'stone') {
    let amm = args.join(' ');
    let amount = parseInt(amm);
    
    if (isNaN(amount)) return msg.reply('You must add a Amount');
    
    let emb = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('Sell | Material')
    .setDescription(`You Sell \`${amount}\` Stone`)
    msg.channel.send(emb)
    
  }
  
}