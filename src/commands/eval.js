module.exports = {
          name: "eval",
          description: "inject javascript code into the node.js program of the bot, for security reasons this command can only be used by the creators of the bot!",
          guildOnly: false,
          use: "!eval [ Valid JavaScript code ]",
          aliases: [],
          type: "Tool",

          execute(message, args) {
                    const Discord = require('discord.js');
                    var bot = require('../bot');

                    if (message.author.id == "672823761723981889") {
                              if (!args) return bot.derror(message, "You must specifie JavaScript code !")
                              try {
                                        bot.embed(message, "Returns : " + eval(args))
                              } catch (error) {
                                        bot.derror(message, `\`${error}\``)
                              }
                    } else {
                              bot.derror(message, "This command can only be used by bot creators!")
                    }
          }
}