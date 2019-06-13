const { RichEmbed } = require("discord.js"); 
const db = require("quick.db");
const fs = require('fs');
const config = require("../config.json");
//const pickaxe = require("../pickaxe.json");


  
module.exports.run = async (client, msg, args) => {
  
  let Craftraw = args.slice(0).join(" ");
  let crafty = Craftraw.toLocaleLowerCase();
  const balan = client.something.fetch(`RankEco_${msg.author.id}`)
  if (!balan === null) balan = 0;
  
  let pickaxes = await client.px.get(`Cpx_${msg.author.id}`)
  
  let craftys = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!craftys[msg.guild.id]){ 
      craftys[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
 // gitu // why not reply // lebih enak send daripada reply :v
  
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
  
  if (!pickaxes || pickaxe == null) return msg.channel.send(`**${msg.author.tag}**, Type: \`${craftys[msg.guild.id].prefix}start\``)
  if (!pickaxes || pickaxe == undefined) return msg.channel.send(`**${msg.author.tag}**, Type: \`${craftys[msg.guild.id].prefix}start\``)
  
  let stones = await client.px.get(`stone.${msg.author.id}`)
  let golds = await client.px.get(`gold.${msg.author.id}`)
  let irons = await client.px.get(`iron.${msg.author.id}`)
  let diamons = await client.px.get(`diamond.${msg.author.id}`)
  let ultimates = await client.px.get(`ulti.${msg.author.id}`)
  let donators = await client.px.get(`donator.${msg.author.id}`)
  let emeralds = await client.px.get(`eme.${msg.author.id}`)
  let rubys = await client.px.get(`ruby.${msg.author.id}`)
  
  if (!args[0]) {
    let embed = new RichEmbed()
    .setColor("GREEN")
    .setFooter(`CraftyBoat's | Pickaxe Market`)
    .setAuthor(`Pickaxe Market`, `https://cdn.glitch.com/a3c85270-31aa-410d-a063-a81ad221d5c7%2F7407f187-0b04-4e42-8cf8-45fffc6893cb%252Fimage.gif?1550228481795`)
    .setDescription(`
Use **^market buy [no]** to buy Pickaxe
Example » **^market buy 1**

1 | <:stoneee:543321768807366666> Stone Pickaxe  »  **💳 50000$**
2 | <:goldeen:543321768513896469> Golden Pickaxe  »  **💳 100000$**
3 | <:iroon:543321768681537537> Iron Pickaxe  »  **💳 150000$**
4 | <:diamoond:543321768526479361> Diamond Pickaxe  »  **💳 200000$**
5 | <:Ultimate:543321768878800917> Ultimate Pickaxe  »  **💳 250000$**
6 | <:Donator:543321768744452096> Donator Pickaxe  » **💳 300000$**
7 | <:Emerald:543321769168076815> Emerald Pickaxe  » **💳 350000$**
8 | <:ruby:543321769205956608> Ruby Pickaxe  » **💳 400000$**
`);
    msg.channel.send(embed)
  }
  
  if(crafty.match("buy 1")) {
    let amount = 50000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
    //if (pickaxe === null) stones = 'none';
    //if (pickaxe === undefined) stones = 'none';
    if (stones) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount) 
    client.px.add(`stone.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Stone')
    msg.channel.send(`<:stoneee:543321768807366666> | Congrats, You buy <:stoneee:543321768807366666> for **💳 50000$**`)
    }
    
    
  if(crafty.match("buy 2")) {
    let amount = 100000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
    //if (pickaxe === null) return;
    //if (pickaxe === undefined) return;
    if (golds) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    // wut kok 1
    client.px.add(`gold.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Gold') // gk sengaja ke paste semua :v
    
    msg.channel.send(`<:goldeen:543321768513896469> | Congrats, You buy <:goldeen:543321768513896469> for **💳 100000**`);
  }
  if(crafty.match("buy 3")) {
    let amount = 150000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
   // if (pickaxes.has || pickaxes.has == 'Iron') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`) // gw walau belum punya pick nya kok di bilang udh punya ya?? 
    if (irons) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.add(`iron.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Iron')
    msg.channel.send(`<:iroon:543321768681537537> | Congrats, You buy <:iroon:543321768681537537> for **💳 150000$**`)
  }
  if(crafty.match("buy 4")) {
    let amount = 200000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
    //if (pickaxes.has || pickaxes.has == 'Diamond') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`)
    
    if (diamons) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.add(`diamond.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Diamond')
    msg.channel.send(`<:diamoond:543321768526479361> | Congrats, You buy <:diamoond:543321768526479361> for **💳 200000$**`)
  }
  if(crafty.match("buy 5")) {
    let amount = 250000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
   //if (pickaxes.has || pickaxes.has == 'Ultimate') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`)
    
    if (ultimates) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.add(`ulti.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Ultimate')
    msg.channel.send(`<:Ultimate:543321768878800917> | Congrats, You buy <:Ultimate:543321768878800917> for **💳 250000$**`)
  }
  if(crafty.match("buy 6")) {
    let amount = 300000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
  //  if (pickaxes.has || pickaxes.has == 'Donator') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`)
    
    if (donators) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.set(`Cpx_${msg.author.id}`, 'Donator')
    msg.channel.send(`<:Donator:543321768744452096> | Congrats, You buy <:Donator:543321768744452096> for **💳 300000$**`)
  }
  if(crafty.match("buy 7")) {
    let amount = 350000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
  //  if (pickaxes.has || pickaxes.has == 'Emerald') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`)
    
    if (emeralds) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.add(`eme.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Emerald')
    msg.channel.send(`<:Emerald:543321769168076815> | Congrats, You buy <:Emerald:543321769168076815> for **💳 350000$**`)
  }
  if(crafty.match("buy 8")) {
    let amount = 400000
    if (balan < amount) return msg.channel.send(`${msg.author.username}, You dont have enough money`);
    
    //if (pickaxes.has || pickaxes.has == 'Ruby') return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`)
    
    //if (stones) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    if (rubys) return msg.channel.send(`${msg.author.tag} | You already have This **Pickaxe**`);
    
    client.something.subtract(`RankEco_${msg.author.id}`, amount)
    client.px.add(`rby.${msg.author.id}`, 1)
    client.px.set(`Cpx_${msg.author.id}`, 'Ruby')
    msg.channel.send(`<:ruby:543321769205956608> | Congrats, You buy <:ruby:543321769205956608> for **💳 400000$**`)
  }
}