module.exports = {
          name: "note",
          description: "Note something",
          guildOnly: false,
          use: "note something",
          type: "Fun",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if(!args) return bot.derror(message, "You must specify something to note")
                    var result = bot.GetRandomInt(1, 20)

                    bot.embed(message, `I note ${args} __${result}/20__`)
          }
}