module.exports = {

          execute(message) {
                    var phrase = message.content.split(' ')
                    phrase.shift()
                    phrase = phrase.join(' ')
                    var ok = false
                    function on(x, y) {
                              if (x == phrase) { message.reply(y); return true } else { return false }
                    }

                    if(on('hey', "Hey 😊")) ok = true



                    if (ok) { return true } else { return false }
          }


}