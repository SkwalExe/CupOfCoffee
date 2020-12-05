module.exports = {
          name: "website",
          description: "Send the link to the bot's website",
          guildOnly: false,
          use: "website",
          type: "Information",
          aliases: ["web", "site"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle('Our website')
                              .setURL('https://skwal.net')
                              .setDescription('[Page of the bot](https://skwal.net/CupOfCoffee) \nAdd Cup Of Coffee to your server and start giving it cool perks !');

                    message.channel.send(embed);

          }


}