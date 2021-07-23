/**
 * Created by kostya on 07.06.17.
 */

var bundle = require('../dist/numberToWords');
    numberToWords=bundle.numberToWords;
    require('../dist/translations/numberToWords.ru');

console.log('RU: ',bundle.numberToWords.getDate("22.01.2012",'ru',1));
console.log('RU: ',bundle.numberToWords.getDate("22.01.2020",'ru',1));
console.log('RU: ',bundle.numberToWords.getDate("22.01.2021",'ru',1));
console.log('RU getPrice : ',bundle.numberToWords.getPrice(102,'ru',"UAH"));
console.log('RU getPrice : ',bundle.numberToWords.getPrice(841,'ru',"UAH"));
console.log('RU getPrice : ',bundle.numberToWords.getPrice(101001,'ru',"UAH"));
console.log('RU getPrice : ',bundle.numberToWords.getPrice(101001,'ru',"USD"));

console.log("numberToWords***************************")
console.log('RU: ',bundle.numberToWords.get(0.0111,'ru'));
console.log('RU: ',bundle.numberToWords.get(0.01,'ru'));
console.log('RU: ',bundle.numberToWords.get(0.9999999,'ru'));