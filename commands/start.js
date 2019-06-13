exports.run = async (client, msg, args) => {
  let dr = client.px.get(`Wooden.${msg.author.id}`)
  if (dr) return msg.channel.send(`*${msg.author.tag}**, You already have this Pickaxe`)
  client.px.add(`Wooden.${msg.author.id}`, 1)
  client.px.set(`Cpx_${msg.author.id}`, 'Wooden')
  msg.channel.send(`**${msg.author.username}**, Welcome to CraftyBoat's Miner, You received  »  <:woooden:543321768790720542> | Now you can access Commands **Mine, Inventory, Market**`)
}