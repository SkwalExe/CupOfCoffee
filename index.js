const Discord = require('discord.js');
const fs = require('fs')
const token = process.env.TOKEN
const { prefix } = require('./src/config.json')
const commandFolder = `./src/commands`

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync(commandFolder).filter(file => file.endsWith('.js'))
const bot = require('./src/bot')
const talkingCup = require('./src/talkingCup')

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
          if (message.guild)
                    var beanedrole = message.guild.roles.cache.find(r => r.name == "Beaned")
          if (beanedrole)
                    if (message.member)
                              if (message.member.roles.cache.has(beanedrole.id)) message.react(message.client.emojis.cache.find(emoji => emoji.name === "bean"))



          var lowercase = message.content.split(' ')

          if (lowercase[0]) lowercase[0] = lowercase[0].toLowerCase()
          if (lowercase[1]) lowercase[1] = lowercase[1].toLowerCase()
          message.content = lowercase.join(' ')

          message.content = bot.removeExtraSpacesFrom(message.content)

          message.content = message.content.replace(/\n|\r/g, '');




          if (!message.content.startsWith(prefix)) return;

          bot.message(message)

          var args = message.content.slice(prefix.length).trim().split(/ +/);
          var commandName = args.shift()

          if (!commandName) return bot.help(message, client, prefix)

          if (talkingCup.execute(message)) return

          const command = client.commands.get(commandName) ||
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

          if (!command) return bot.derror(message, "This command doesn't exist !")

          if (command.guildOnly && !message.guild) return bot.derror(message, "This command is not available in private message")
          bot.updateStatus(client)

          command.execute(message, args.join(' '))
          return

})