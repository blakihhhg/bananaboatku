// Require Package
const Discord = require("discord.js");
const { Client, RichEmbed } = require("discord.js");
const config = require("../config.json");
const fs = require('fs');

// Run Cmd's
// ============================================================================================================================================
exports.run = async (client, message, args) => {

  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[message.guild.id]){ 
     crafty[message.guild.id] = {
       prefix: config.prefix
     }
  }
  
  let say = args.join(' ');
  
	if (!message.member.roles.find("name", "@everyone")) { 
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send({ embed: { color: 0xFF0000, description: `**[Correct Usage is](https://youtube.com/)**
 ====================\n **${crafty[message.guild.id].prefix}poll <Text>**\n ====================`}});
    
    
    
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM') 
        .setDescription(say)
        .setTitle(`Vote Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅");
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}

// ============================================================================================================================================