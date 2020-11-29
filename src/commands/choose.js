module.exports = {
          name: "choose",
          description: "Randomly select something from a list",
          guildOnly: false,
          use: "choose mee6, CupOfCoffee, carl",
          type: "Tool",
          aliases: ["select"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (!args) return bot.derror(message, "You must specify choices")
                    var choices = args.split(',')

                    if (choices.length < 2) return bot.derror(message, "You must specify at least 2 choices")

                    var choice = bot.getRandomItemInArray(choices)

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setDescription('I choose **' + choice + "**")
                    message.channel.send(embed)
          }
}