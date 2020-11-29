module.exports = {
          name: "quote",
          description: "Made a quote",
          guildOnly: false,
          use: "quote [ @author || author ], my quote",
          type: "Tool",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    var user = message.mentions.users.first()





                    if (!user) {
                              args = args.split(',')
                              user = args.shift()
                              args = args.join(' ')
                    } else {
                              user = user.username;
                    }


                    if (!user) return bot.derror(message, "You must mention the author of the quote")

                    if (!args) return bot.derror(message, "You must specify a quote : `quote [ @author || author ], quote`")

                    var embed = new Discord.MessageEmbed()
                              .setColor("PURPLE")
                              .setTitle('Quote by ' + message.author.username)
                              .setDescription(`<:n_quote2:752973231274590209> ${args} <:n_quote1:752973231358738567>` + `\n\n-- ${user}`)
                    message.delete()
                    message.channel.send(embed)
          }
}