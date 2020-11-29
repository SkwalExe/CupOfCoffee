module.exports = {

          execute(message) {

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


                    var result = sim.findBestMatch(phrase, sentences).bestMatch.target
                    function on(x, y) {
                              if (x == result) { message.reply(y); return true } else { return false }
                    }


                    if (on('hey', "Hey 😊")) ok = true
                    if (on('yo', "yo 😊")) ok = true
                    if (on('i love you', "Me to ❤❤😍")) ok = true
                    if (on('you are ugly', "Did I really deserve this? 😔")) ok = true



                    if (ok) { return true } else { return false }
          }


}