const Discord = require('discord.js'),
  	  db = require('quick.db');

exports.run = async (client, message, args) => {
  
  var msg = message;
  
/*
  
  
  if (!Reason) return message.channel.send({
    embed: {
      description: `${message.member} You no longer AFK`
    }
  })
 else {
  message.channel.send({
    embed: {
      description: `${message.member} I set you AFK: ${Reason}`
    }
  })
  }*/
  const Reason = args.join(" ");
  let messageArray = msg.content.split(" ");
  
  if(!messageArray) {
    
   
      return msg.reply('Please set the reason')
    
    } else if (Reason) {
      
      msg.channel.send(`You no longer AFKs`)
      
    
  } else {
    
    msg.channel.send(`I set your AFKs : ${Reason}`)
    
  }
  
}