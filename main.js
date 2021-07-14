const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`==listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content) {
    var rngNum = Math.floor(Math.random() * 10);
    if(rngNum === 5){
      msg.react('🍆');
      console.log("Yes eggplant cuz", rngNum);
    }
    else{
      console.log("No eggplant cuz", rngNum);
    }
  }
});

client.login(process.env.TOKEN);
