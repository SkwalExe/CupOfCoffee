module.exports = {
          name: "embed",
          description: "Create a message embed that contains what you want",
          guildOnly: false,
          use: "embed text ( markdown is supported ) ",
          type: "Tool",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (!args) return bot.derror(message, "You must specify the content of the embed")

                    if (args.lenght > 1000) return bot.derror(message, "Too many caracters")

                    var embed = new Discord.MessageEmbed()
                              .setColor("PURPLE")
                              .setTitle("Message from " + message.author.tag)
                              .setDescription(args)
                    message.delete()
                    message.channel.send(embed)

          }
}