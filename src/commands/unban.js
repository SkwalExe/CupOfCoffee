module.exports = {
          name: "unban",
          description: "unaban an user from the server ",
          guildOnly: true,
          use: "unban [ id ]",
          type: "Moderation",
          aliases: [],

          async execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');


                    if (!message.member.hasPermission('BAN_MEMBERS') & !bot.isSkwal(message)) return bot.derror(message, "You don't have permission to do this 😞")

                    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return bot.derror(message, "I don't have permission to do this 😞")

                    args = args.split(' ')

                    var id = args.shift()

                    if (!id) return bot.derror(message, "You must specify the id of an user")
                    var reason = args.join(' ')

                    if (!reason) reason = "unspecified 😕"


                    const banList = await message.guild.fetchBans();


                    if (!banList.has(id)) return bot.derror(message, "This user is not banned from the server ")

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle(`You have been unbanned from ${message.guild.name} 😀`)
                              .addField('__Reason__', reason)

                    message.guild.members.unban(id).then(user => {
                              try { user.send(embed).catch() } catch (error) { }
                              bot.embed(message, `${user.username} has been unbanned successfully 😀`)
                    })

          }
}