const { RichEmbed, Client } = require("discord.js");

exports.run = (bot, message, args) => {
   let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
      message.delete(5000);
        let diff = (Date.now() - start); 
        let API = Math.round((bot.ping).toFixed())
        let embed = new RichEmbed()
        .setTitle(`:ping_pong: Pong!`)
        .setColor(`RANDOM`)
        .addField("Latency", `${diff}ms`, true)
        .addField("API", `${API}ms`, true)
        message.channel.send(embed);
    });
}

