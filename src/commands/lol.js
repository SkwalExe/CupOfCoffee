module.exports = {
          name: "lmao",
          description: "You are lauthing 🤣",
          guildOnly: false,
          use: "lmao",
          type: "Emotions",
          aliases: ["lol", "ptdr", "mdr", "lmfao"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    const images = [
                              `https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif`,
                              `https://media.tenor.com/images/b2f46d7880582fd101e3f62232338659/tenor.gif`,
                              `https://media.tenor.com/images/987423ad956c3185b075df36a51633df/tenor.gif`,
                              `https://media.tenor.com/images/fa3ad4339ce0d88a5ee2f8ba06fa36c3/tenor.gif`,
                              `https://risibank.fr/cache/stickers/d7/704-full.gif`
                    ]

                    const image = bot.getRandomItemInArray(images)


                    const embed = new Discord.MessageEmbed()
                              .setColor("PURPLE")
                              .setImage(image)
                    message.channel.send(embed)
          }
}