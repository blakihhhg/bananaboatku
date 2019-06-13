//const xp = require("../xp.json");
const db = require("quick.db");
const config = require("../config.json");
const fs = require("fs");

exports.run = async(client, msg, args) => {
  
  let craftys = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!craftys[msg.guild.id]){ 
      craftys[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  /*if(!client.xp[msg.author.id]) {
   xp[msg.author.id] = {
     xp: 0,
     level: 1
   }
  }
  
  let curxp = xp[msg.author.id].xp;
  let curlvl = xp[msg.author.id].level;*/
  
  
  let curlvl = await client.xp.fetch(`xp.${msg.author.id}.lvl`)
  let curxp = await client.xp.fetch(`xp.${msg.author.id}.xp`)
  let nxtlvl = curlvl * 1000;
  
  if (!nxtlvl <= curxp)
  
  if (curxp == 1000) curlvl = curlvl + 1;
  
  if (curlvl === null) curlvl = 1;
  if (curlvl === undefined) curlvl = 1;
  if (curxp === null) curxp = 0;
  if (curxp === undefined) curxp = 0;
  
  //msg.channel.send(`Level: **${curlvl}** \nXP: **${curxp}**`)
  
  
  if (!args[0]){
    
    msg.channel.send(`Using \`\`\`${craftys[msg.guild.id].prefix}level info\`\`\` or \`\`\`${craftys[msg.guild.id].prefix}level up\`\`\``)
    
  } else if (args[0] == 'info'){
    
    msg.channel.send(`Your Level: **${curlvl}** \nYour XP: **${curxp}**`)
    
  } else if (args[0] == 'up'){
    
    if (curxp < 5000) return msg.channel.send(`Your XP not enough to Leveling Up`)
    
    msg.channel.send(`${msg.author.username}, you are now leveling up to level : **${curlvl + 1}**`)
    client.xp.add(`xp.${msg.author.id}.lvl`, 1)
    client.xp.subtract(`xp.${msg.author.id}.xp`, 5000)
    
  }
  
  
}
