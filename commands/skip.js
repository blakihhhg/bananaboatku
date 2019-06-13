const { queue } = require("../index.js");

exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
  
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
    return msg.channel.send("Song has been skipped");
		return undefined;
}

exports.conf = {
  aliases: ['s']
}

exports.help = {
  name: "skip"
}