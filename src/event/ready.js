module.exports = {
          execute(client) {
                    const bot = require("../bot")
                    bot.print("Client ready at " + client.user.username)
                    bot.setPresence(client, 'Drinking coffee ❤')
          }
}