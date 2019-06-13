module.exports = { // This basically works like every normal package you use.

  ping: function(channel) { // `ping` is the name of the function, then function() is where you can pass arguments.
    channel.send("Pong");
  },
  
  hook: function(channel, title, msg, color, avatar) { // This function uses quite a few options. The last 2 are optional.
  },
  
  splitEmbed: function (channel, description, deleteTimer) {
    
    // Check base fields
    let fields = Math.floor(description.length / 2048);
    let remaining = fields - (description.length % 2048);
    
    // If the reminder is greater than 0, add an extra field.
    if (remaining < 0) fields += 1;
    
    for (var i = 0; i < fields; i++) { // Run this as many times as fields declared.
      
      // We're also going to want to make a deleteTimer, since it will display lots of text.
      // Send the current field to the channel
      channel.send({embed:{
          description: description.substring(0,2048), // This takes the first 2048 of characters in description, and sends it.
          color: 0x527f68 // You can set a default color for all the messages here, or pass it via the arguments.
      }}).then(msg => {
          msg.delete(deleteTimer);
      })
      
      // Slice the first 2408 characters from the description
      description = description.slice(2048);
    
    }
    
  },
  
  embed: function (channel, msg, deleteTimer) {
  
      channel.send({
          embed:{
              description: msg, // This will be the message inside the embed
              color: 0x1D82B6 // You can set a default color to whatever you want.
          }
      }).then(message => {
      
          if (!isNaN(deleteTimer)) {
              msg.delete(deleteTimer) // Delete the messages after deleteTimer milliseconds.
          }
      })
  
  }
  
}