const { derror } = require('../bot');

module.exports = {
          name: "ban",
          description: "Ban a member from the server 😡",
          guildOnly: true,
          use: "ban @member reason",
          type: "Moderation",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (!message.member.hasPermission('BAN_MEMBERS') & !bot.isSkwal(message)) return bot.derror(message, "You dont' have permission to do this ⛔")

                    var user = message.mentions.users.first()

                    if (!user) return derror(message, "You must mention someone")

                    var member = message.guild.member(user)

                    if (!member) return bot.derror(message, "This user is not in the server")
                    if(muted.id == "739794179072196704") return bot.derror(message, "I can't ban myself 😆")

                    if (user.id == message.author.id) return bot.derror(message, "I don't want to ban you 😥")

                    if (user.id == message.guild.owner.user.id) return bot.derror(message, "I don't want to ban tho owner of this server 😑")

                    if (!member.bannable) return bot.derror(message, "This member can't be banned because he has permission to manage bans")

                    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return bot.derror(message, "I don't have permission to do this 😞")

                    var reason = args.split(' ')
                    reason.shift()
                    reason = reason.join(' ')
                    if (!reason) reason = "unspecified 😕"
                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle(`You have been banned from **${message.guild.name}**`)
                              .addField('__Reason__', reason)
                              .setThumbnail(message.guild.iconURL({ dynamic: true }))

                    member.ban().then(() => {
                              try { user.send(embed).catch() } catch (error) { }

                              bot.embed(message, `${user.username} has been banned successfully 😈`)
                    }).catch(() => {
                              bot.derror(message, "Cannot ban this member because he has a role above mine 😞")
                    })
          }


}