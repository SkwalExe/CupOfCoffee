module.exports = {
          name: "insult",
          description: "Insult someone 🤬",
          guildOnly: false,
          use: "insult @user",
          type: "Emotion",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var user = message.mentions.users.first()


                    if (!user) return bot.derror(message, 'You must mention someone to insult 🤬')



                    var insults = [
                              "You are so full of shit, the toilet’s jealous.",
                              "It’s impossible to underestimate you.",
                              "Your face makes onions cry.",
                              "Your secrets are always safe with me. I never even listen when you tell me them.",
                              "You are more disappointing than an unsalted pretzel.",
                              "Is your ass jelous of the amount of shit that came out of your mouth?",
                              "You’re the reason God created the middle finger."
                    ]

                    var insult = bot.getRandomItemInArray(insults)


                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setDescription("<@" + user.id + "> " + insult + ' 🤬')
                    message.channel.send(embed)
          }
}