const discord = require("discord.js");
const config = require("../config.json");
const bot = new discord.Client();
const helpembed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Server Commands')
    .addFields({ name: `${config.prefix}Help`, value: 'Shows you this menu', inline: true }, { name: `${config.prefix}YouTube / ${config.prefix}YT`, value: 'Shows you youtubers on this server', inline: true }, { name: `${config.prefix}Ping / ${config.prefix}Latency`, value: 'Shows you latency to the server', inline: true }, { name: `${config.prefix}Meme`, value: 'Random Meme From Reddit', inline: true }, { name: `${config.prefix}MyPFP / ${config.prefix}MyProfilePic / ${config.prefix}MyProfilePicture`, value: 'Shows your profile picture, good if you lost your profile picture', inline: true });


module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    };
    if (!message.guild) return;
    message.channel.startTyping();
    message.channel.send(helpembed).catch();
    message.channel.stopTyping();
};

module.exports.help= {
    name: "help"
}