require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/bot', async (ctx) => {
   async function request2() {

      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/1/")
      const data = await response.json()
      var res=0,total=0;
      var res6=0,res7=0,res8=0,res9=0;
      for (let i = 0; i <= 4; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(Number(number)+Number(number2)===5){
            res++;
         }
         if(Number(number)+Number(number2)===6){
            res6++;
         }
         
         if(Number(number)+Number(number2)===7){
            res7++;
         }
         
         if(Number(number)+Number(number2)===8){
            res8++;
         }
         
         if(Number(number)+Number(number2)===9){
            res9++;
         }
      }
      console.log(res)
      console.log(Number(number)+Number(number2))
      console.log(res7)
      console.log(res8)
      console.log(res9)
      if(res===5){
         ctx.reply("ОБЩЕЕ ЧИСЛО НА КОСТЯХ 5, 4 раза подряд");
      }
      if(res6===5){
        ctx.reply("ОБЩЕЕ ЧИСЛО НА КОСТЯХ 6, 4 раза подряд");
     }
     if(res7===5){
        ctx.reply("ОБЩЕЕ ЧИСЛО НА КОСТЯХ 7, 4 раза подряд");
     }
     if(res8===5){
        ctx.reply("ОБЩЕЕ ЧИСЛО НА КОСТЯХ 8, 4 раза подряд");
     }
     if(res9===5){
        ctx.reply("ОБЩЕЕ ЧИСЛО НА КОСТЯХ 9, 4 раза подряд");
     }
   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Кости» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 45000)
   }
   good()
}
)

bot.hears('/end', async (ctx) => {

   try {
      clearInterval(time);

      ctx.reply("Пока");
   } catch (err) {
      ctx.reply("Этот бот и так выключен");
   }
})

bot.launch()

