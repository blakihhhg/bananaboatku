const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args) => {
    let result = Math.floor(Math.random() * 1) + 200
    let job = [ "Farmer", "Fisher", "Programer", "Developer", "Officer" ]
    let jobr = Math.floor(Math.random() * job.length)
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`:briefcase: You has worked with ${job[jobr]} \nYou has get \`${result}$\``)
    msg.channel.send(embed);
    client.something.add(`RankEco_${msg.author.id}`, result)
}