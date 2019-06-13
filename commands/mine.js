const Discord = require("discord.js");
const fs = require('fs');
const db = require("quick.db");
const ms = require('parse-ms');
const config = require("../config.json");
//const pickaxes = require("../pickaxe.json");// ini temen gw yg bikin
// Wait.. Gua Cek Dlu


exports.run = async (client, msg, args) => {
  
 /* fs.readFileSync("./pickaxe.json", JSON.stringify(pickaxes), (err) => {
    if (err) console.log(err);
  }); */
  
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
      crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
  let pickaxes = client.px.get(`Cpx_${msg.author.id}`)
  
  if (!pickaxes || pickaxes === null) return msg.channel.send(`**${msg.author.tag}** Type: \`${crafty[msg.guild.id].prefix}\`start`)
  if (!pickaxes || pickaxes === undefined) return msg.channel.send(`**${msg.author.tag}** Type: \`${crafty[msg.guild.id].prefix}\`start`)
  
  const cusxp1 = Math.floor(Math.random() * 100)
  const cusxp2 = Math.floor(Math.random() * 150)
  const cusxp3 = Math.floor(Math.random() * 200)
  const cusxp4 = Math.floor(Math.random() * 250)
  
  let pickaxe;
  if (pickaxes == "Wooden") {
    pickaxe = '<:woooden:543321768790720542>'
    let random = Math.floor(Math.random() * 100) // stone
    let random2 = Math.floor(Math.random() * 50) // coal
    msg.channel.send(`${pickaxe} | You mined \`${random}\` <:stone23:547715160681218048> and \`${random2}\` <:coal23:547715180990300160>\nYou get \`${cusxp1}\`Exp`) 
    client.inv.add(`Ore.${msg.author.id}.stone`, random)
    client.inv.add(`Ore.${msg.author.id}.coal`, random2)
    client.xp.add(`xp.${msg.author.id}.xp`, cusxp1)
    // simple aja kykk gini | gitu edoaqng masa harus ribet
    // ""v
    // dah basic nih | lu lanjutin aja ndiri dah ada basic | kalo inventory sama aja kyk bal tapi beda database dah
  } else if (pickaxes == 'Stone') {
    pickaxe = '<:stoneee:543321768807366666>' // oke | siap
    let random = Math.floor(Math.random() * 150)
    let random2 = Math.floor(Math.random() * 100) // WOE KONTOL DIEM BAE LO
    let random3 = Math.floor(Math.random() * 50)
    msg.channel.send(`${pickaxe} | You mined \`${random}\` <:stone23:547715160681218048>, \`${random2}\` <:coal23:547715180990300160>  \`${random3}\` <:iron23:547715297562460160>\nYou get \`${cusxp2}\`Exp`)
    client.inv.add(`Ore.${msg.author.id}.stone`, random)
    client.inv.add(`Ore.${msg.author.id}.coal`, random2)
    client.inv.add(`Ore.${msg.author.id}.iron`, random3)
    client.xp.add(`xp.${msg.author.id}.xp`, cusxp2)
  } else if (pickaxes == 'Gold') {
    pickaxe = '<:goldeen:543321768513896469>'
    let random = Math.floor(Math.random() * 200)
    let random2 = Math.floor(Math.random() * 150)
    let random3 = Math.floor(Math.random() * 100)
    let random4 = Math.floor(Math.random() * 50)
    msg.channel.send(`${pickaxe} | You mined \`${random}\` <:stone23:547715160681218048>, \`${random2}\` <:coal23:547715180990300160>, \`${random3}\` <:gold23:(547715327920701440>, \`${random4}\` <:diamond23:547715362201010186>\nYou get \`${cusxp3}\`Exp`)
    client.inv.add(`Ore.${msg.author.id}.stone`, random)
    client.inv.add(`Ore.${msg.author.id}.coal`, random2)
    client.inv.add(`Ore.${msg.author.id}.gold`, random3)
    client.inv.add(`Ore.${msg.author.id}.diamond`, random4)
    client.xp.add(`xp.${msg.author.id}.xp`, cusxp3)
    // test test
  } else if (pickaxes == 'Iron') {
    let random = Math.floor(Math.random() * 250)
    let random2 = Math.floor(Math.random() * 200)
    let random3 = Math.floor(Math.random() * 150)
    let random4 = Math.floor(Math.random() * 100)
    let random5 = Math.floor(Math.random() * 50)
    pickaxe = '<:iroon:543321768681537537>'
    msg.channel.send(`${pickaxe} | You mined \`${random}\` <:stone23:547715160681218048>, \`${random2}\` <:coal23:547715180990300160>, \`${random3}\` <:gold23:547715327920701440> , \`${random4}\` <:iron23:547715297562460160>, \`${random5}\` <:diamond23:547715362201010186>\nYou get \`${cusxp4}\`Exp`)
    client.inv.add(`Ore.${msg.author.id}.stone`, random)
    client.inv.add(`Ore.${msg.author.id}.coal`, random2)
    client.inv.add(`Ore.${msg.author.id}.gold`, random3)
    client.inv.add(`Ore.${msg.author.id}.iron`, random4)
    client.inv.add(`Ore.${msg.author.id}.diamond`, random5)
    client.xp.add(`xp.${msg.author.id}.xp`, cusxp4)
    
  } else if (pickaxes == 'Diamond') {
    pickaxe = '<:diamoond:543321768526479361>'
    msg.channel.send(`$pickaxe | You mined`)// wait
  } // https://hastebin.discordbots.xyz/dasiticaya.js
}

exports.conf = {
  aliases: ['m'],
  //cooldown: '5'
}