!function(a,b){if("function"!=typeof define||!define.amd)return a.numberToWords=b();define([],function(){return a.numberToWords=b()})}(this,function(){var a=function(){};a.prototype.get=function(a,b){if(this[b]){var c,d=[],e="";for(a=a.toString(),c=a.length;c>0;c-=3)d.push(a.substring(c-3,c));return e+=this.getMillion(d[2],this[b]),e+=" "+this.getThousand(d[1],this[b]),e+=" "+this.getHundred(d[0],this[b])}return a},a.prototype.getDate=function(a,e,f){if(this[e]){var g,h="",i=[],j=a.split(".");for(h+=b(j[0],this[e],f),h+=d(j[1],this[e]),g=j[2].length;g>0;g-=3)i.push(j[2].substring(g-3,g));return h+=this.getThousand(i[1],this[e]),h+=c(i[0],this[e]),h+=this[e].years[1]}return number};var b=function(a,b,c){return b.days[c][parseInt(a)-1]||a},c=function(a,b){var c="";return void 0!==a&&(3==a.length&&(c+=b.arrayOfString1[a.substring(0,1)],0==a.substring(1,2)&&(c+=b.arrayOfString2_1[a.substring(2,3)]),1==a.substring(1,2)&&(c+=b.arrayOfString3_1[a.substring(2,3)]),a.substring(1,2)>1&&0==a.substring(2,3)&&(c+=b.arrayOfString4_1[a.substring(1,2)]),a.substring(1,2)>1&&a.substring(2,3)>0&&(c+=b.arrayOfString4[a.substring(1,2)],c+=b.arrayOfString2_1[a.substring(2,3)])),2==a.length&&(0==a.substring(0,1)&&(c+=b.arrayOfString2_1[a.substring(1,2)]),1==a.substring(0,1)&&(c+=b.arrayOfString3_1[a.substring(1,2)]),a.substring(0,1)>1&&0==a.substring(1,2)&&(c+=b.arrayOfString4_1[a.substring(1,2)]),a.substring(0,1)>1&&a.substring(1,2)>0&&(c+=b.arrayOfString4[a.substring(0,1)],c+=b.arrayOfString2_1[a.substring(1,2)])),1==a.length&&(c+=b.arrayOfString2_1[a])),c},d=function(a,b){return b.month[parseInt(a)-1]||a};return a.prototype.getHundred=function(a,b){var c="";return void 0!==a&&(3==a.length&&(c+=b.arrayOfString1[a.substring(0,1)],0==a.substring(1,2)&&(c+=b.arrayOfString2[a.substring(2,3)]),1==a.substring(1,2)&&(c+=b.arrayOfString3[a.substring(2,3)]),a.substring(1,2)>1&&(c+=b.arrayOfString4[a.substring(1,2)],c+=b.arrayOfString2[a.substring(2,3)])),2==a.length&&(0==a.substring(0,1)&&(c+=b.arrayOfString2[a.substring(1,2)]),1==a.substring(0,1)&&(c+=b.arrayOfString3[a.substring(1,2)]),a.substring(0,1)>1&&(c+=b.arrayOfString4[a.substring(0,1)],c+=b.arrayOfString2[a.substring(1,2)])),1==a.length&&(c+=b.arrayOfString2[a])),c},a.prototype.getMillion=function(a,b){var c="";if(void 0!==a&&"000"!==a){if(3==a.length)switch(c+=b.arrayOfString1[a.substring(0,1)],0==a.substring(1,2)&&(c+=b.arrayOfString2[a.substring(2,3)]),1==a.substring(1,2)&&(c+=b.arrayOfString3[a.substring(2,3)]),a.substring(1,2)>1&&(c+=b.arrayOfString4[a.substring(1,2)],c+=b.arrayOfString2[a.substring(2,3)]),a.substring(2,3)){case"1":c+=1==a.substring(1,2)?b.arrayOfString7[2]:b.arrayOfString7[0];break;case"2":c+=1==a.substring(1,2)?b.arrayOfString7[2]:b.arrayOfString7[1];break;case"3":c+=1==a.substring(1,2)?b.arrayOfString7[2]:b.arrayOfString7[1];break;case"4":c+=1==a.substring(1,2)?b.arrayOfString7[2]:b.arrayOfString7[1];break;default:c+=b.arrayOfString7[2]}if(2==a.length&&(0==a.substring(0,1)&&(c+=b.arrayOfString2[a.substring(1,2)]),1==a.substring(0,1)&&(c+=b.arrayOfString3[a.substring(1,2)]),a.substring(0,1)>1&&(c+=b.arrayOfString4[a.substring(0,1)],c+=b.arrayOfString2[a.substring(1,2)]),c+=b.arrayOfString7[2]),1==a.length)switch(c+=b.arrayOfString2[a],a){case"1":c+=b.arrayOfString7[0];break;case"2":c+=b.arrayOfString7[1];break;case"3":c+=b.arrayOfString7[1];break;case"4":c+=b.arrayOfString7[1];break;default:c+=b.arrayOfString7[2]}}return c},a.prototype.getThousand=function(a,b){var c="";if(void 0!==a&&"000"!==a){if(3==a.length)switch(c+=b.arrayOfString1[a.substring(0,1)],0==a.substring(1,2)&&(c+=b.arrayOfString6[a.substring(2,3)]),1==a.substring(1,2)&&(c+=b.arrayOfString3[a.substring(2,3)]),a.substring(1,2)>1&&(c+=b.arrayOfString4[a.substring(1,2)],c+=b.arrayOfString6[a.substring(2,3)]),a.substring(2,3)){case"1":c+=1==a.substring(1,2)?b.arrayOfString5[2]:b.arrayOfString5[0];break;case"2":c+=1==a.substring(1,2)?b.arrayOfString5[2]:b.arrayOfString5[1];break;case"3":c+=1==a.substring(1,2)?b.arrayOfString5[2]:b.arrayOfString5[1];break;case"4":c+=1==a.substring(1,2)?b.arrayOfString5[2]:b.arrayOfString5[1];break;default:c+=b.arrayOfString5[2]}if(2==a.length&&(0==a.substring(0,1)&&(c+=b.arrayOfString6[a.substring(1,2)]),1==a.substring(0,1)&&(c+=b.arrayOfString3[a.substring(1,2)]),a.substring(0,1)>1&&(c+=b.arrayOfString4[a.substring(0,1)],c+=b.arrayOfString6[a.substring(1,2)]),c+=b.arrayOfString5[2]),1==a.length)switch(c+=b.arrayOfString6[a],a){case"1":c+=b.arrayOfString5[0];break;case"2":c+=b.arrayOfString5[1];break;case"3":c+=b.arrayOfString5[1];break;case"4":c+=b.arrayOfString5[1];break;default:c+=b.arrayOfString5[2]}}return c},a.prototype.setLocal=function(a,b){return this[a]=b,b},new a});
numberToWords=this.numberToWords;
!function(a,b){"function"==typeof define&&define.amd?define(["numberToWords"],function(a){a.setLocal("ru",b())}):numberToWords.setLocal("ru",b())}(0,function(){return{arrayOfString1:["","сто ","двести ","триста ","четыреста ","пятьсот ","шестьсот ","семьсот ","восемьсот ","девятьсот "],arrayOfString2:["","один ","два ","три ","четыре ","пять ","шесть ","семь ","восемь ","девять "],arrayOfString2_1:["","первого ","второго ","третьего ","четвёртого ","пятого ","шестого ","седьмого ","восьмого ","девятого "],arrayOfString3:["десять ","одиннадцать ","двенадцать ","тринадцать ","четырнадцать ","пятнадцать ","шестнадцать ","семнадцать ","восемнадцать ","девятнадцать "],arrayOfString3_1:["десятого ","одиннадцатого ","двенадцатого ","тринадцатого ","четырнадцатого ","пятнадцатого ","шестнадцатого ","семнадцатого ","восемнадцатого ","девятнадцатого "],arrayOfString4:["","","двадцать ","тридцать ","сорок ","пятьдесят ","шестьдесят ","семьдесят ","восемьдесят ","девяносто "],arrayOfString4_1:["","","двадцатого ","тридцатого ","сорокового ","пятидесятого ","шестидесятого ","семидесятого ","восьмидесятого ","девяностого "],arrayOfString5:["тысяча ","тысячи ","тысяч"],arrayOfString6:["","одна ","две ","три ","четыре ","пять ","шесть ","семь ","восемь ","девять "],arrayOfString7:["миллион ","миллиона ","миллионов "],years:["год ","года ","годов "],days:[["первого ","второго ","третьего ","четвертого ","пятого ","шестого ","седьмого ","восьмого ","девятого ","десятого ","одиннадцатого ","двенадцатого ","тринадцатого ","четырнадцатого ","пятнадцатого ","шестнадцатого ","семнадцатого ","восемнадцатого ","девятнадцатого ","двадцатого ","двадцать первого ","двадцать второго ","двадцать третьего ","двадцать четвертого ","двадцать пятого ","двадцать шестого ","двадцать седьмого ","двадцать восьмого ","двадцать девятого ","тридцатого ","тридцать первого "],["первое ","второе ","третье ","четвертое ","пятое ","шестое ","седьмое ","восьмое ","девятое ","десятое ","одиннадцатое ","двенадцатое ","тринадцатое ","четырнадцатое ","пятнадцатое ","шестнадцатое ","семнадцатое ","восемнадцатое ","девятнадцатое ","двадцатое ","двадцать первое ","двадцать второе ","двадцать третье ","двадцать четвертое ","двадцать пятое ","двадцать шестое ","двадцать седьмое ","двадцать восьмое ","двадцать девятое ","тридцатое ","тридцать первое "]],month:["января ","февраля ","марта ","апреля ","мая ","июня ","июля ","августа ","сентября ","октября ","ноября ","декабря "]}});
!function(a,b){"function"==typeof define&&define.amd?define(["numberToWords"],function(a){a.setLocal("ua",b())}):numberToWords.setLocal("ua",b())}(0,function(){return{arrayOfString1:["","сто ","двiстi ","триста ","чотириста ","п'ятьсот ","шiстьсот ","сiмсот ","вiсiмсот ","дев'ятьсот "],arrayOfString2:["","один ","два ","три ","чотири ","п'ять ","шiсть ","сiм ","вiсiм ","дев'ять "],arrayOfString2_1:["","першого ","другого ","третього ","четвертого ","п'ятого ","шостого ","сьомого ","восьмого ","дев'ятого "],arrayOfString3:["десять ","одинадцять ","дванадцять ","тринадцять ","чотирнадцять ","п'ятнадцять ","шiстнадцять ","сiмнадцять ","вiсiмнадцять ","дев'ятнадцять "],arrayOfString3_1:["десятого ","одинадцятого ","дванадцятого ","тринадцятого ","чотирнадцятого ","п'ятнадцятого ","шістнадцятого ","сімнадцятого ","вісімнадцятого ","дев'ятнадцятого "],arrayOfString4:["","","двадцять ","тридцять ","сорок ","п'ятдесят ","шiстдесят","сiмдесят ","вiсiмдесят ","дев'яносто "],arrayOfString4_1:["","","двадцятого ","тридцятого ","сорокового ","п'ятдесятого ","шестидесятого ","семидесятого ","вісімдесятого ","дев'яностого "],arrayOfString5:["тисяча ","тисячі ","тисяч"],arrayOfString6:["","одна ","двi ","три ","чотири ","п'ять ","шiсть ","сiм ","вiсiм ","дев'ять "],arrayOfString7:["мільйон ","мільйона ","мільйонів "],years:["рік ","року ","років "],days:[["перше ","друге ","третє ","четверте ","п'яте ","шосте ","сьоме ","восьме ","дев'яте ","десяте ","одинадцяте ","дванадцяте ","тринадцяте ","чотирнадцяте ","п'ятнадцяте ","шістнадцяте ","сімнадцяте ","вісімнадцяте ","дев'ятнадцяте ","двадцяте ","двадцять перше ","двадцять друге ","двадцять третє ","двадцять четверте ","двадцять п'яте ","двадцять шосте ","двадцять сьоме ","двадцять восьме ","двадцять дев'яте ","тридцяте ","тридцять перше "],["першого ","другого ","третього ","четвертого ","п'ятого ","шостого ","сьомого ","восьмого ","дев'ятого ","десятого ","одинадцятого ","дванадцятого ","тринадцятого ","чотирнадцятого ","п'ятнадцятого ","шістнадцятого ","сімнадцятого ","вісімнадцятого ","дев'ятнадцятого ","двадцятого ","двадцять першого ","двадцять другого ","двадцять третього ","двадцять четвертого ","двадцять п'ятого ","двадцять шостого ","двадцять сьомого ","двадцять восьмого ","двадцять дев'ятого ","тридцятого ","тридцять першого "]],month:["січня ","лютого ","березня ","квітня ","травня ","червня ","липня ","серпня ","вересня ","жовтня ","листопада ","грудня "]}});
data={
    number:2000000,
    local:"ua"
};
data.words=numberToWords.get(data.number,data.local);

console.log('UA: ',numberToWords.getDate("22.01.2012",data.local,1));
console.log('UA: ',numberToWords.getDate("22.01.2020",data.local,1));
console.log('UA: ',numberToWords.getDate("22.01.2021",data.local,1));

console.log('UA: ',numberToWords.getDate("22.01.2012",data.local,0));
console.log('UA: ',numberToWords.getDate("22.01.2020",data.local,0));
console.log('UA: ',numberToWords.getDate("22.01.2021",data.local,0));
console.log(data)

