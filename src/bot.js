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
                              .setTitle("⛔ Error")
                              .setColor('RED')
                              .setDescription(error)
                    message.reply(embed)
                    return;

          },
          embed(message, text) {
                    const Discord = require('discord.js')

                    var embed = new Discord.MessageEmbed()
                              .setDescription(text)
                              .setColor('PURPLE')

                    return message.channel.send(embed);
          },
          help(message, client, prefix) {
                    const Discord = require('discord.js')
                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle('Hey 👋')
                              .setDescription(`I'm ${client.user.username} ! \nMy prefix is \`${prefix}\` \nI'm in ${client.guilds.cache.size} servers ! \nI have ${client.users.cache.size} users !`)
                    message.channel.send(embed)
          },
          setPresence(client, status) {
                    client.user.setPresence({
                              status: 'online',
                              activity: {
                                        name: status,
                                        type: 'WATCHING',
                              }
                    })
          },
          updateStatus(client) {

                    var number = this.GetRandomInt(1, 10);
                    if (number == 1) {
                              this.setPresence(client, `${client.guilds.cache.size} servers, ${client.users.cache.size} users, ${client.channels.cache.size} channels`)
                    }
                    if (number == 2) {
                              this.setPresence(client, `cup help`)
                    }

                    if (number == 3) {
                              this.setPresence(client, `Prefix : cup`)

                    }
                    if (number == 4) {
                              this.setPresence(client, `${client.guilds.cache.size} servers`)
                    }
                    if (number == 5) {
                              this.setPresence(client, `${client.users.cache.size} users`)
                    }
                    if (number == 6) {
                              this.setPresence(client, `${client.channels.cache.size} channels`)
                    }
                    if (number == 7) {
                              this.setPresence(client, `skwal.net`)

                    }


          },
          GetRandomInt(min, max) {

                    min = Math.ceil(min);
                    max = Math.floor(max);
                    RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
                    return RandomInt;
          },
          removeExtraSpacesFrom(string) {
                    var final = ""
                    for (var i = 0; i < string.length; i++) {
                              if (!(final == "" && string[i] == " ") && !(string[i] === " " && string[i + 1] === " ")) {
                                        final += string[i];
                              }
                    }
                    return final
          },
          message(message) {

                    
                    if (message.guild) { var id = message.guild.id } else { var id = message.author.id }
                    console.log("\33[0m\33[34m[\33[93m MESSAGE\33[0m\33[34m ] : [ user: \33[93m" + message.author.tag + "\33[0m\33[34m ] → [ \33[93m" + message.content + "\33[0m\33[34m ] → [\33[93m server id : " + id + "\33[0m\33[34m ]")

          },
          isSkwal(message) {
                    if (message.author.id == "672823761723981889") { return true } else { return false }
          },
          getRandomItemInArray(array) {
                    Array.prototype.random = function () {
                              return this[Math.floor((Math.random() * this.length))];
                    }
                    return array.random()
          },

}