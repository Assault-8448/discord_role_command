const djs    = require("discord.js");
const config = require ('./config.json');
const client = new djs.Client({ ws: { properties: { $browser: "Discord iOS" } } });
const prefix = "-";

client.login(config.token);

client.once('ready', () => {
  console.log("E");
  client.user.setActivity('-helpでヘルプ表示！', { type:"PLAYING" } );
  client.user.setStatus('dnd');
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

  if(command === "help") {
    message.channel.send(
      {embed: {
        author: {
          name: "N/S高 21年度生 Discord支部",
          url: "https://nnn.ed.jp/"
        },
        title: "役職付与BOT / help",
        description: 'とりあえず作ってみました。\n役職を外したいときは自分ではずしてね。',
        color: 7506394,
        timestamp: new Date(),
          footer: {
            text: "discord.jsの復習で適当に作りました・。・ | Assault"
        },
          fields: [
            {
              name: "-apex",
              value: "Apex の役職をつけます。",
              inline: true
            },
            {
              name: "-card",
              value: "カードゲーマー の役職をつけます。",
              inline: true
            }
          ]
      }}
    );
  }

// 原始的すぎる方法でRole追加。外すのはセルフでやってね♡
  // Apex
  if(command === "apex") {
    message.guild.member(message.member).roles.add('827077917942611987');
    message.react('✅');
  }

  // カードゲーマー
  if(command === "card") {
    message.guild.member(message.member).roles.add('827077733137514498');
    message.react('✅');
  }

});