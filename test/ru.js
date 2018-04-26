/**
 * Created by kostya on 07.06.17.
 */

var bundle = require('../dist/numberToWords');
    numberToWords=bundle.numberToWords;
    require('../dist/translations/numberToWords.ru');

console.log('RU: ',bundle.numberToWords.getDate("22.01.2012",'ru',1));
console.log('RU: ',bundle.numberToWords.getDate("22.01.2020",'ru',1));
console.log('RU: ',bundle.numberToWords.getDate("22.01.2021",'ru',1));