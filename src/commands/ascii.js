module.exports = {
          name: "ascii",
          description: "Convert your text into ascii art 🎨",
          guildOnly: false,
          use: "ascii text",
          type: "Fun",
          aliases: [],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const ascii = require('ascii-art')

                    if (!args) return bot.derror(message, 'You must specify text ')

                    ascii.font(args, "Doom", (err, text) => {
                              if (text.length > 1000) bot.derror(message, "Too many caracters")
                              message.channel.send(`\`\`\`${text}\`\`\`-- ${message.author.username}`)
                    })
          }
}