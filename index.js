const djs = require("discord.js");
const client = new djs.Client();
const prefix = "-";//ここ変えると/pingの/が変わる

client.login("ODI3MDg2MzYzMjkwNTAxMTUy.YGV6Mw.LwcHYTXhjMcTzJmUEUYYxHBz458");

client.on("message", (message) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.channel.lock) return;
  if(!message.content.match(new RegExp(`^${this.config.bot_config.prefix}|<@!?${client.user.id}>`))) return;

  const isMention = (message.mentions.has(client.user.id)) ? `<@!${client.user.id}>` : this.config.bot_config.prefix;
  const args = message.content.toString().slice(isMention.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "no") {
    message.channel.send("stop");
  }
});