module.exports = {
          name: "mute",
          description: "Mute a memeber from the server ",
          guildOnly: true,
          use: "mute @user reason",
          type: "Moderation",
          aliases: ["shut"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    if (!message.member.hasPermission('MANAGE_ROLES') & !bot.isSkwal(message)) return bot.derror(message, "You don't have permission to do this ⛔")

                    var muted = message.mentions.members.first()

                    if (!muted) return bot.derror(message, "You must mention a member")

                    if(muted.id == "739794179072196704") return bot.derror(message, "I can't mute myself 😆")

                    if (muted.id == message.author.id) return bot.derror(message, "I don't want to mute you 😥")

                    if (muted.id == message.guild.owner.user.id) return bot.derror(message, "I don't want to mute tho owner of this server 😑")
                    if (muted.hasPermission('MANAGE_ROLES')) return bot.derror(message, "Unable to mute this member because he has permisison to manage roles ")
                    var reason = args.split(' ')
                    reason.shift()
                    reason = reason.join(' ')

                    if (!reason) reason = "unspecified 😕"
                    var muted_role = message.guild.roles.cache.find(r => r.name == "Muted")

                    if (!muted_role) {
                              message.guild.roles.create({
                                        data: {
                                                  name: 'Muted',
                                                  color: 'RED',
                                                  permissions: []
                                        },
                                        reason: 'Created muted role',
                              }).then(role => {

                                        if (muted.roles.cache.has(role.id)) return bot.derror(message, "This member is already muted")





                                        muted.roles.add(muted_role).then(() => { bot.embed(message, `${muted.user.username} has been muted successfully`) }).catch(err => {
                                                  bot.derror(message, "Cannot mute this member, check that I am at the top of the list of roles")
                                        })

                                        message.guild.channels.cache.forEach(async (channel, id) => {

                                                  await channel.createOverwrite(muted_role, {
                                                            SEND_MESSAGES: false,
                                                            CONNECT: false,
                                                  });

                                        })

                              }).catch(err => { bot.error(err + ' into : ' + message.guild.name); })
                    } else {
                              if (muted.roles.cache.has(muted_role.id)) return bot.derror(message, "This member is already muted")





                              muted.roles.add(muted_role).then(() => { bot.embed(message, `${muted.user.username} has been muted successfully`) }).catch(err => {
                                        bot.derror(message, "Cannot mute this member, check that I am at the top of the list of roles")
                              })

                              message.guild.channels.cache.forEach(async (channel, id) => {

                                        await channel.createOverwrite(muted_role, {
                                                  SEND_MESSAGES: false,
                                                  CONNECT: false,
                                        });

                              })
                    }

                    var embed = new Discord.MessageEmbed()
                              .setColor('RED')
                              .setTitle('You have been muted from ' + message.guild.name)
                              .addField('__Reason__', reason)

                    try { muted.send(embed) } catch (error) { }





          }
}