module.exports = {

          execute(message) {
                    var sentences = null
                    const bot = require('./bot')
                    const sim = require('string-similarity')
                    var ok = false
                    sentences = new Array()
                    var phrase = message.content.split(' ')
                    phrase.shift()
                    phrase = phrase.join(' ')
                    var result
                    var bestMatchRating = 0.400
                    var ans
                    function on(x, y) {
                              var next = false
                              x.forEach(x => {
                                        sentences.push(x)
                                        result = sim.findBestMatch(phrase, sentences);
                                        if (result.bestMatch.rating > bestMatchRating) {
                                                  bestMatchRating = result.bestMatch.rating
                                                  result = result.bestMatch.target;
                                                  if (x == result) {
                                                            ans = bot.getRandomItemInArray(y);
                                                            next = true
                                                  }
                                        }
                              })

                              return next
                    }



                    if (



                              // are you an ia
                              on(["are you an ia"], ["Yes I am"]) ||

                              // hmmm
                              on(["hmm"], ["Hmmmm <:hmmmm:774773803334631435>"]) ||

                              // insulte 
                              on(["you suck"], ["Did I really deserve this? :pensive:", "..."]) ||


                              // how are you
                              on(["do you have a website", "whats your website"], ["my website is https://skwal.net"]) ||


                              // how are you
                              on(["how are you"], ["I'm good... :blush:"]) ||



                              // i'm lauthing
                              on(["i'm lauthing"], [":sob::joy:"]) ||


                              // you are the best
                              on(["you are the best"], ["Thanks you a lot :sob:", "No, you :blush:"]) ||


                              // hey 
                              on(["hey", "hello", "wsh", "slt", "wesh", "salut", "'sup", "bonjour"], ["Hey :blush:", "Hello :blush:"]) ||

                              // what are you doing
                              on(["what are you doing"], ["I'm talking to you :blush:"])







                    ) ok = true
                    if (ok) {
                              setTimeout(() => {
                                        message.reply(ans);
                              }, 2000); return true
                    } else { return false }
          }


}



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































