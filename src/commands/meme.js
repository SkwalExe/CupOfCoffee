module.exports = {
          name: "meme",
          description: "Send memes that make you laugh so hard 🤣",
          guildOnly: false,
          use: "meme [ dev (optional) ]",
          type: "Fun",
          aliases: ["memes"],

          execute(message, args) {
                    const Discord = require('discord.js');
                    const bot = require('../bot');

                    if (args.startsWith("dev")) {
                              var memes = [
                                        "https://i1.wp.com/foutucode.fr/wp-content/uploads/2020/01/46507475_1940558176028292_769132817698258944_n_1940558172694959.jpg?w=640&ssl=1",
                                        "https://i1.wp.com/foutucode.fr/wp-content/uploads/2020/01/75610805_2524618430955594_3638787728729964544_n_2524618427622261.jpg?w=750&ssl=1",
                                        "https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/z2bgzv8dflb41.jpg?w=960&ssl=1",
                                        "https://preview.redd.it/ljcdgpms9h161.jpg?width=640&crop=smart&auto=webp&s=e43f3ae482a2794335a6d470ac1dadfdfb8080bc",
                                        "https://preview.redd.it/dkdvhc43ej161.jpg?width=640&crop=smart&auto=webp&s=8c202de14602c2f3a9acd2f24a6fa97e79c94226",
                                        "https://preview.redd.it/jz1vltk78m161.png?width=640&crop=smart&auto=webp&s=4a31249aa40c04e73dae8685d75647ca4a2b8280",
                                        "https://preview.redd.it/ki6288ketl161.jpg?width=640&crop=smart&auto=webp&s=5039093ad2b81abcf59146a5dea94a307b84cacf",
                                        "https://preview.redd.it/f0s7bddiwj161.png?width=640&crop=smart&auto=webp&s=82421c8107e2a4231cf40276cc8f6c536db9987b",
                                        "https://i.redd.it/w1z4nsweyh161.png",
                                        "https://external-preview.redd.it/JgvnkHz5IkeLg3c--vc_KevFNOPHJLECqczziqXIf1E.jpg?width=640&crop=smart&auto=webp&s=50f72c562f0883ee08465d84b1273c2231d73cd3",
                                        "https://i.redd.it/eqirc5l1eq161.png",
                                        "https://i.redd.it/0taa2s1u7s161.png",
                                        "https://i.redd.it/cx5vwgro3p161.png",
                                        "https://preview.redd.it/6n8sabu09t161.jpg?width=640&crop=smart&auto=webp&s=b93fa1468dfabfd6dc7bb0a95565b69681119912",
                                        "https://preview.redd.it/r6qyqt5uzr161.png?width=640&crop=smart&auto=webp&s=55cc1d53dd4b7b27211bf8ce5e0b731940d39785",
                                        "https://i.redd.it/pwwa4wiv30261.png",
                                        "https://preview.redd.it/uf6sbz1wuw161.jpg?width=640&crop=smart&auto=webp&s=6c9783f3b8a7af5d3de6652624950feaa166a9f2",
                                        "https://preview.redd.it/hjhr2ym0wz161.jpg?width=640&crop=smart&auto=webp&s=d4e31fd734a2116d4998a5bdc35ef8ab7a138f5b",
                                        "https://i.redd.it/b1tmcavk7t161.jpg",
                                        "https://preview.redd.it/g16iwuiddx161.jpg?width=640&crop=smart&auto=webp&s=dcd66e9e6b1f84487e7e478744edeeb18804ff4a",
                                        "https://preview.redd.it/3027z75h8x161.jpg?width=640&crop=smart&auto=webp&s=e53a974d566af968e5c4bbc15d9dbd02930d5c11",
                                        "https://preview.redd.it/51acg23o8z161.png?width=640&crop=smart&auto=webp&s=980db7bdd18902659061d170e82bc0a21ea0b0d6",
                                        "https://preview.redd.it/vfnri3et8y161.jpg?width=640&crop=smart&auto=webp&s=a0635f0fd8f407d1d7c383986c771d645d271564",
                                        "https://preview.redd.it/3gin4izk4w161.jpg?width=640&crop=smart&auto=webp&s=407dd3d53dad431624fb4e6cd126ef9b6476bf33"
                              ]
                    } else {
                              var memes = [
                                        "https://res.cloudinary.com/teepublic/image/private/s--H9_ARgXR--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_441/c_crop,g_north_west,h_588,w_441,x_0,y_0/g_north_west,u_upload:v1446840633:production:blanks:ibs7cls1uuxnuwgy7pev,x_-409,y_-299/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1585631741/production/designs/8774318_0",
                                        "https://pbs.twimg.com/media/ESRqx94XsAAlEO7.jpg",
                                        "https://piximus.net/media2/62284/coronavirus-memes-3-1.jpg",
                                        "https://lh3.googleusercontent.com/proxy/nrHRGfTAqq8DZGXut9Br6XzmPc2BNqaLPbhTn6dYL1KZGm9Zp_1GQ4j44BfQPzHsSGtrTaRa6834oDAwNhIz0XZtEG_bMrAfdNh5wnVe-J1WwUQ-l6aZ6v2arg",
                                        "https://i.pinimg.com/originals/cb/ca/22/cbca224fe698a2791e41dea90d8b4188.jpg",
                                        "https://i.pinimg.com/originals/fb/f0/53/fbf053296bea8a8023f304c28d1f71e5.png",
                                        "https://i.redd.it/l8pwndkeq4k41.jpg",
                                        "https://i.pinimg.com/736x/fb/6b/44/fb6b4407fbd5df3ae0380f78fa1ee6f2.jpg",
                                        "https://static.hitek.fr/img/up_m/1830308727/topmemecoronavirus4.jpg",
                                        "https://www.crisiseye.com/wp-content/uploads/2020/05/Coronavirus-memes-to-make-you-laugh-560x416.jpg"
                              ]
                    }


                    var meme = bot.getRandomItemInArray(memes)

                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setImage(meme)

                    message.channel.send(embed)


          }
}