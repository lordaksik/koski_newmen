require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');

const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
   ctx.reply(`Привет ${ctx.message.from.first_name}`)
   console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot '))
bot.hears('/info', async (ctx) => {
   async function request2() {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/1/")
      const data = await response.json()
      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/2/")
      const data2 = await response2.json()
      const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/3/")
      const data3 = await response3.json()
      const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/4/")
      const data4 = await response4.json()
      const response5 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/5/")
      const data5 = await response5.json()
      const response6 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/6/")
      const data6 = await response6.json()
      var res=0,total=0;
      var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
      var n11=0,n21=0,n31=0,n41=0,n51=0,n61=0;
      var n12=0,n22=0,n32=0,n42=0,n52=0,n62=0;
      var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
      var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      var res6=0,res7=0,res8=0,res9=0;
 
      
      for (let i = 0; i <= 29; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(parseInt(number,10)===1 && parseInt(number2,10)===1){
         n1++;
         }
          if(parseInt(number,10)===2 && parseInt(number2,10)===2){
         n2++;
         }
          if(parseInt(number,10)===3 && parseInt(number2,10)===3){
         n3++;
         }
          if(parseInt(number,10)===4 && parseInt(number2,10)===4){
         n4++;
         }
          if(parseInt(number,10)===5 && parseInt(number2,10)===5){
         n5++;
         }
          if(parseInt(number,10)===6 && parseInt(number2,10)===6){
         n6++;
         }
      }
        for (let i = 0; i <= 29; i++) {
         numbe = data2.items.results[i].results[0].number
         numbe2 = data2.items.results[i].results[1].number
         if(parseInt(numbe,10)===1 && parseInt(numbe2,10)===1){
         n11++;
         }
          if(parseInt(numbe,10)===2 && parseInt(numbe2,10)===2){
         n21++;
         }
          if(parseInt(numbe,10)===3 && parseInt(numbe2,10)===3){
         n31++;
         }
          if(parseInt(numbe,10)===4 && parseInt(numbe2,10)===4){
         n41++;
         }
          if(parseInt(numbe,10)===5 && parseInt(numbe2,10)===5){
         n51++;
         }
          if(parseInt(numbe,10)===6 && parseInt(numbe2,10)===6){
         n61++;
         }
      }
            for (let i = 0; i <= 29; i++) {
         numb = data3.items.results[i].results[0].number
         numb2 = data3.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         n12++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         n22++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         n32++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         n42++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         n52++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         n62++;
         }
      }
      var l1=0,l2=0,l3=0,l4=0,l5=0,l6=0;
      var l11=0,l12=0,l13=0,l14=0,l15=0,l16=0;
      var l21=0,l22=0,l23=0,l24=0,l25=0,l26=0;
         for (let i = 0; i <= 29; i++) {
         numb = data4.items.results[i].results[0].number
         numb2 = data4.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l1++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l2++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l3++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l4++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l5++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l6++;
         }
      }
      for (let i = 0; i <= 29; i++) {
         numb = data5.items.results[i].results[0].number
         numb2 = data5.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l11++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l12++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l13++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l14++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l15++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l16++;
         }
      }
      
      
      for (let i = 0; i <= 9; i++) {
         numb = data6.items.results[i].results[0].number
         numb2 = data6.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l21++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l22++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l23++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l24++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l25++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l26++;
         }
      }
      let res1=0;
      let res2=0;
      let res3=0;
      let res4=0;
      let res5=0;
      let res6=0;
      res1 = n1+n11+n12+l1+l11+l21;
      res2 = n2+n21+n22+l2+l12+l22;
      res3 = n3+n31+n32+l3+l13+l23;
      res4 = n4+n41+n42+l4+l14+l24;
      res5 = n5+n51+n52+l5+l15+l25;
      res6 = n6+n61+n62+l6+l16+l2;
       ctx.reply('нет 1  ' +res1+' раз');
       ctx.reply('нет 2  ' +res2+' раз');
       ctx.reply('нет 3  ' +res3+' раз');
       ctx.reply('нет 4  ' +res4+' раз');
       ctx.reply('нет 5  ' +res5+' раз');
       ctx.reply('нет 6  ' +res6+' раз');
    
   }
  request2()
   }
)

