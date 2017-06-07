/**
 * Created by kostya on 07.06.17.
 */

var bundle = require('../dist/numberToWords');
    numberToWords=bundle.numberToWords;
    require('../dist/translations/numberToWords.ru');

console.log('RU: ',bundle.numberToWords.get(2000000,'ru'));