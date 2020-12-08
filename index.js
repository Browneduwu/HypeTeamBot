// Imports
const discord = require("discord.js");
const config = require("./config.json");
const bot = new discord.Client({ partials: ["MESSAGE", "CHANNEL", 'REACTION']});
const fs = require("fs");
const Discord = require("discord.js");

// Rich Precense That Changes Every 30 Seconds
bot.on('ready', () => {
    console.log(`${bot.user.username} is ready for action!`);
    
    // Statuses
    const statuses = [
        'dnd',
        'idle',
        'online'
    ];




    // Activities
    const activities = [
        `Screwing Over My Developer!`,
        `Playing On My Developer's Nerves!`,
        `My Developer Sucks!`
    ];




    // Same As ```for``` loop in java
    let i = 0;
    setInterval(() => bot.user.setActivity(`${config.prefix}help | ${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 30000);
    setInterval(() => bot.user.setStatus(`${statuses[i++ % statuses.length]}`), 30000);
});




// Load Commands
bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js")

    if (jsfiles.length <= 0) return console.log("There are no commands to load...");
    
    console.log(`Loading ${jsfiles.length} Commands...`);
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} Loaded!`.replace('.js', ' Command'));
        bot.commands.set(props.help.name, props);
    });
});






// Message event
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
});




// Login Token
bot.login(process.env.TOKEN);