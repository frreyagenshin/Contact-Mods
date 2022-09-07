const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    
    let botStatus = [
        
        `DM me to talk to mods!`,
        
    ]
    
    setInterval(function() {
        let status = botStatus[Math.floor(Math.random() * botStatus.length)];
        client.user.setActivity(status, {type: 'PLAYING'})
    }, 5000);

    console.log(`${client.user.username} is online!`)
})

client.login('MTAxNjc4MjM3NDM3NTI3NjU1NA.GmBgEg.vLh6iD5j5rmbhg3E2u3fLT28i9U7q6-Rxk25-s')