const exec = require('child_process').exec;
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, level) => {
    let embed = new Discord.RichEmbed()
  .setTitle("CraftyBoat | Executed")
  .setDescription("Sorry, the `exec` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '271995898911916032' && message.author.id !== '297130271864520705') return message.channel.send(embed);
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      let embed = new Discord.RichEmbed()
      .setTitle(`CraftyBoat | Executed`)
      .addField(":inbox_tray: Input", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${response}\n\`\`\``)
      .setColor('RED');
      message.channel.send({embed});
    });
}
exports.help = {
name: "exec"
}
exports.conf = {
  aliases: ['ex']
}