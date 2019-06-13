exports.run = async (client, msg, args) => {
  msg.channel.send(`Im Playing with Server : **${client.guilds.size}**, Channel : **${client.channels.size}**, User : **${client.users.size}**!`);
}