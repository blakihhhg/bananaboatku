const db = require("quick.db");

exports.run = async(client, msg, args) => {
  let pickaxes = await client.px.get(`Cpx_${msg.author.id}`)
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
  msg.channel.send(`${pickaxe}`);
}