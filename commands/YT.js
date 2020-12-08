const discord = require("discord.js");
const config = require("../config.json");
const bot = new discord.Client();
const ytembed = new discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('Youtubers in this server')
    .addFields({ name: 'Frewdrey', value: 'https://www.youtube.com/channel/UC65SutiV0-Iyn4zHa7q65Yg', inline: true },
    { name: 'Oison', value: 'https://www.youtube.com/channel/UCMDwmZKeM_B7p-t5r3W8ypw', inline: true },
    { name: 'ChampHyper', value: 'https://www.youtube.com/channel/UC79zOvE4cIsPRx9emicfktQ/', inline: true },
    { name: 'ItzMoonix', value: 'https://www.youtube.com/channel/UCflBoGvFJP0YuaidQOAMskw', inline: true },
    { name: 'Browned', value: 'https://www.youtube.com/channel/UCf8Cmfhw-2he0Tft5xokjsQ', inline: true } )

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    };
    if (!message.deletable) {
        console.log(`${message.author}used this command but the message is not deletable`);
    };
    if (!message.guild) return;
    message.channel.startTyping();
    message.channel.send(ytembed);
    message.channel.stopTyping();
};

module.exports.help= {
    name: "yt"
}