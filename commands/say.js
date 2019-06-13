exports.run = (client, message, args) => {
 let say = args.join(' ');
 if (!say) return message.channel.send("Send A Text For Say!");
 message.delete();
 message.channel.send(say)
}

// bot lu dh online 24 jam tanpa lu di web