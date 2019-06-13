const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const fs = require("fs");
const { handleVideo, queue } = require("../index.js")
const { Util, RichEmbed } = require("discord.js");
const Discord = require('discord.js')
const config = require('../config.json'); // 
const youtube = new YouTube(process.env.YOUTUBE);

exports.run = async(client, msg, args) => {
  queue.loop()
}