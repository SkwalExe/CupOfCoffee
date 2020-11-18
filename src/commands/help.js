module.exports = {
          name: "help",
          description: "Gives information on the bot or on a command!",
          guildOnly: false,
          use: "help [ command ]",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const fs = require('fs')
                    const { prefix } = require('../config.json')

                    if (!args) {
                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle('Hey 👋')
                                        .setDescription("I'm " + message.client.user.username + " \nMy prefix is : " + prefix + " \nI'm in " + message.client.guilds.cache.size + " servers and i have " + message.client.users.cache.size + " users ! \nType `" + prefix + "help [ command ]` for more information on a command !")
                              message.reply(embed)
                    } else {
                              var commands = new Discord.Collection();
                              const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

                              for (const file of commandFiles) {
                                        
                                        const __command__ = require(`./${file}`);

                                        commands.set(__command__.name, __command__);
                              }

                              console.log(commands);


                              const commandName = args
                              const command = commands.get(commandName) ||
                                        commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

                              if (!command) return bot.derror(message, "This command doesn't exist")



                              if (command.guildOnly) { var MP = "no" } else {
                                        var MP = "yes"
                              }

                              embed = new Discord.MessageEmbed()
                                        .setColor("GREEN")
                                        .setTitle(`Command ${command.name}`)
                                        .addField("__Description__", command.description)
                                        .addField("__Syntax__", `\`\`\`${command.use}\`\`\``)
                                        .addField("__Available in private message__", MP)
                              message.reply(embed)
                    }
          }
}