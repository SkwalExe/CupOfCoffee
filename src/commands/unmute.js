module.exports = {
          name: "unmute",
          description: "Unute a memeber from the server ",
          guildOnly: true,
          use: "unmute @user reason",
          type: "Moderation",
          aliases: ["unshut"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    if (!message.member.hasPermission('MANAGE_ROLES') & !bot.isSkwal(message)) return bot.derror(message, "You don't have permission to do this ⛔")

                    var muted = message.mentions.members.first()

                    if (!muted) return bot.derror(message, "You must mention a member")

                    if (muted.id == message.author.id) return bot.derror(message, "How you can send a message while you are muted <:hmmmm:774773803334631435>")

                    if (muted.id == message.guild.owner.user.id) return bot.derror(message, "How did the owner of the server get muted How did the owner of the server get transferred?")

                    var muted_role = message.guild.roles.cache.find(r => r.name == "Muted")

                    if (!muted_role) return bot.derror(message, "This member isn't muted")

                    if (!muted.roles.cache.has(muted_role.id)) return bot.derror(message, "This member isn't muted")

                    muted.roles.remove(muted_role).then(() => {
                              bot.embed(message, ` ${muted.user.username} was successfully unmuted`)
                    })

                    embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle('You have been unmuted from ' + message.guild.name)

                    try { muted.send(embed) } catch (error) { }





          }
}