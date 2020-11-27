module.exports = {
          name: "say",
          description: "Makes the bot say whatever you want",
          guildOnly: false,
          use: "say [ something ]",
          type: "Fun",
          aliases: ["repeat"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (!args) return bot.derror(message, "You must specify something")

                    if (message.mentions.users.first() || message.mentions.everyone || message.mentions.roles.first()) if (!bot.isSkwal(message)) return bot.derror(message, "Please don't @mention anyone")

                    if (bot.isSkwal(message)) {
                              message.channel.send(args)
                              message.delete()
                    } else {
                              message.channel.send(args + "\n\n--@" + message.author.username)
                    }
          }
}