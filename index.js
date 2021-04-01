const djs    = require("discord.js");
const config = require ('./config.json');
const client = new djs.Client();
const prefix = "-";

client.login(config.token);

client.once('ready', () => {
  console.log("E");
});

client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.channel.lock) return;
  if(!message.content.match(new RegExp(`^${config.prefix}|<@!?${client.user.id}>`))) return;

  const isMention = (message.mentions.has(client.user.id)) ? `<@!${client.user.id}>` : config.prefix;
  const args = message.content.toString().slice(isMention.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "no") {
    message.channel.send("stop");
  }

  if(command === "1") {
    message.guild.member(message.member).roles.add('827091381876555776');
    message.react('👀')
  }
});