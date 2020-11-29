module.exports = {
          name: "stop",
          description: "Stop the song playing",
          guildOnly: false,
          use: "stop",
          type: "Music",
          aliases: ["leave"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const g = message.guild;

                    if (!g.me.voice.connection) return derror(message, "No music playing")
                    bot.embed(message, "Music successfully stopped")
                    g.me.voice.connection.disconnect();

          }
}