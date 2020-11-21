module.exports = {
          name: "kiss",
          description: "Send someone a kiss",
          guildOnly: false,
          use: "kiss [ user ]",
          aliases: [],
          type: "Emotion",

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var user = message.mentions.users.first()
                    var image;
                    var number = bot.GetRandomInt(1, 3)
                    if (number == 1) image = `https://media.tenor.com/images/134bad0dd7b1e2f20f8b4c36ebf8b5b2/tenor.gif`
                    if (number == 2) image = `https://i.giphy.com/media/mAPmmqdNvDVUbWC0Vc/giphy.gif`
                    if (number == 3) image = `https://i.pinimg.com/originals/a4/b5/bb/a4b5bb3e9d9c9ebf3c8e5866f3da171c.gif`



                    if (!user) {

                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle(message.author.username + ' big kiss for you 😘')
                                        .setImage(image)

                    } else {

                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle(`${user.username}, you receive a big kiss from ${message.author.username} 😘`)
                                        .setImage(image)
                    }
                    message.channel.send(embed)
                    return

          }
}