/**
 * Created by kostya on 07.06.17.
 */

var numberToWords = require('../dist/numberToWords.min');
    require('../dist/translations/numberToWords.ru');

console.log('RU: ',numberToWords.getDate("22.01.2012",'ru',1));
console.log('RU: ',numberToWords.getDate("22.01.2020",'ru',1));
console.log('RU: ',numberToWords.getDate("22.01.2021",'ru',1));
console.log('RU getPrice : ',numberToWords.getPrice(102,'ru',"UAH"));
console.log('RU getPrice : ',numberToWords.getPrice(841,'ru',"UAH"));
console.log('RU getPrice : ',numberToWords.getPrice(101001,'ru',"UAH"));
console.log('RU getPrice : ',numberToWords.getPrice(101001,'ru',"USD"));

console.log("numberToWords***************************")
console.log('RU: ',numberToWords.get(0.0111,'ru'));
console.log('RU: ',numberToWords.get(0.01,'ru'));
console.log('RU: ',numberToWords.get(0.9999999,'ru'));