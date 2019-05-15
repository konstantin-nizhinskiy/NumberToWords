/*
name: nks-number-to-words
version: 0.9.2
author: Konstantin Nizhinskiy <konstantin.nizhinskiy@gmail.com>
date: 2019-05-15 10:05:39 

*/

(function(root,factory){
    if(typeof define ==='function' && define.amd){
        define([],function(){
            return root.numberToWords=factory()
        })
    }else{
        return root.numberToWords=factory();
    }
}(this,function(){
    var NumberToWords=function(){

    };
    // 
/**
 * Number converter to words
 *
 * @param number {int/string} - number
 * @param local {string} locale [ru,ua]
 * @return {*}
 */
NumberToWords.prototype.get=function(number,local){
    if(this[local]){
        var mass=[],
            str='',
            i;
        number=number.toString();
        for(i=number.length;i>0;i=i-3){
            mass.push(number.substring(i-3,i));
        }
        str+=this.getMillion(mass[2],this[local]);
        str+=' '+this.getThousand(mass[1],this[local]);
        str+=' '+this.getHundred(mass[0],this[local]);

        return str;
    }

    return number;

};
/**
 * Hundred converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @param currency {string} currency [USD,UAH,...]
  * @return {string}
 */
NumberToWords.prototype.getCopPrice=function(num,intStr,currency){
    var str='';


    if(num!==undefined){
        if(num.length==1){
            num+="0"
        }
        var _num=parseInt(num);
        if(_num>99){
            str+=num+" "
            if(intStr.currency2[currency]) {
                switch (num.substring(2, 3)) {
                    case '1':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=" "+currency
            }
        }
        if(_num>9 && _num<100){


                if (num.substring(0, 1) == 1) {
                    str += intStr.arrayOfString3[num.substring(1, 2)]; //11..20
                }
                if (num.substring(0, 1) > 1) {

                    str += intStr.arrayOfString4[num.substring(0, 1)]; //20..90
                    str += intStr.arrayOfString2_2[num.substring(1, 2)]; //1..9
                }

            if(intStr.currency[currency]) {
                switch (num.substring(1, 2)) {
                    case '1':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=currency
            }


        }
        if(_num<10){
            str+=intStr.arrayOfString2_2[_num]; //1..9
            
            if(intStr.currency2[currency]) {
                switch (_num) {
                    case 1:
                        str+=intStr.currency2[currency][0];
                        break;
                    case 2:
                        str+=intStr.currency2[currency][1];
                        break;
                    case 3:
                        str+=intStr.currency2[currency][1];
                        break;
                    case 4:
                        str+=intStr.currency2[currency][1];
                        break;
                    default:
                        str+=intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=currency
            }

        }

    }else{
        if(!num){
            if(intStr.currency2[currency]){
                return intStr.arrayOfString8[0]+intStr.currency2[currency][2]
            }else{
                return intStr.arrayOfString8[0]+currency
            }

        }
    }
    return str;
};
/**
 * Hundred converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @param currency {string} currency [USD,UAH,...]
  * @return {string}
 */
NumberToWords.prototype.getCopPriceNumber=function(num,intStr,currency){
    var str='';


    if(num!==undefined){
        if(num.length==1){
            num+="0"
        }
        var _num=parseInt(num);
        str+=num+" ";
        if(_num>99){
            if(intStr.currency2[currency]) {
                switch (num.substring(2, 3)) {
                    case '1':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=" "+currency
            }
        }
        if(_num>9 && _num<100){
            if(intStr.currency[currency]) {
                switch (num.substring(1, 2)) {
                    case '1':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency2[currency][2];
                        } else {
                            str += intStr.currency2[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=currency
            }


        }
        if(_num<10){
            if(intStr.currency2[currency]) {
                switch (_num) {
                    case 1:
                        str+=intStr.currency2[currency][0];
                        break;
                    case 2:
                        str+=intStr.currency2[currency][1];
                        break;
                    case 3:
                        str+=intStr.currency2[currency][1];
                        break;
                    case 4:
                        str+=intStr.currency2[currency][1];
                        break;
                    default:
                        str+=intStr.currency2[currency][2];
                        break;
                }
            }else{
                str+=currency
            }

        }

    }else{
        if(!num){
            if(intStr.currency2[currency]){
                return "0 "+intStr.currency2[currency][2]
            }else{
                return "0 "+currency
            }

        }
    }
    return str;
};
/**
 * Date{DD.MM.YYYY} converter to words
 *
 * @param date {string} - number
 * @param local {string} locale [ru,ua]
 * @param type {string} type days [1,2]
 * @return {*}
 */
NumberToWords.prototype.getDate=function(date,local,type){
    if(this[local]){
        var str='',
            i,
            mass=[],
            dates=date.split(/[\.-]/);
        str+=_getDateDay(dates[0],this[local],type);
        str+=_getDateMonth(dates[1],this[local]);
        for(i=dates[2].length;i>0;i=i-3){
            mass.push(dates[2].substring(i-3,i));
        }
        str+=this.getThousand(mass[1],this[local]);
        str+=_getDateHundred(mass[0],this[local]);
        str+=this[local].years[1];


        return str;
    }

    return number;

};
/**
 * Thousand days to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
var _getDateDay=function(num,intStr,type){
    return intStr.days[type][parseInt(num)-1]||num;
};

/**
 * Hundred converter date years to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
var _getDateHundred=function(num,intStr){
    var str='';
    if(num!==undefined){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString2_1[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3_1[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1 && num.substring(2,3)==0){
                str+=intStr.arrayOfString4_1[num.substring(1,2)]; //20..90
            }
            if(num.substring(1,2)>1 && num.substring(2,3)>0){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString2_1[num.substring(2,3)]; //1..9
            }



        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString2_1[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3_1[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1 && num.substring(1,2)==0){
                str+=intStr.arrayOfString4_1[num.substring(1,2)]; //20..90
            }
            if(num.substring(0,1)>1 && num.substring(1,2)>0){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString2_1[num.substring(1,2)]; //1..9
            }



        }
        if(num.length==1){
            str+=intStr.arrayOfString2_1[num]; //1..9


        }

    }
    return str;
};
/**
 * Convert month to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
var _getDateMonth=function(num,intStr){
    return intStr.month[parseInt(num)-1]||num;
};

/**
 * Hundred converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
NumberToWords.prototype.getHundred=function(num,intStr){
    var str='';
    if(num!==undefined){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString2[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString2[num.substring(2,3)]; //1..9
            }



        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString2[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString2[num.substring(1,2)]; //1..9
            }



        }
        if(num.length==1){
            str+=intStr.arrayOfString2[num]; //1..9


        }

    }
    return str;
};
/**
 * Hundred converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
NumberToWords.prototype.getHundredPrice=function(num,intStr,currency){
    var str='';
    if(num!==undefined){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString2_2[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString2_2[num.substring(2,3)]; //1..9
            }
            if(intStr.currency[currency]) {
                switch (num.substring(2, 3)) {
                    case '1':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(1, 2) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency[currency][2];
                        break;
                }
            }else{
                str+=" "+currency
            }

        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString2_2[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString2_2[num.substring(1,2)]; //1..9
            }
            if(intStr.currency[currency]) {
                switch (num.substring(1, 2)) {
                    case '1':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][0];
                        }

                        break;
                    case '2':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    case '3':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    case '4':
                        if (num.substring(0, 1) == 1) {
                            str += intStr.currency[currency][2];
                        } else {
                            str += intStr.currency[currency][1];
                        }
                        break;
                    default:
                        str += intStr.currency[currency][2];
                        break;
                }
            }else{
                str+=" "+currency
            }



        }
        if(num.length==1){
            str+=intStr.arrayOfString2_2[num]; //1..9
            
            if(intStr.currency[currency]) {
                switch (num) {
                    case '1':
                        str+=intStr.currency[currency][0];
                        break;
                    case '2':
                        str+=intStr.currency[currency][1];
                        break;
                    case '3':
                        str+=intStr.currency[currency][1];
                        break;
                    case '4':
                        str+=intStr.currency[currency][1];
                        break;
                    default:
                        str+=intStr.currency[currency][2];
                        break;
                }
            }else{
                str+=" "+currency
            }

        }

    }
    return str;
};
/**
 * Million converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
NumberToWords.prototype.getMillion=function(num,intStr){
    var str='';
    if(num!==undefined && num!=='000'){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString2[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString2[num.substring(2,3)]; //1..9
            }

            switch (num.substring(2,3)) {
                case '1':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString7[2];
                    }else{
                        str+=intStr.arrayOfString7[0];
                    }
                    break;
                case '2':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString7[2];
                    }else{
                        str+=intStr.arrayOfString7[1];
                    }
                    break;
                case '3':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString7[2];
                    }else{
                        str+=intStr.arrayOfString7[1];
                    }
                    break;
                case '4':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString7[2];
                    }else{
                        str+=intStr.arrayOfString7[1];
                    }
                    break;
                default:
                    str+=intStr.arrayOfString7[2];
                    break;
            }

        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString2[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString2[num.substring(1,2)]; //1..9
            }

            str+=intStr.arrayOfString7[2];

        }
        if(num.length==1){
            str+=intStr.arrayOfString2[num]; //1..9
            switch (num) {
                case '1':
                    str+=intStr.arrayOfString7[0];
                    break;
                case '2':
                    str+=intStr.arrayOfString7[1];
                    break;
                case '3':
                    str+=intStr.arrayOfString7[1];
                    break;
                case '4':
                    str+=intStr.arrayOfString7[1];
                    break;
                default:
                    str+=intStr.arrayOfString7[2];
                    break;
            }

        }

    }
    return str;
};
/**
 * Number type price  converter to words
 *
 * @param number {int/string} - number
 * @param local {string} locale [ru,ua]
 * @param currency {string} currency [USD,UAH,...]
 * @param options {object} property
 * @param options.fractional_is_number {boolean} A fractional number not convert
 * @return {*}
 */
NumberToWords.prototype.getPrice=function(number,local,currency,options){
    if(this[local]){
        var mass=[],
            str='',
            i,
            currency_number={
                "840":"USD",
                "980":"UAH",
                "978":"EUR"
            };
        if(currency_number[currency.toString()]){
            currency=currency_number[currency.toString()];
        }
        options=options||{};
        number=number.toString();
        var numbers=number.split(/[.,]/);
        for(i=numbers[0].length;i>0;i=i-3){
            mass.push(numbers[0].substring(i-3,i));
        }
        str+=this.getMillion(mass[2],this[local]);
        str+=' '+this.getThousand(mass[1],this[local]);
        str+=' '+this.getHundredPrice(mass[0],this[local],currency);
        if(options.fractional_is_number){
            str+=this.getCopPriceNumber(numbers[1],this[local],currency);
        }else{
            str+=this.getCopPrice(numbers[1],this[local],currency);
        }

        return str;
    }

    return number;

};
/**
 * Thousand converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
NumberToWords.prototype.getThousand=function(num,intStr){
    var str='';
    if(num!==undefined && num!=='000'){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString6[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString6[num.substring(2,3)]; //1..9
            }

            switch (num.substring(2,3)) {
                case '1':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString5[2];
                    }else{
                        str+=intStr.arrayOfString5[0];
                    }

                    break;
                case '2':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString5[2];
                    }else{
                        str+=intStr.arrayOfString5[1];
                    }
                    break;
                case '3':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString5[2];
                    }else{
                        str+=intStr.arrayOfString5[1];
                    }
                    break;
                case '4':
                    if(num.substring(1,2)==1){
                        str+=intStr.arrayOfString5[2];
                    }else{
                        str+=intStr.arrayOfString5[1];
                    }
                    break;
                default:
                    str+=intStr.arrayOfString5[2];
                    break;
            }

        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString6[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString6[num.substring(1,2)]; //1..9
            }

            str+=intStr.arrayOfString5[2];

        }
        if(num.length==1){
            str+=intStr.arrayOfString6[num]; //1..9
            switch (num) {
                case '1':
                    str+=intStr.arrayOfString5[0];
                    break;
                case '2':
                    str+=intStr.arrayOfString5[1];
                    break;
                case '3':
                    str+=intStr.arrayOfString5[1];
                    break;
                case '4':
                    str+=intStr.arrayOfString5[1];
                    break;
                default:
                    str+=intStr.arrayOfString5[2];
                    break;
            }

        }

    }
    return str;
};
/**
 * Thousand converter to words
 *
 * @param local {string} - locale [ua,ru,....]
 * @param intStr {object} - translations locale
 * @return {object}
 */
NumberToWords.prototype.setLocal=function(local,intStr){
    this[local]=intStr;
    return intStr;

};
    return new NumberToWords();
}));
