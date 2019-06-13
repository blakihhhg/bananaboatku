const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${client.user.username} BotSupport`)
  .setDescription(`ingin Support saya?\nmelalui : \n \n**[Join Server Official](https://discord.gg/jEYuAqH)** \n**[Invite](https://discord.now.sh/511890934460317697)**`)
  msg.channel.send(embed);
}

//the code is stop in here