module.exports = {
          name: "lc",
          description: "Calculate the percentage of love between two people ❤",
          guildOnly: false,
          use: "lc @user1 @user2",
          type:"Fun",
          aliases: ["lovecalc"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    const mentions = message.mentions.users.array()

                    if (!mentions[1]) return bot.derror(message, 'You must mention two people 💑')


                    const user1 = mentions[0]
                    const user2 = mentions[1]

                    var percentage = bot.GetRandomInt(1, 100)

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setDescription(`**${user1.username}** + **${user2.username}** = ${percentage}% of love ❤ \n`)
                    message.reply(embed)
          }

}