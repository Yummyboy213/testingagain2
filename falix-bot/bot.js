const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'lincolnisahotty.falixsrv.me', // Replace this with your Falix server IP
  port: 35928,
  username: 'imfreakingALIVE' // Can be anything
});

bot.on('spawn', () => {
  console.log('Bot has joined the server!');
  bot.chat('Keeping server alive!');
});

bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot disconnected.'));
