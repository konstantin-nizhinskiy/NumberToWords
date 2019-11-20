/**
 * Created by kostya on 07.06.17.
 */

var bundle = require('../dist/numberToWords');
    numberToWords=bundle.numberToWords;
    require('../dist/translations/numberToWords.ua');

console.log('UA: ',bundle.numberToWords.get(2,'ua'));
console.log('UA getPrice: ',bundle.numberToWords.getPrice(23,'ua',"UAH"));
console.log('UA getPrice 101.01: ',bundle.numberToWords.getPrice(101.01,'ua',"UAH"));
console.log('UA getPrice 101.11: ',bundle.numberToWords.getPrice(101.11,'ua',"UAH"));
console.log('UA getPrice 101.20: ',bundle.numberToWords.getPrice(101.20,'ua',"UAH"));
console.log('UA getPrice 101.21: ',bundle.numberToWords.getPrice(101.21,'ua',"UAH"));
console.log('UA getPrice 101.22: ',bundle.numberToWords.getPrice(101.22,'ua',"UAH"));
console.log('UA getPrice 102.22: ',bundle.numberToWords.getPrice(102.22,'ua',"UAH"));
console.log('UA getPrice 12.22: ',bundle.numberToWords.getPrice(12.22,'ua',"UAH"));
console.log('UA getPrice 101.212: ',bundle.numberToWords.getPrice(101.212,'ua',"UAH"));

console.log('UA getPrice 101.24: ',bundle.numberToWords.getPrice(101.24,'ua',"840"));
console.log('UA getPrice 101.24: ',bundle.numberToWords.getPrice(101.24,'ua',"USD"));

console.log('UA getPrice 101.01: ',bundle.numberToWords.getPrice(101.01,'ua',"UAH",{"fractional_is_number":true})); //сто одна гривня 01 копійка
console.log('UA getPrice 101.01: ',bundle.numberToWords.getPrice(101.01,'ua',"UAH")); //сто одна гривня одна копійка
console.log('UA getPrice 102: ',bundle.numberToWords.getPrice(102,'ua',"UAH"));
console.log('UA getPrice 841: ',bundle.numberToWords.getPrice(841,'ua',"UAH"));
console.log('UA getPrice 841: ',bundle.numberToWords.getPrice(101001,'ua',"UAH"));
console.log('UA getPrice 841: ',bundle.numberToWords.getPrice(101001,'ua',"USD"));
console.log('UA getPrice 841: ',bundle.numberToWords.getPrice(0.31,'ua',"USD"));


console.log("numberToWords***************************")
console.log('UA: ',bundle.numberToWords.get(2000000,'ua'));

console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',1));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',1));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',1));

console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',0));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',0));
console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',0));