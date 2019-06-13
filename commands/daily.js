const db = require("quick.db");
const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async(client, msg, args) => {
  let timeout = 86400000
  let amount = 700
  // random amount: Math.floor(Math.random() * 700) + 1;
  
  let daily = await client.daily.fetch(`Daily_${msg.author.id}`);
  
  if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      
      msg.channel.send(`You already collected your reward, You can Comeback and Collect it in **${time.seconds}s ${time.minutes}m ${time.hours}h**!`)
  } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily Rewards`, msg.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription("**Daily Collected!**")
    .addField('Collected', `${amount}$`)
    
    msg.channel.send(embed);
    client.something.add(`RankEco_${msg.author.id}`, amount);
    client.daily.set(`Daily_${msg.author.id}`, Date.now());
  }
}// random amount: Math.floor(Math.random() * 700) + 1;