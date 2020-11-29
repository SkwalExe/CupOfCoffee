module.exports = {

          execute(message) {
                    const bot = require('./bot')
                    const sim = require('string-similarity')
                    var ok = false

                    var phrase = message.content.split(' ')
                    phrase.shift()
                    phrase = phrase.join(' ')





                    const sentences = [
                              "you are ugly",
                              "i love you",
                              "hey",
                              "yo"
                    ]


                    var result = sim.findBestMatch(phrase, sentences)
                    if (result.bestMatch.rating < 0.400) return false;
                    result = result.bestMatch.target
                    function on(x, y) {
                              if (x == result) { message.reply(bot.getRandomItemInArray(y)); return true } else { return false }
                    }


                    if (on('hey', ["Hey 😊"])) ok = true
                    if (on('yo', ["yo 😊"])) ok = true
                    if (on('i love you', ["Me to ❤❤😍"])) ok = true
                    if (on('you are ugly', ["Did I really deserve this? 😔"])) ok = true
                    if (on('what are you doing', ["I'm talking to you 😆"])) ok = true



                    if (ok) { return true } else { return false }
          }


}