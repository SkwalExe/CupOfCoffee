module.exports = {
          name: "help",
          description: "Gives information on the bot or on a command!",
          guildOnly: false,
          use: "help [ command ]",
          aliases: [],
          type: "Information",

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const fs = require('fs')
                    const { prefix } = require('../config.json')

                    if (!args) {
                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle('Hey 👋')
                                        .setDescription("I'm " + message.client.user.username + " \nMy prefix is : " + prefix + " \nI'm in " + message.client.guilds.cache.size + " servers and i have " + message.client.users.cache.size + " users ! \nType `" + prefix + " help [ command ]` for more information on a command !" + "\nType `" + prefix + " help all` for see all the commands !")
                              message.reply(embed)
                    } else if (args == "all") {
                              var embed = new Discord.MessageEmbed()
                                        .setColor('PURPLE')
                                        .setTitle('Here are all my commands')
                                        .addField('__Tools__',
                                                  `> \`${prefix} icon\` : Displays a member's icon\n` +
                                                  `> \`${prefix} ping\` : Calculation of response time between the bot and the server\n`)
                                        .addField(`__Fun__`,
                                                  `> \`${prefix} note\` : note something \n` +
                                                  `> \`${prefix} qrcode\` : Create a qrcode which contains what you want\n` +
                                                  `> \`${prefix} lc\` : Calculate the percentage of love between two people ❤\n` +
                                                  `> \`${prefix} ascii\` : Convert your text into ascii art 🎨`

                                        )
                                        .addField('__Moderation__',
                                                  `> \`${prefix} mute\` : Mute a member from the server 🤫\n` +
                                                  `> \`${prefix} unmute\` : Unmute a member from the server 🤫\n` +
                                                  `> \`${prefix} kick\` : Kick a member from the server 😡\n` +
                                                  `> \`${prefix} clear\` : Clear a number of messages or all the messages of a channel\n` +
                                                  `> \`${prefix} ban\` : Ban a member from the server 😡\n` +
                                                  `> \`${prefix} unban\` : Unan a member from the server 🙂\n`
                                        )
                                        .addField('__Information__',
                                                  `> \`${prefix} help\` : Show this message\n`
                                        )
                                        .addField('__Emotions__',
                                                  `> \`${prefix} hug\` : Send someone a hug ❤\n` +
                                                  `> \`${prefix} kiss\` : Send someone a kiss 😘`
                                        )

                              message.reply(embed)
                    } else {
                              var commands = new Discord.Collection();
                              const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

                              for (const file of commandFiles) {

                                        const __command__ = require(`./${file}`);

                                        commands.set(__command__.name, __command__);
                              }




                              const commandName = args
                              const command = commands.get(commandName) ||
                                        commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

                              if (!command) return bot.derror(message, "This command doesn't exist")



                              if (command.guildOnly) { var MP = "no" } else {
                                        var MP = "yes"
                              }

                              embed = new Discord.MessageEmbed()
                                        .setColor("PURPLE")
                                        .setTitle(`${command.name} Command`)
                                        .addField("__Command Type__", command.type)

                                        .addField("__Description__", command.description)
                                        .addField("__Syntax__", `\`\`\`${prefix + " " + command.use}\`\`\``)
                                        .addField("__Available in private message__", MP)

                              message.reply(embed)
                    }
          }
}