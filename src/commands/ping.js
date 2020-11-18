module.exports = {
          name: "ping",
          description: "Calculation of response time between the bot and the server",
          guildOnly: false,
          use: "ping",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    var bot = require('../bot');
                    var embed = new Discord.MessageEmbed()
                              .setAuthor(`🏓 Pinging....`)
                              .setColor("#FFFAFA")
                    message.channel.send(embed).then(ML => {
                              var ping = ML.createdTimestamp - message.createdTimestamp
                              var embed = new Discord.MessageEmbed()
                                        .setAuthor(`🏓 Pong ! Your ping is ${ping} ms.`)
                                        .setColor("#FFFAFA")

                              ML.edit(embed)

                    })
          }
}