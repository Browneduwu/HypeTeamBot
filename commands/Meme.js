const Discord = require("discord.js");
const config = require("../config.json");
const bot = new Discord.Client();
const channelwarnembed = new Discord.MessageEmbed();
            channelwarnembed.setTitle("Command Usage In Wrong Channel");
            channelwarnembed.setDescription(`Please Use The ${config.prefix}meme Command In <#780684443429634069> Channel`);
            channelwarnembed.setColor('ff0000');


module.exports.run = async (bot, message, args) => {
    if (message.channel.id === "780684443429634069") {
        const got = require('got');
        const embed = new Discord.MessageEmbed();
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`);
            embed.setURL(`${memeUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(memeImage);
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
            message.channel.startTyping();
            message.channel.send(embed).catch(console.error);
            message.channel.stopTyping();
        });
    };
        message.delete();
};
module.exports.help= {
    name: "meme"
}