const Discord = require('discord.js');
const fs = require('fs')

const { token, prefix } = require('./src/config.json')
const commandFolder = `./src/commands`

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync(commandFolder).filter(file => file.endsWith('.js'))
const bot = require('./src/bot')

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
          message.content = message.content.toLowerCase()

          if (!message.content.startsWith(prefix)) return;

          bot.print(`[ ${message.author.username} ]  : [ ${message.content} ]`)

          var args = message.content.slice(prefix.length).trim().split(/ +/);
          var commandName = args.shift()

          if (!commandName) return bot.help(message, client, prefix)

          const command = client.commands.get(commandName) ||
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

          if (!command) return bot.derror(message, "This command doesn't exist !")

          if (command.guildOnly && !message.guild) return bot.derror(message, "This command is not available in private message")
          command.execute(message, args.join(' '))
          return

})