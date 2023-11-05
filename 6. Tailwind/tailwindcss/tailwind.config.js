module.exports = {
   content: ["./index.html"],
   theme: {
     extend: {
       gridTemplateRows: {  // де "gridTemplateRows" - cвойство, яке відповвідає за відповівдний клас
         'layout': 'auto 1fr auto',  // де "'layout': 'auto 1fr auto'" - ім'я по якому ми можемо використовувати суфыкс для класу
       },
       colors: {  // де "colors" - добавляємо здатність використання неіснуючого кольору
         'logo-main': '#9b0404',  // де "'logo-main': '#9b0404'" - неіснуючий колір (як приклад)
       },
       fontFamily: {  // де "fontFamily" - добавляємо здатність використання неіснуючої сім'ї стилів шрифтів
         main: ['Montserrat'],  // де "main: ['Montserrat']" - неіснуюча сім'я стилів шрифтів  (отримана з сайту "https://fonts.google.com/")
       },
     },
   },
   plugins: [],
 }