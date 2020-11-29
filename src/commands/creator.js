module.exports = {
          name: "creator",
          description: "Information about the creator of the bot",
          guildOnly: false,
          use: "creator",
          type: "Information",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .addField("__Youtube__", "[Skwal](https://youtube.com/Skwal)")
                              .addField("__Discord__", `[Skwal#0001](https://discordapp.com/users/672823761723981889#${message.channel.id})`)
                              .addField("__Server__", `[dsc.gg/Skwal](https://dsc.gg/Skwal)`)
                              .addField("__Website__", `[skwal.net](http://skwal.net)`)
                              .addField("__Add to server__", `[dsc.gg/CupOfCoffee](http://dsc.gg/CupOfCoffee)`)

                    message.channel.send(embed);

          }


}