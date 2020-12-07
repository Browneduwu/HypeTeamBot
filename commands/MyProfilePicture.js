const Discord = require("discord.js");
const config = require("../config.json");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const pfpembed = new Discord.MessageEmbed();
            pfpembed.setTitle(`${message.author.username}'s profile picture!`);
            pfpembed.setDescription(`This is ${message.author.username}'s profile picture`)
            pfpembed.setImage(`${message.author.avatarURL()}`);
            pfpembed.setColor('ff0000');
    message.delete();
    message.channel.send(pfpembed);
};

module.exports.help= {
    name: "myprofilepicture"
}