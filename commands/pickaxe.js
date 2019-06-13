const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

  const pickaxes = client.px.get(`Cpx_${msg.author.id}`)
  let pickaxe;
  if (pickaxes == "Wooden") {
    pickaxe = '<:woooden:543321768790720542>'
  } else if (pickaxes == 'Stone') {
    pickaxe = '<:stoneee:543321768807366666>'
  } else if (pickaxes == 'Gold') {
    pickaxe = '<:goldeen:543321768513896469>'
  } else if (pickaxes == 'Iron') {
    pickaxe = '<:iroon:543321768681537537>'
  } else if (pickaxes == 'Diamond') {
    pickaxe = '<:diamoond:543321768526479361>'
  }
  
  if (args[0]) {
    
    let True = await client.px.get(`Cpx_${msg.author.id}`, 'Wooden', true)
    if (True = 'ok')
    if (!pickaxes.has || pickaxes.has == 'Wooden') return;
     
    let emb = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(`${msg.author.username} Pickaxe List`, `${msg.author.displayAvatarURL}`)
    .addField(`1 | <:woooden:543321768790720542> **Wooden Pickaxe**  »  True`)
    msg.channel.send(emb);
    
  }
  if (args[0] == 'list') {
    
    let emb = new Discord.RichEmbed()
    .setColor('GREEN')
    .setAuthor(`${msg.author.username} Pickaxe List`, `${msg.author.displayAvatarURL}`)
    .addField(`1 | <:woooden:543321768790720542> **Wooden Pickaxe**  »  `)
    msg.channel.send(emb);
    
  }
  
}