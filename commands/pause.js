const { handleVideo, youtube, queue } = require("../index.js");

exports.run = async(client, msg, args) => {
  var serverQueue = queue.get(msg.guild.id);
  
  if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
    return msg.channel.send("There is nothing playing.");
}

exports.help = {
  name: "pause"
}