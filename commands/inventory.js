const { RichEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = async(client, msg, args) => {
  
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
  
  let stones = await client.inv.get(`Ore.${msg.author.id}.stone`)
  let coals = await client.inv.get(`Ore.${msg.author.id}.coal`)
  let redstones = await client.inv.get(`Ore.${msg.author.id}.redstone`)
  let lapiz = await client.inv.get(`Ore.${msg.author.id}.lapis`)
  let irons = await client.inv.get(`Ore.${msg.author.id}.iron`)
  let golds = await client.inv.get(`Ore.${msg.author.id}.gold`)
  let diamonds = await client.inv.get(`Ore.${msg.author.id}.diamond`)
  let emeralds = await client.inv.get(`Ore.${msg.author.id}.emerald`)
  
  let balan = await client.something.get(`RankEco_${msg.author.id}`)
  if (balan === null) balan = 0;
  if (balan === undefined) balan = 0;
  
  let xp = await client.xp.get(`xp.${msg.author.id}.xp`)
  let lvl = await client.xp.get(`xp.${msg.author.id}.lvl`)
  
  if (xp === null) xp = 0;
  if (xp === undefined) xp = 0;
  
  if (lvl === null) lvl = 0;
  if (lvl === undefined) lvl = 0;
  
// ===============================================================================================================================================================
//                                                                       Defining Ore's
// ===============================================================================================================================================================
  
  if (stones === null) stones = 0;
  if (coals === null) coals = 0;
  if (redstones === null) redstones = 0;
  if (lapiz === null) lapiz = 0;
  if (irons === null) irons = 0;
  if (golds === null) golds = 0;
  if (diamonds === null) diamonds = 0;
  if (emeralds === null) emeralds = 0;
  
  // ALOO
  
  if (stones === undefined) stones = 0;
  if (coals === undefined) coals = 0;
  if (redstones === undefined) redstones = 0;
  if (lapiz === undefined) lapiz = 0;
  if (irons === undefined) irons = 0;
  if (golds === undefined) golds = 0;
  if (diamonds === undefined) diamonds = 0;
  if (emeralds === undefined) emeralds = 0;
  
  let embed = new RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`${msg.author.tag}'s Resources`, `${msg.author.displayAvatarURL}`)
  .setDescription(`
**Pickaxe »** ${pickaxe}
**Balance »** $**${balan}**
**Exp »** ${xp} Xp
**Level »** ${lvl}
`)
  .addField(`Overworld`, `<:emerald23:547715411425230859> **Emerald »** ${emeralds} \n<:diamond23:547715362201010186> **Diamond »** ${diamonds} \n<:gold23:547715327920701440> **Gold »** ${golds} \n<:iron23:547715297562460160> **Iron »** ${irons} \n<:lapis23:547715277794705420> **Lapis Lazuli »** ${lapiz} \n<:redstone23:547715236048797696> **Redstone »** ${redstones} \n<:coal23:547715180990300160> **Coal »** ${coals} \n<:stone23:547715160681218048> **Stone »** ${stones}`) // bro lu mau buat kyk dimension gitu ? // nanti dulu lah ini aja belom selesai :v// udh sikat aja cuk
  msg.channel.send(embed)
}

exports.conf = {
  aliases: ['inv']
}