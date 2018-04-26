/**
 * Created by kostya on 07.06.17.
 */

var bundle = require('../dist/numberToWords');
    numberToWords=bundle.numberToWords;
    require('../dist/translations/numberToWords.ua');

console.log('UA: ',bundle.numberToWords.get(2000000,'ua'));

console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',1));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',1));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',1));

console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',0));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',0));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',0));