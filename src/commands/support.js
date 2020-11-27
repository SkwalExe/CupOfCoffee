module.exports = {
          name: "support",
          description: "Send the link to join the support server",
          guildOnly: false,
          use: "support",
          type: "Information",
          aliases: ["server"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle("Support server")
                              .setURL('https://dsc.gg/skwal')
                              .setDescription('Cup Of Coffee is a multi-purpose bot \nready to skill up and boost up your Discord server \n\nAlso features moderation, administration, fun and much more !')
                    message.channel.send(embed)
          }
}