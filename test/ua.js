/**
 * Created by kostya on 07.06.17.
 */

var numberToWords = require('../dist/numberToWords.min');

    require('../dist/translations/numberToWords.ua');

console.log('UA: ',numberToWords.get(2,'ua'));
console.log('UA getPrice: ',numberToWords.getPrice(23,'ua',"UAH"));
console.log('UA getPrice 101.01: ',numberToWords.getPrice(101.01,'ua',"UAH"));
console.log('UA getPrice 101.11: ',numberToWords.getPrice(101.11,'ua',"UAH"));
console.log('UA getPrice 101.20: ',numberToWords.getPrice(101.20,'ua',"UAH"));
console.log('UA getPrice 101.21: ',numberToWords.getPrice(101.21,'ua',"UAH"));
console.log('UA getPrice 101.22: ',numberToWords.getPrice(101.22,'ua',"UAH"));
console.log('UA getPrice 102.22: ',numberToWords.getPrice(102.22,'ua',"UAH"));
console.log('UA getPrice 12.22: ',numberToWords.getPrice(12.22,'ua',"UAH"));
console.log('UA getPrice 101.212: ',numberToWords.getPrice(101.212,'ua',"UAH"));

console.log('UA getPrice 101.24: ',numberToWords.getPrice(101.24,'ua',"840"));
console.log('UA getPrice 101.24: ',numberToWords.getPrice(101.24,'ua',"USD"));

console.log('UA getPrice 101.01: ',numberToWords.getPrice(101.01,'ua',"UAH",{"fractional_is_number":true})); //сто одна гривня 01 копійка
console.log('UA getPrice 69000.0: ',numberToWords.getPrice(69000.0,'ua',"USD",{"fractional_is_number":true})); //сто одна гривня 01 копійка
console.log('UA getPrice 101.01: ',numberToWords.getPrice(101.01,'ua',"UAH")); //сто одна гривня одна копійка
console.log('UA getPrice 102: ',numberToWords.getPrice(102,'ua',"UAH"));
console.log('UA getPrice 841: ',numberToWords.getPrice(841,'ua',"UAH"));
console.log('UA getPrice 841: ',numberToWords.getPrice(101001,'ua',"UAH"));
console.log('UA getPrice 841: ',numberToWords.getPrice(101001,'ua',"USD"));
console.log('UA getPrice 841: ',numberToWords.getPrice(0.31,'ua',"USD"));

console.log('UA getPrice 22 800,0: ',numberToWords.getPrice(22800.0,'ua',"UAH",{"fractional_is_number":true})); //сто одна гривня 01 копійка


console.log("numberToWords***************************")
console.log('UA: ',numberToWords.get(2000000,'ua'));

console.log('UA: ',numberToWords.getDate("22.01.2012",'ua',1));
console.log('UA: ',numberToWords.getDate("22.01.2020",'ua',1));
console.log('UA: ',numberToWords.getDate("22.01.2021",'ua',1));

console.log('UA: ',numberToWords.getDate("22.01.2012",'ua',0));
console.log('UA: ',numberToWords.getDate("22.01.2020",'ua',0));
console.log('UA: ',numberToWords.getDate("22.01.2021",'ua',0));

console.log('UA: ',numberToWords.get(8.5,'ua'));
console.log('UA: ',numberToWords.get(8,'ua'));

console.log('UA getPrice 0.01: ',numberToWords.getPrice(0.01,'ua',"UAH",{"fractional_is_number":true})); // нуль гривень 01 копійка
console.log('UA getPrice 0.01: ',numberToWords.getPrice(0.01,'ua',"UAH")); //нуль гривень одна копійка
console.log('UA getPrice 999000000.01: ',numberToWords.getPrice(999000000.01,'ua',"UAH")); //дев'ятсот дев'яносто дев'ять мільйонів гривень одна копійка
console.log('UA getPrice 1 999 000 000.01: ',numberToWords.getPrice(1999000000.01,'ua',"UAH")); //дев'ятсот дев'яносто дев'ять мільйонів гривень одна копійка
console.log('UA getPrice 12 999 000 000.01: ',numberToWords.getPrice(12999000000.01,'ua',"UAH")); //дванадцять мільярдів дев'ятсот дев'яносто дев'ять мільйонів гривень одна копійка
console.log('UA getPrice 1 912 999 000 000.01: ',numberToWords.getPrice(1912999000000.01,'ua',"UAH")); //один трильйон дев'ятсот дванадцять мільярдів дев'ятсот дев'яносто дев'ять мільйонів гривень одна копійка
console.log('UA getPrice 999 912 999 000 000.01: ',numberToWords.getPrice(999912999000000.01,'ua',"UAH")); // дев'ятсот дев'яносто дев'ять трильйонів дев'ятсот дванадцять мільярдів дев'ятсот дев'яносто дев'ять мільйонів гривень ноль копійок


