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
      var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
      var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
      var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      var res6=0,res7=0,res8=0,res9=0;
      
      for (let i = 0; i <= 23; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(parseInt(number,10)!=1){
         a1++;
         }
          if(parseInt(number,10)!=2){
         a2++;
         }
          if(parseInt(number,10)!=3){
         a3++;
         }
          if(parseInt(number,10)!=4){
         a4++;
         }
          if(parseInt(number,10)!=5){
         a5++;
         }
          if(parseInt(number,10)!=6){
         a6++;
         }
           if(parseInt(number2,10)!=1){
         b1++;
         }
          if(parseInt(number2,10)!=2){
         b2++;
         }
          if(parseInt(number2,10)!=3){
         b3++;
         }
          if(parseInt(number2,10)!=4){
         b4++;
         }
          if(parseInt(number2,10)!=5){
         b5++;
         }
          if(parseInt(number2,10)!=6){
         b6++;
         }
      }
      if(a1===24){
         ctx.reply("1 у красной кости не было  15 раз подряд");
      }
       if(a2===24){
         ctx.reply("2 у красной кости не было  15 раз подряд");
      }
       if(a3===24){
         ctx.reply("3 у красной кости не было  15 раз подряд");
      }
       if(a4===24){
         ctx.reply("4 у красной кости не было  15 раз подряд");
      }
       if(a5===24){
         ctx.reply("5 у красной кости не было  15 раз подряд");
      }
       if(a1===24){
         ctx.reply("1 у красной кости не было  15 раз подряд");
      }
       if(b1===24){
         ctx.reply("1 у синей кости не было  15 раз подряд");
      }
       if(b2===24){
         ctx.reply("2 у синей кости не было  15 раз подряд");
      }
       if(b3===24){
         ctx.reply("3 у синей кости не было  15 раз подряд");
      }
       if(b4===24){
         ctx.reply("4 у синей кости не было  15 раз подряд");
      }
       if(b5===24){
         ctx.reply("5 у синей кости не было  15 раз подряд");
      }
       if(b6===24){
         ctx.reply("6 у синей кости не было  15 раз подряд");
      }
      
      
      for (let i = 0; i <= 29; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(parseInt(number,10)!=1 && parseInt(number2,10)!=1){
         n1++;
         }
          if(parseInt(number,10)!=2 && parseInt(number2,10)!=2){
         n2++;
         }
          if(parseInt(number,10)!=3 && parseInt(number2,10)!=3){
         n3++;
         }
          if(parseInt(number,10)!=4 && parseInt(number2,10)!=4){
         n4++;
         }
          if(parseInt(number,10)!=5 && parseInt(number2,10)!=5){
         n5++;
         }
          if(parseInt(number,10)!=6 && parseInt(number2,10)!=6){
         n6++;
         }
      }
      if(n1===30){
         ctx.reply("1-1 не было,  30 раз подряд");
      }
      if(n2===30){
         ctx.reply("2-2 не было,  30 раз подряд");
      }
      if(n3===30){
         ctx.reply("3-3 не было,  30 раз подряд");
      }
      if(n4===30){
         ctx.reply("4-4 не было,  30 раз подряд");
      }
      if(n5===30){
         ctx.reply("5-5 не было,  30 раз подряд");
      }
      if(n6===30){
         ctx.reply("6-6 не было,  30 раз подряд");
      }
      
      for (let i = 0; i <= 11; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(parseInt(number,10)+parseInt(number2,10)===5){
            res++;
         }
         if(parseInt(number,10)+parseInt(number2,10)===6){
            res++;
         }
         
         if(parseInt(number,10)+parseInt(number2,10)===7){
            res++;
         }
         
         if(parseInt(number,10)+parseInt(number2,10)===8){
            res++;
         }
         
         if(parseInt(number,10)+parseInt(number2,10)===9){
            res++;
         }
         console.log(parseInt(number,10)+parseInt(number2,10))
      }
      
      if(res===12){
         ctx.reply("Сумма костей от 5 до 9,  12 раз подряд");
      }
   }
   function good() {
      ctx.reply( "Вы запустили Бота на стратегию «Кости» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
      ctx.reply('Бот отслежки запущен!')
      global.time = setInterval(request2, 30000)
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

