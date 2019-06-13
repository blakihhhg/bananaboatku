// Require Data
const { queue } = require("../index.js");

// Run's Stop Command
exports.run = async(client, msg, args) => {
    var serverQueue = queue.get(msg.guild.id);
  
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
    return msg.channel.send("Song has been stopped!");
		return undefined;
	}

exports.conf = {
  aliases: ['st']
}

exports.help = {
  name: "stop"
}