bot.hears('/bot', async (ctx) => {
   async function request2() {
       try{
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/1/")
      const data = await response.json()
      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/2/")
      const data2 = await response2.json()
      const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/3/")
      const data3 = await response3.json()
      const response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/4/")
      const data4 = await response4.json()
      const response5 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/5/")
      const data5 = await response5.json()
      const response6 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/10/6/")
      const data6 = await response6.json()
      var res=0,total=0;
      var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
      var n11=0,n21=0,n31=0,n41=0,n51=0,n61=0;
      var n12=0,n22=0,n32=0,n42=0,n52=0,n62=0;
      var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
      var b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
      var res6=0,res7=0,res8=0,res9=0;
 
      
      for (let i = 0; i <= 29; i++) {
         number = data.items.results[i].results[0].number
         number2 = data.items.results[i].results[1].number
         if(parseInt(number,10)===1 && parseInt(number2,10)===1){
         n1++;
         }
          if(parseInt(number,10)===2 && parseInt(number2,10)===2){
         n2++;
         }
          if(parseInt(number,10)===3 && parseInt(number2,10)===3){
         n3++;
         }
          if(parseInt(number,10)===4 && parseInt(number2,10)===4){
         n4++;
         }
          if(parseInt(number,10)===5 && parseInt(number2,10)===5){
         n5++;
         }
          if(parseInt(number,10)===6 && parseInt(number2,10)===6){
         n6++;
         }
      }
        for (let i = 0; i <= 29; i++) {
         numbe = data2.items.results[i].results[0].number
         numbe2 = data2.items.results[i].results[1].number
         if(parseInt(numbe,10)===1 && parseInt(numbe2,10)===1){
         n11++;
         }
          if(parseInt(numbe,10)===2 && parseInt(numbe2,10)===2){
         n21++;
         }
          if(parseInt(numbe,10)===3 && parseInt(numbe2,10)===3){
         n31++;
         }
          if(parseInt(numbe,10)===4 && parseInt(numbe2,10)===4){
         n41++;
         }
          if(parseInt(numbe,10)===5 && parseInt(numbe2,10)===5){
         n51++;
         }
          if(parseInt(numbe,10)===6 && parseInt(numbe2,10)===6){
         n61++;
         }
      }
            for (let i = 0; i <= 29; i++) {
         numb = data3.items.results[i].results[0].number
         numb2 = data3.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         n12++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         n22++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         n32++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         n42++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         n52++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         n62++;
         }
      }
      var l1=0,l2=0,l3=0,l4=0,l5=0,l6=0;
      var l11=0,l12=0,l13=0,l14=0,l15=0,l16=0;
      var l21=0,l22=0,l23=0,l24=0,l25=0,l26=0;
         for (let i = 0; i <= 29; i++) {
         numb = data4.items.results[i].results[0].number
         numb2 = data4.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l1++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l2++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l3++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l4++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l5++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l6++;
         }
      }
      for (let i = 0; i <= 29; i++) {
         numb = data5.items.results[i].results[0].number
         numb2 = data5.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l11++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l12++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l13++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l14++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l15++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l16++;
         }
      }
      
      
      for (let i = 0; i <= 9; i++) {
         numb = data6.items.results[i].results[0].number
         numb2 = data6.items.results[i].results[1].number
         if(parseInt(numb,10)===1 && parseInt(numb2,10)===1){
         l21++;
         }
          if(parseInt(numb,10)===2 && parseInt(numb2,10)===2){
         l22++;
         }
          if(parseInt(numb,10)===3 && parseInt(numb2,10)===3){
         l23++;
         }
          if(parseInt(numb,10)===4 && parseInt(numb2,10)===4){
         l24++;
         }
          if(parseInt(numb,10)===5 && parseInt(numb2,10)===5){
         l25++;
         }
          if(parseInt(numb,10)===6 && parseInt(numb2,10)===6){
         l26++;
         }
      }
      console.log('нет 1  ' +n1+'  '+n11+'  '+n12);
      console.log('нет 2  ' +n2+'  '+n21+'  '+n22);
      console.log('нет 3  ' +n3+'  '+n31+'  '+n32);
      console.log('нет 4  ' +n4+'  '+n41+'  '+n42);
      console.log('нет 5  ' +n5+'  '+n51+'  '+n52);
      console.log('нет 6  ' +n6+'  '+n61+'  '+n62);
      if(n1===0 && n11===0 && n12===0 && l1===0 && l11===0  && l21===0){
         ctx.reply("1-1 не было,  160 раз подряд");
      }
      if(n2===0 && n21===0 && n22===0  && l2===0  && l12===0  && l22===0){
         ctx.reply("2-2 не было,  160 раз подряд");
      }
      if(n3===0 && n31===0 && n32===0  && l3===0  && l13===0  && l23===0){
         ctx.reply("3-3 не было,  160 раз подряд");
      }
      if(n4===0 && n41===0 && n42===0  && l4===0  && l14===0  && l24===0){
         ctx.reply("4-4 не было,  160 раз подряд");
      }
      if(n5===0 && n51===0 && n52===0  && l5===0  && l15===0  && l25===0){
         ctx.reply("5-5 не было,  160 раз подряд");
      }
      if(n6===0 && n61===0 && n62===0  && l6===0   && l16===0  && l26===0){
         ctx.reply("6-6 не было,  160 раз подряд");
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
     catch (err) {
       console.log(err)
    }
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

