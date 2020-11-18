module.exports = {
          print(text) {
                    console.log("\33[0m\33[32m[ BOT ] : " + text)
                    return
          },
          error(error) {
                    console.log("\33[0m\33[31m[ BOT ] : " + error)
                    return
          },
          derror(message, error) {
                    const Discord = require('discord.js')

                    var embed = new Discord.MessageEmbed()
                              .setTitle("Error")
                              .setColor('RED')
                              .setDescription(error)
                    message.reply(embed)
                    return;

          },
          embed(message, text) {
                    const Discord = require('discord.js')

                    var embed = new Discord.MessageEmbed()
                              .setTitle(text)
                              .setColor('PURPLE')
                    message.reply(embed)
                    return;
          },
          help(message, client, prefix) {
                    const Discord = require('discord.js')
                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle('Hey 👋')
                              .setDescription(`I'm ${client.user.username} ! \nMy prefix is \`${prefix}\` \nI'm in ${client.guilds.cache.size} servers ! \nI have ${client.users.cache.size} users !`)
                    message.channel.send(embed)
          }

}