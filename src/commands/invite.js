module.exports = {
          name: "invite",
          description: "Send the link to add the bot to your server",
          guildOnly: false,
          use: "invite",
          type: "Information",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle("Invite me!")
                              .setURL('https://dsc.gg/cupofcoffee')
                              .setDescription('Cup Of Coffee is a multi-purpose bot \nready to skill up and boost up your Discord server \n\nAlso features moderation, administration, fun and much more !')
                    message.channel.send(embed)
          }
}