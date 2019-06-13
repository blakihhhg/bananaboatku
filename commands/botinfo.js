/*const Discord = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')

exports.run = (client, msg, args) => {
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;  
  
  let max = 10;
  
  let cpu = Math.round(process.cpuUsage().system)
  
  let cpupercent = Math.round((cpu * max) / 100000) / 10;
  
  /*if (cpu > 9000000) {
    msg.channel.send(`Bot terpaksa di restart`).then(() => {
    process.exit(1)
    })
  }
  
  if (isNaN(cpupercent)) cpupercent = 0;
  
  let ClientTag = client.user.tag;
  
  let embed1 = new Discord.RichEmbed()
  .setColor('BLUE')
  .setTitle(`• BOT STATISTICS •`)
  .setThumbnail(client.user.displayAvatarURL)
  .addField(`• Bot        `, `${client.user.tag}`)
  .addField(`• Developer  `, `FaiqGamingYT | CraftyBoat Team`)
  .addField(`• Users, Servers, and Channels`, `**» Users** \`${client.users.size}\`\n**» Servers** \`${client.guilds.size}\`\n**» Channels** \`${client.channels.size}\``)
  .addField(`• Mem Usage  `, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)} / ${(os.totalmem() / 1024 / 1024 + 10000).toFixed(1)} MB`)
  .addField(`• Uptime     `, `${days} Days ${hours} Hours\n${minutes} Minutes ${seconds} Seconds`)
  .addField(`• Cpu Usage  `, `${cpupercent}%`)
  .addField(`• Libs       `, `Discord.js Version \`11.5.0\``)
  .addField(`• Engine     `, `Node.js Version \`11.14.0\``)
  .addField(`• Platform   `, `Linux`)
  .addField(`• Arch       `, `x64`) */
  

const Discord = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')

exports.run = async (client, msg, args) => {
  
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;
  
  let max = 10;
  
  let cpu = Math.round(process.cpuUsage().system)
  
  let cpupercent = Math.round((cpu * max) / 100000 / 10);
  
  //if (cpu > 9000000) {
    //msg.channel.send(`Bot terpaksa di restart`).then(() => {
    //process.exit(1)
    //})
  //}
  if (isNaN(cpupercent)) cpupercent = 0;
  
  let ClientTag = client.user.tag;
  
  let shard = client.shard
  
  if (shard === null) client.shard = 0;
  if (shard === undefined) client.shard = 0;
  //let start = Date.now();
  
  const mss = await msg.channel.send('Wait...');
  let diff = mss.createdTimestamp - msg.createdTimestamp;
  
  
  
  let embed1 = new Discord.RichEmbed()
  
  .setColor('BLUE')
  .setTitle('Bot Statistic')
  .setThumbnail(`${client.user.displayAvatarURL}`)
  .setFooter(`© 2019 - 2020 | By » xFqrizツ | ${client.user.tag} Do Not Copied`)
  .addField(':robot: Info', `\`\`\`• Bot Name » ${client.user.tag}\n• Developer » xFqrizツ | Faiq, くん\`\`\``)
  .addField(':satellite: Connection', `\`\`\`• ${shard} Shard\n• ${client.guilds.size} Server\n• ${client.channels.size} Channels\n• ${client.users.size} Users\`\`\``, true)
  .addField(':gear: System', `\`\`\`• Langs » Node.js - v11.14.0\n• Libs » Discord.js - v11.5.1\`\`\``)
  .addField(':floppy_disk: Usage', `\`\`\`• CPU » ${cpupercent}%\n• Memory » ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1)} / ${(os.totalmem() / 1024 / 1024 + 10000).toFixed(1)} MB\n• Uptime » ${days} D ${hours} Hr ${minutes} Mins ${seconds} Sec\`\`\``)
  .addField(':gear: CPU', `\`\`\`Intel(R) Core(TM) I3 - 3217U CPU @ 1.80 Ghz\`\`\``)
  .addField(':bar_chart: Other', `\`\`\`• Arch » x64\n• Platform » linux\n• Latency » ${diff}Ms\n• Gateaway Ping » ${client.ping.toFixed(0)}Ms\`\`\``)
  //mss.edit(embed1)
  
  let embed2 = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor('Support me?', client.user.displayAvatarURL)
  .addField('Invite Me »', '[Click Here!](https://discord.now.sh/511890934460317697)')
  .addField('Official Server Bot »', '[Click Here!](https://discord.gg/jEYuAqH)')
  .addField('Subscribe Developer »', '**Kero First_Xz »** [Click Here!](https://www.youtube.com/channel/UCNg-0ZFPiUIjWPIPd3z0cug)\n**FaiqGamingYT - Minecraft »** [Click Here!](https://www.youtube.com/channel/UCKLLzidiLNXBFn30ZlOmT3A)')
  
  
  
  mss.edit(embed1).then(msg => {msg.channel.send(embed2)})
  
 /* msg.channel.send(`
= **STATISTICS** = 
• Bot        :: ${client.user.tag} 
• Developer  :: FaiqGamingYT | .KeroKen
• Credits    :: Thanks CEO Cha Soo Hyun#1945 ServerRoles & ServerEmoji!, Thanks Allvaa#6263 for Slots!
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
• Users      :: ${client.users.size}
• Servers    :: ${client.guilds.size}
• Channels   :: ${client.channels.size}
• Discord.js :: v11.5.0
• Node       :: v11.14.0
• Platform   :: Linux
• Arch       :: x64
`, {code: 'AsciiDoc'}) */
}//.toLocaleString() //.toLocaleString() 