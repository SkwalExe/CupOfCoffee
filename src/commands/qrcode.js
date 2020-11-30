module.exports = {
          name: "qrcode",
          description: "Create a qrcode wich contains what you want",
          guildOnly: false,
          use: "qrcode  [ https://example.com || text ]",
          type: "Fun",
          aliases: ["qr"],

          execute(message, args) {



                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const qr = require('qrcode')
                    const fs = require('fs')
                    return bot.derror(message, "THIS COMMAND ISN'T AVAILABLE DUE TO A CRITICAL ERROR")

                    if (!args) return bot.derror(message, "You must specify a link or text")

                    var file = `./src/images/qrcodes/${message.id}.png`

                    qr.toFile(file, args)

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setTitle(message.author.username + ", here is your qrcode !!")
                              .setDescription(`\`${args}\``)
                              .attachFiles([file])
                              .setImage(`attachment://${message.id}.png`)

                    setTimeout(() => { fs.unlinkSync(file) }, 2500)

                    setTimeout(() => { message.channel.send(embed) }, 200)
          }
}