
module.exports = {
          name: 'play',
          description: "Play a song on a vocal channel",
          guildOnly: true,
          use: "play [ url || keywords ]",
          type: "Music",
          aliases: ["p"],

          async execute(message, args) {
                    const g = message.guild
                    const Discord = require('discord.js');
                    const bot = require('../bot');
                    const ytdl = require('ytdl-core');
                    var url;
                    const youtubeAPI = process.env.youtubeAPI;
                    const youtubeClient = require('simple-youtube-api')
                    const youtube = new youtubeClient(youtubeAPI)


                    async function play(connection, message) {


                              server.dispatcher = connection.play(ytdl(server.url, { filter: 'audioonly', highWaterMark: 1 << 25 }));

                              server.dispatcher.on('finish', () => {

                                        connection.disconnect();
                                        bot.embed(message, `I finished playing [__${server.info.videoDetails.title}__](${server.url})`)
                              })
                    }


                    if (!servers) var servers = {}

                    if (!servers[g.id]) servers[g.id] = {
                              url: undefined
                    };

                    var server = servers[g.id]


                    if (!message.member.voice.channel) return bot.derror(message, "You must be in a vocal channel to use this command")
                    if (!args) return bot.derror(message, "You must specify an url or keywords")


                    const valid = ytdl.validateURL(args)



                    var msg = await bot.embed(message, "Searching for " + args)

                    if (valid) {
                              url = args
                    } else {
                              var results = await youtube.searchVideos(args, 1)
                              if (!results[0]) return (bot.derror(message, "Unable to find the video you are looking for"))
                              url = results[0].url
                    }
                    server.info = await ytdl.getBasicInfo(url)
                    var embed = new Discord.MessageEmbed()
                              .setColor('PURPLE')
                              .setDescription(`Playing [__${server.info.videoDetails.title}__](${url})`)
                              .setImage(server.info.videoDetails.thumbnail.thumbnails[server.info.videoDetails.thumbnail.thumbnails.length - 1].url)

                    msg.edit(embed)

                    server.url = url

                    var connection = await message.member.voice.channel.join()


                    play(connection, message)




          }
}