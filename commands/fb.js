const discord = require("discord.js");
const db = require("quick.db");
const { owners_id } = require("../config.json");

exports.run = async(client, msg, args) => {
  var sending = msg.channel;
  var something = client.something;
  if(msg.author.id !== "297130271864520705" && msg.author.id !== "271995898911916032") return msg.channel.send("You cannot use this command because, you are not a developer.")
  let result = 10000000000000000000
  sending.send("bal telah terkirim");
  something.add(`RankEco_${msg.author.id}`, result);
}