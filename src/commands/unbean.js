module.exports = {
          name: "unbean",
          description: "Unbean a member",
          guildOnly: true,
          use: "unbean @user",
          type: "Fun",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    if (!message.member.hasPermission('MANAGE_ROLES') & !bot.isSkwal(message)) return bot.derror(message, "You don't have permission to do this !")


                    var beaned = message.mentions.members.first()

                    if (!beaned) return bot.derror(message, "You must mention someone")


                    bot.embed(message, `${beaned.displayName} unbeaned successfully !`)


                    var beanrole = message.guild.roles.cache.find(r => r.name == "Beaned")
                    if (!beanrole) {
                              message.guild.roles.create({
                                        data: {
                                                  name: 'Beaned',
                                                  color: 'GREEN',
                                                  permissions: []
                                        },
                                        reason: 'we needed a role for Super Cool People',
                              }).catch(err => { bot.print(red + err + ' into : ' + g.name); })
                    } else {
                              if (beaned.roles.cache.has(beanrole.id)) beaned.roles.remove(beanrole.id)

                    }


          }
}