module.exports = {
          name: "hug",
          description: "Send someone a hug",
          guildOnly: false,
          use: "hug [ user ]",
          aliases: [],
          type: "Emotion",

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    var user = message.mentions.users.first()

                    var number = bot.GetRandomInt(1, 5)
                    var image;
                    if (number == 1) image = `https://risibank.fr/cache/stickers/d1990/199014-full.gif`
                    if (number == 2) image = `https://data.photofunky.net/output/image/9/6/9/1/969119/photofunky.gif`
                    if (number == 3) image = `https://data.photofunky.net/output/image/0/b/9/7/0b9755/photofunky.gif`
                    if (number == 4) image = `https://zupimages.net/up/20/42/liy1.gif`
                    if (number == 5) image = `https://zupimages.net/up/20/01/vsvf.gif`
                    if (!user) {
                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle(message.author.username + ' big hug for you ❤')
                                        .setImage(image)
                    } else {
                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle(`${user.username}, you receive a big hug from ${message.author.username} ❤`)
                                        .setImage(image)
                    }
                    
                    message.channel.send(embed)
                    return

          }
}