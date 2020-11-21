module.exports = {
          name: "icon",
          description: "Displays a member's icon",
          guildOnly: true,
          use: "icon @user",
          type: "Tool",
          aliases: ['pp'],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var user = message.mentions.users.first()

                    if (user) { image = user.displayAvatarURL({ dynamic: true }) } else { image = message.author.displayAvatarURL({ dynamic: true }) }

                    var reply = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle(`OoO nice profile picture !`)
                              .setImage(image)
                    message.channel.send(reply)
          }
}