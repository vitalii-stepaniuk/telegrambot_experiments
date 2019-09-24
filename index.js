const dotenv = require('dotenv')
dotenv.config()
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = process.env.TELEGRAM_BOT_TOKEN

const bot = new TelegramBot(TOKEN, {
    polling: true
})

var helpers = require('./helpers')

const COMMON_CHAT_ID = process.env.TELEGRAM_CHAT_ID
// const schedule = require('node-schedule')

// var j = schedule.scheduleJob('* * * * *', function(){
//     bot.sendMessage(COMMON_CHAT_ID, 'Each minute message');
// });

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, helpers.debug(msg))
})

bot.onText(/\/menu (.+)/, (msg, [source, match]) => {
    console.log(match)
    const { id } = msg.chat

    bot.sendMessage(id, 'Choose action', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'ir remote TV' + "\uD83D\uDE4C",
                        callback_data: '1',
                    },
                    {
                        text: 'ir remote BeBe',
                        callback_data: '3',
                    }
                ],
                [
                        {
                        text: 'ir remote Fan',
                        callback_data: '2',
                    }
                ]
            ]
        }
    })
})