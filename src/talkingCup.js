module.exports = {

          execute(message) {
                    const bot = require('./bot')
                    const sim = require('string-similarity')
                    var ok = false

                    var phrase = message.content.split(' ')
                    phrase.shift()
                    phrase = phrase.join(' ')
                    function on(x, y) {
                              var next = false
                              x.forEach(x => {
                                        if (x == result) { message.reply(bot.getRandomItemInArray(y)); next = true } else { next = false }

                              })
                              return next
                    }












                    const sentences = [
                              "Skwal s'est drôlement amélioré en dev",
                              "je vais faire mes devoirs",
                              "t’es trop fort",
                              "tu te codes seul",
                              "je vais t’apprendre à parler",
                              "tu aimes le café",
                              "tu es tellement intelligent",
                              "je mange",
                              "viens on sort",
                              "superbement bien, que fait tu ?",
                              "arrete",
                              "tu es le meilleur",
                              "coucou",
                              "je t'aime",
                              "slt",
                              "salut",
                              "hello",
                              "cv",
                              "t'es beau ?",
                              "Je vais bien",
                              "wesh",
                              "suck me fast",
                              "you are a bot",
                              "you are funny",
                              "how are you",
                              "ah oui effectivement c'est compliqué",
                              "merci",
                              "j'avais pensé pareil",
                              "j'ai plus d'idée",
                              "tu fais quoi",
                              "tu travaille sur quel projet en ce moment",
                              "c'est fou comment on s'ented bien",
                              "ca va",
                              "you are ugly",
                              "i love you",
                              "hey",
                              "yo",
                              "what are you doing"
                    ]


                    var result = sim.findBestMatch(phrase, sentences); if (result.bestMatch.rating < 0.400) return false; result = result.bestMatch.target;


                    if (on(["Skwal s'est drôlement amélioré en dev"], ["Oui :joy:"])) ok = true
                    if (on(["je vais faire mes devoirs"], ["Bonne chance :D"])) ok = true
                    if (on(["t’es trop fort"], ["Merci :sob::smiling_face_with_3_hearts:"])) ok = true
                    if (on(["tu te codes seul"], ["Oui, je me programme moi meme :blush:"])) ok = true
                    if (on(["je vais t’apprendre à parler"], ["Je suis une intelligence artificielle donc plus tu me parle plus je deviens intelligent :blush:"])) ok = true
                    if (on(["tu aimes le café"], ["Le café est la meilleur boisson au monde :blush:"])) ok = true
                    if (on(["tu es tellement intelligent"], ["Je suis une intelligence artificielle :blush:"])) ok = true
                    if (on(["je mange"], ["Bon appetit :yum:"])) ok = true
                    if (on(["viens on sort"], ["Ouiiii :smiling_face_with_3_hearts:"])) ok = true
                    if (on(["superbement bien, que fait tu ?"], ["Je te parle :blush:"])) ok = true
                    if (on(["arrete"], ["Désolé :pensive:"])) ok = true
                    if (on(["tu es le meilleur"], ["Non toi :blush:"])) ok = true
                    if (on(["coucou"], ["Coucou :blush:"])) ok = true
                    if (on(["slt"], ["Hey :blush:"])) ok = true
                    if (on(["salut"], ["Hey :blush:"])) ok = true
                    if (on(["hello"], ["Hello :blush:"])) ok = true
                    if (on(["cv"], ["Oui et toi :blush:"])) ok = true
                    if (on(["t'es beau ?"], ["Ca c'est moi, https://zupimages.net/up/20/48/vqlk.png"])) ok = true
                    if (on(["Je vais bien"], ["Content que tu ailles bien :blush:"])) ok = true
                    if (on(["wesh"], ["Wesh :v:", "Yo :v:"])) ok = true
                    if (on(["suck me fast"], ["..."])) ok = true
                    if (on(["you are a bot"], ["No, i'm a cup :tea:"])) ok = true
                    if (on(["you are funny"], [":joy::rofl:"])) ok = true
                    if (on(["how are you"], ["I'm good :blush:"])) ok = true
                    if (on(["ah oui effectivement c'est compliqué"], ["En effet :sweat_smile:"])) ok = true
                    if (on(['merci'], ["De rien :blush:"])) ok = true
                    if (on(["j'avais pensé pareil"], ["Nous sommes des âmes soeurs :laughing:"])) ok = true
                    if (on(["j'ai plus d'idée"], ["Boir du café donne beaucoup d'inspiration :laughing:"])) ok = true
                    if (on(['tu fais quoi'], ["Je te parle :laughing:"])) ok = true
                    if (on(["tu travaille sur quel projet en ce moment"], ["Je me code moi meme :laughing:"])) ok = true
                    if (on(["c'est fou comment on s'ented bien"], ["Content d'être ami avec toi"])) ok = true
                    if (on(['ca va'], ["Oui et toi :grin:"])) ok = true
                    if (on(['you are ugly'], ["Did I really deserve this? :pensive:"])) ok = true
                    if (on(['i love you'], ["Me to ❤❤:heart_eyes:"])) ok = true
                    if (on(['hey'], ["Hey :blush:"])) ok = true
                    if (on(['yo'], ["yo :blush:"])) ok = true
                    if (on(['what are you doing'], ["I'm talking to you :laughing:"])) ok = true














                    if (ok) { return true } else { return false }
          }


}