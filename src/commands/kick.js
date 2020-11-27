const { derror } = require('../bot');

module.exports = {
          name: "kick",
          description: "kick a member from the server 😡",
          guildOnly: true,
          use: "kick @member reason",
          type: "Moderation",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (!message.member.hasPermission('KICK_MEMBERS') & !bot.isSkwal(message)) return bot.derror(message, "You dont' have permission to do this ⛔")

                    var user = message.mentions.users.first()

                    if (!user) return derror(message, "You must mention someone")

                    var member = message.guild.member(user)

                    if (!member) return bot.derror(message, "This user is not in the server")
                    if(user.id == "739794179072196704") return bot.derror(message, "I can't kick myself 😆")

                    if (user.id == message.author.id) return bot.derror(message, "I don't want to kick you 😥")

                    if (user.id == message.guild.owner.user.id) return bot.derror(message, "I don't want to kick tho owner of this server 😑")

                    if (!member.bannable) return bot.derror(message, "This member can't be kicked because he has permission to kick members")

                    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return bot.derror(message, "I don't have permission to do this 😞")

                    var reason = args.split(' ')
                    reason.shift()
                    reason = reason.join(' ')
                    if (!reason) reason = "unspecified 😕"
                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle(`You have been kicked from **${message.guild.name}**`)
                              .addField('__Reason__', reason)
                              .setThumbnail(message.guild.iconURL({ dynamic: true }))


                    member.kick().then(() => {
                              try { user.send(embed).catch() } catch (error) { }

                              bot.embed(message, `${user.username} has been kicked successfully 😈`)
                    }).catch(() => {
                              bot.derror(message, "Cannot kick this member because he has a role above mine 😞")
                    })
          }


}