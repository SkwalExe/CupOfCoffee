const Discord = require('discord.js');
const fs = require('fs')
const token = process.env.TOKEN
const { prefix } = require('./src/config.json')
const commandFolder = `./src/commands`
const path = require('path')

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync(commandFolder).filter(file => file.endsWith('.js'))
const bot = require('./src/bot')
const talkingCup = require('./src/talkingCup');
const talkingCupPath = './src/talkingCup.js'

for (const file of commandFiles) {
          const command = require(`./src/commands/${file}`);

          client.commands.set(command.name, command);
          bot.print(`Command ${file} loaded`)
}


var event = {};
event.ready = require("./src/event/ready")



client.login(token)

client.on('ready', () => {
          event.ready.execute(client)
})

client.on('message', message => {
          for (const path in require.cache) {
                    if (!path.includes('node_modules')) {
                              console.log(path);

                              delete require.cache[path]
                    }
          }
          if (!message.guild & !message.author.id == message.client.user.id) {
                    var embed = new Discord.MessageEmbed()
                              .addField('__Content__', `<:n_quote2:752973231274590209> ${message.content} <:n_quote1:752973231358738567>`)
                              .setColor('PURPLE')
                              .addField('__Autheur__', message.author.tag)

                    message.client.channels.cache.find(c => c.id == "784480485367611452").send(embed)
          }


          if (message.guild)
                    var beanedrole = message.guild.roles.cache.find(r => r.name == "Beaned")
          if (beanedrole)
                    if (message.member) {
                              var beanemoji = message.client.emojis.cache.find(emoji => emoji.name === "bean")
                              if (message.member.roles.cache.has(beanedrole.id)) message.react(beanemoji).catch(err => message.client.users.cache.find(user => user.id == "672823761723981889").send(err))
                    }



          var lowercase = message.content.split(' ')

          if (lowercase[0]) lowercase[0] = lowercase[0].toLowerCase()
          if (lowercase[1]) lowercase[1] = lowercase[1].toLowerCase()
          message.content = lowercase.join(' ')

          message.content = bot.removeExtraSpacesFrom(message.content)

          message.content = message.content.replace(/\n|\r/g, '');




          if (!message.content.startsWith(prefix)) return;
          message.channel.startTyping()
          bot.message(message)
          for (const file of commandFiles) {
                    delete require.cache[require.resolve(`./src/commands/${file}`)]
                    const command = require(`./src/commands/${file}`);

                    client.commands.set(command.name, command);
          }
          var args = message.content.slice(prefix.length).trim().split(/ +/);
          var commandName = args.shift()

          if (!commandName) return bot.help(message, client, prefix)


          const command = client.commands.get(commandName) ||
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

          if (!command) {
                    delete require.cache[require.resolve(talkingCupPath)];
                    if (talkingCup.execute(message)) return message.channel.stopTyping(true)
                    bot.derror(message, "This command doesn't exist !")
                    return message.channel.stopTyping(true)
          }

          if (command.guildOnly && !message.guild) return bot.derror(message, "This command is not available in private message")
          bot.updateStatus(client)

          command.execute(message, args.join(' '))
          return message.channel.stopTyping(true)

})