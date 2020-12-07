const discord = require("discord.js");
const config = require("../config.json");
const bot = new discord.Client();
const helpembed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Server Commands')
    .addFields({ name: `${config.prefix}help`, value: 'Shows you this menu', inline: true }, { name: `${config.prefix}youtube / ${config.prefix}yt`, value: 'Shows you youtubers on this server', inline: true }, { name: `${config.prefix}ping`, value: 'Shows you latency to the server', inline: true }, { name: `${config.prefix}meme`, value: 'Random Meme From Reddit', inline: true });


module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    };
    if (!message.guild) return;
    message.channel.startTyping();
    message.channel.send(helpembed);
    message.channel.stopTyping();
};

module.exports.help= {
    name: "help"
}