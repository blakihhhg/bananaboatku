const eren = require("discord.js");
const db = require("quick.db");

exports.run = async(client, msg, args) => {
  
    let fished = ['Common', 'UnCommon', 'Rare', 'Legendary']
    let randomf = fished[Math.floor(Math.random() * fished.length) + 1]
    
    if (randomf === "Common") {
      let randombal = Math.floor(Math.random() * 100) + 50
      msg.channel.send(`:fish: | You get **Common fish** and got :credit_card:\`${randombal}\``) // liat log gak??
      client.something.add(`RankEco_${msg.author.id}`, randombal)
      console.log(randomf);
    }
    if (randomf === "UnCommon") {
      let randombal = Math.floor(Math.random() * 100) + 100
      msg.channel.send(`:tropical_fish: | You get **UnCommon fish** and got :credit_card:\`${randombal}\``)
      client.something.add(`RankEco_${msg.author.id}`, randombal)
      console.log(randomf);
    }
    if (randomf === "Rare") {
      let randombal = Math.floor(Math.random() * 100) + 150
      msg.channel.send(`:dolphin: | You get **Rare fish** and got :credit_card:\`${randombal}\``)
      client.something.add(`RankEco_${msg.author.id}`, randombal)
      console.log(randomf);
    }
    if (randomf === "Legendary") {
      let randombal = Math.floor(Math.random() * 100) + 200
      msg.channel.send(`:whale: | You get **Legendary fish** and got :credit_card:\`${randombal}\``)
      client.something.add(`RankEco_${msg.author.id}`, randombal)
      console.log(randomf);
    }
  
}