const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('準備完了！');
});

client.on('message', message => {
  if (message.content === '-a') {
    message.channel.send('E');
  }
});

client.login('ODI3MDg2MzYzMjkwNTAxMTUy.YGV6Mw.LwcHYTXhjMcTzJmUEUYYxHBz458');