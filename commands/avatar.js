const Discord = require("discord.js");
const { Client, RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require('fs');

exports.run = async (client, message, args) => {
  let aTaged;
  if (message.mentions.users.first()) {
    aTaged = message.mentions.users.first();
  } else {
      aTaged = message.author;
  }
  
  let embed = new Discord.RichEmbed()
  .setTitle(`${aTaged.username}'s Avatar`)
  .setImage(aTaged.displayAvatarURL)
  
  let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("✔");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}
// Let's test it out! 