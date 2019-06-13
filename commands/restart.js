const Discord = require('discord.js');
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Restart")
    .setDescription("Sorry, the `restart` command can only be executed by the Developer.")
    .setColor("#cdf785");
    if(message.author.id !== '271995898911916032') return message.channel.send(embed);
    message.channel.send(`Restarted in ${Math.floor(client.ping / 100)}ms`).then(() => {
        process.exit(1);
    })
}