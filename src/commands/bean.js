module.exports = {
          name: "bean",
          description: "Fake ban, react with bean emoji if the member is beaneds",
          guildOnly: true,
          use: "bean @user",
          type: "Fun",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    if (!message.member.hasPermission('MANAGE_ROLES') & !bot.isSkwal(message)) return bot.derror(message, "You don't have permission to do this !")


                    var beaned = message.mentions.members.first()

                    if (!beaned) return bot.derror(message, "You must mention someone")


                    bot.embed(message, `${beaned.displayName} beaned successfully !`)


                    var beanrole = message.guild.roles.cache.find(r => r.name == "Beaned")
                    if (!beanrole) {
                              message.guild.roles.create({
                                        data: {
                                                  name: 'Beaned',
                                                  color: 'GREEN',
                                                  permissions: []
                                        },
                                        reason: 'we needed a role for Super Cool People',
                              }).then(beanrole => beaned.roles.add(beanrole)).catch(err => { bot.print(red + err + ' into : ' + g.name); })
                    } else {
                              if (beaned.roles.cache.has(beanrole.id)) return bot.derror(message, "This user is already beaned")
                              beaned.roles.add(beanrole)
                    }


          }
}