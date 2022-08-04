/*
name: nks-number-to-words
version: 1.03.00
author: Konstantin Nizhinskiy <konstantin.nizhinskiy@gmail.com>
date: 2022-08-04 10:08:57 

*/

(function(root,factory){
    if(typeof define ==='function' && define.amd){
        define([],function(){
            return root.numberToWords=factory()
        })
    } else if(typeof module === "object" && module.exports) {
        // the CommonJS loader.
        module.exports = (root.numberToWords = factory());
    } else{
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
            mass0=[],
            str='',
            i;
        number=number.toString();
        var numbers=number.split(/[.,]/);

        for(i=numbers[0].length; i>0; i -= 3){
            mass.push(numbers[0].substring(i-3,i));
        }
        str+=this.getMillion(mass[2],this[local]);
        str+=' '+this.getThousand(mass[1],this[local]);
        str+=' '+this.getHundred(mass[0],this[local]);

        if(numbers[1]){
            if(numbers[1].length>7){
                return number
            }
            str+=this[local].arrayOfString8[1];
            for(i=numbers[1].length; i>0; i -= 3){
                mass0.push(numbers[1].substring(i-3,i));
            }
            if(["0","00","000"].indexOf(mass0[2])<0) {
                str += " " + this.getMillion(mass0[2], this[local]);
            }

            if(["0","00","000"].indexOf(mass0[1])<0) {
                str += " " + this.getThousand(mass0[1], this[local]);
            }
            str+=" "+this.getHundredZero(mass0[0],this[local],this[local]["arrayOfString0"][numbers[1].length]);

        }
        return str.replace(/ +/g," ").trim();
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
    var str='',
        arrayOfString2_2;

    if(getRodeCurr(currency)=="W"){
        arrayOfString2_2=intStr.arrayOfString2_2
    }else{
        arrayOfString2_2=intStr.arrayOfString2
    }
    if(num!==undefined){
        if(num.length==1){
            num+="0"
        }
        var _num=parseInt(num);
        if(_num>99){
            str+=num+" ";
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
                    str += arrayOfString2_2[num.substring(1, 2)]; //1..9
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
            str+=arrayOfString2_2[_num]; //1..9
            
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

    return date;

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
            if(num=="0"){
                str+=intStr.arrayOfString8[0]; //0
            }else{
                str+=intStr.arrayOfString2[num]; //1..9
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
 * @return {string}
 */
NumberToWords.prototype.getHundredPrice=function(num,intStr,currency){
    var str='',
        arrayOfString2_2;
    if(getRodeCurr(currency)=="W"){
        arrayOfString2_2=intStr.arrayOfString2_2
    }else{
        arrayOfString2_2=intStr.arrayOfString2
    }
    if(num!==undefined){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=arrayOfString2_2[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=arrayOfString2_2[num.substring(2,3)]; //1..9
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

                str+=arrayOfString2_2[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=arrayOfString2_2[num.substring(1,2)]; //1..9
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
            if(num==0){
                str+=intStr.arrayOfString8[0]; //0
            }else{
                str+=arrayOfString2_2[num]; //1..9
            }

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
 * Hundred converter to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
NumberToWords.prototype.getHundredZero=function(num,intStr,arrayOfString0){
    var str='',name="";
    if(num!==undefined){
        if(num.length==3){
            str+=intStr.arrayOfString1[num.substring(0,1)]; //100..900
            if(num.substring(1,2)==0){

                str+=intStr.arrayOfString2_2[num.substring(2,3)]; //1..9
            }
            if(num.substring(1,2)==1){

                str+=intStr.arrayOfString3[num.substring(2,3)]; //11..20
                name=arrayOfString0[1]
            }
            if(num.substring(1,2)>1){

                str+=intStr.arrayOfString4[num.substring(1,2)]; //20..90
                str+=intStr.arrayOfString2_2[num.substring(2,3)]; //1..9
            }
            if(!name){
                if(num.substring(2,3)==="1"){
                    name=arrayOfString0[0]
                }else{
                    name=arrayOfString0[1]
                }
            }

            str+=name;

        }
        if(num.length==2){
            if(num.substring(0,1)==0){

                str+=intStr.arrayOfString2_2[num.substring(1,2)]; //1..9
            }
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..20
                name=arrayOfString0[1]
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString2_2[num.substring(1,2)]; //1..9
            }
            if(!name){
                if(num.substring(1,2)==="1"){
                    name=arrayOfString0[0]
                }else{
                    name=arrayOfString0[1]
                }
            }

            str+=name;



        }
        if(num.length==1){
            str+=intStr.arrayOfString2_2[num]; //1..9
            if(num==="1"){
                name=arrayOfString0[0]
            }else{
                name=arrayOfString0[1]
            }
            str+=name;
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
 * @param number {int/string} - sum
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
                "978":"EUR",
                "810":"RUR",
                "643":"RUB",
                "616":"PLZ",
                "985":"PLN",
                "826":"GBP",
                "756":"CHF",
                "203":"CZK",
                "124":"CAD",
                "752":"SEK",
                "578":"NOK",
                "392":"JPY",
                "376":"ILS",
                "933":"BYN",
                "398":"KZT",
                "036":"AUD",
                "981":"GEL",
                "860":"UZS",
                "498":"MDL",
                "348":"HUF",
                "156":"CNY",
                "554":"NZD",
                "944":"AZN",
                "356":"INR",
                "417":"KGS",
                "208":"DKK"

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

        return str.replace(/ +/g," ").trim();
    }

    return number;

};
/*
 * @param currency {string} currency [USD,UAH,...]
 * @return {*}
 */
var getRodeCurr=function(currency){
    var currency_rod={
                "UAH": "W",
                "USD": "M",
                "EUR": "M",
                "RUR": "M",
                "RUB": "M",
                "PLZ": "M",
                "PLN": "M",
                "GBP": "M",
                "CHF": "M",
                "CZK": "W",
                "CAD": "M",
                "SEK": "W",
                "NOK": "W",
                "JPY": "W",
                "ILS": "M",
                "BYN": "M",
                "KZT": "M",
                "DKK": "W",
                "AUD": "M",
                "GEL": "M",
                "UZS": "M",
                "MDL": "M",
                "HUF": "M",
                "CNY": "M",
                "NZD": "M",
                "AZN": "M",
                "INR": "W",
                "KGS": "M"
            };
    return currency_rod[currency]||"M";

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
                switch (num.substring(1,2)) {
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
            if(num.substring(0,1)==1){

                str+=intStr.arrayOfString3[num.substring(1,2)]; //11..19
                str+=intStr.arrayOfString5[2];
            }
            if(num.substring(0,1)>1){

                str+=intStr.arrayOfString4[num.substring(0,1)]; //20..90
                str+=intStr.arrayOfString6[num.substring(1,2)]; //1..9
                switch (num.substring(1,2)) {
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
//arrayOfString5: ["тисяча ", "тисячі ", "тисяч"],


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
    var numberToWords=new NumberToWords()

    // 
numberToWords.setLocal("ru", {
 "arrayOfString1": [
  "",
  "сто ",
  "двести ",
  "триста ",
  "четыреста ",
  "пятьсот ",
  "шестьсот ",
  "семьсот ",
  "восемьсот ",
  "девятьсот "
 ],
 "arrayOfString2": [
  "",
  "один ",
  "два ",
  "три ",
  "четыре ",
  "пять ",
  "шесть ",
  "семь ",
  "восемь ",
  "девять "
 ],
 "arrayOfString2_1": [
  "",
  "первого ",
  "второго ",
  "третьего ",
  "четвёртого ",
  "пятого ",
  "шестого ",
  "седьмого ",
  "восьмого ",
  "девятого "
 ],
 "arrayOfString2_2": [
  "",
  "одна ",
  "две ",
  "три ",
  "четыре ",
  "пять ",
  "шесть ",
  "семь ",
  "восемь ",
  "девять "
 ],
 "arrayOfString3": [
  "десять ",
  "одиннадцать ",
  "двенадцать ",
  "тринадцать ",
  "четырнадцать ",
  "пятнадцать ",
  "шестнадцать ",
  "семнадцать ",
  "восемнадцать ",
  "девятнадцать "
 ],
 "arrayOfString3_1": [
  "десятого ",
  "одиннадцатого ",
  "двенадцатого ",
  "тринадцатого ",
  "четырнадцатого ",
  "пятнадцатого ",
  "шестнадцатого ",
  "семнадцатого ",
  "восемнадцатого ",
  "девятнадцатого "
 ],
 "arrayOfString4": [
  "",
  "",
  "двадцать ",
  "тридцать ",
  "сорок ",
  "пятьдесят ",
  "шестьдесят ",
  "семьдесят ",
  "восемьдесят ",
  "девяносто "
 ],
 "arrayOfString4_1": [
  "",
  "",
  "двадцатого ",
  "тридцатого ",
  "сорокового ",
  "пятидесятого ",
  "шестидесятого ",
  "семидесятого ",
  "восьмидесятого ",
  "девяностого "
 ],
 "arrayOfString5": [
  "тысяча ",
  "тысячи ",
  "тысяч "
 ],
 "arrayOfString6": [
  "",
  "одна ",
  "две ",
  "три ",
  "четыре ",
  "пять ",
  "шесть ",
  "семь ",
  "восемь ",
  "девять "
 ],
 "arrayOfString7": [
  "миллион ",
  "миллиона ",
  "миллионов "
 ],
 "arrayOfString8": [
  "ноль ",
  "целых "
 ],
 "arrayOfString0": [
  [],
  [
   "десятая ",
   "десятых "
  ],
  [
   "сотая ",
   "сотых "
  ],
  [
   "тысячная ",
   "тысячных "
  ],
  [
   "стотысячная ",
   "стотысячных "
  ],
  [
   "миллионная ",
   "миллионных "
  ],
  [
   "десятимиллионная ",
   "десятимиллионных "
  ],
  [
   "стомиллионная ",
   "стомиллионных "
  ]
 ],
 "years": [
  "год ",
  "года ",
  "годов "
 ],
 "currency": {
  "UAH": [
   "гривна ",
   "гривны ",
   "гривен "
  ],
  "USD": [
   "доллар ",
   "доллара ",
   "долларов "
  ],
  "EUR": [
   "евро ",
   "евро ",
   "евро "
  ],
  "RUR": [
   "рубль ",
   "рубля ",
   "рублей "
  ],
  "RUB": [
   "рубль ",
   "рубля ",
   "рублей "
  ],
  "PLZ": [
   "злотый ",
   "злотых ",
   "злотых "
  ],
  "PLN": [
   "злотый ",
   "злотых ",
   "злотых "
  ],
  "GBP": [
   "фунт ",
   "фунта ",
   "фунтов "
  ],
  "CHF": [
   "франк ",
   "франка ",
   "франков "
  ],
  "CZK": [
   "крона ",
   "кроны ",
   "крон "
  ],
  "CAD": [
   "доллар ",
   "доллара ",
   "долларов "
  ],
  "SEK": [
   "крона ",
   "кроны ",
   "крон "
  ],
  "NOK": [
   "крона ",
   "кроны ",
   "крон "
  ],
  "JPY": [
   "иена ",
   "иены ",
   "иен "
  ],
  "ILS": [
   "шекель ",
   "шекеля ",
   "шекелей "
  ],
  "BYN": [
   "рубль ",
   "рубля ",
   "рублей "
  ],
  "KZT": [
   "тенге ",
   "тенге ",
   "тенге "
  ],
  "DKK": [
   "крона ",
   "кроны ",
   "крон "
  ],
  "AUD": [
   "доллар ",
   "доллара ",
   "долларов "
  ],
  "GEL": [
   "лари ",
   "лари ",
   "лари "
  ],
  "UZS": [
   "сум ",
   "сума ",
   "сумов "
  ],
  "MDL": [
   "лей ",
   "лея ",
   "леев "
  ],
  "HUF": [
   "форинт ",
   "форинта ",
   "форинтов "
  ],
  "CNY": [
   "юань ",
   "юаня ",
   "юаней "
  ],
  "NZD": [
   "доллар ",
   "доллара ",
   "долларов "
  ],
  "AZN": [
   "манат ",
   "маната ",
   "манатов "
  ],
  "INR": [
   "рупия ",
   "рупии ",
   "рупий "
  ],
  "KGS": [
   "сом ",
   "сома ",
   "сомов "
  ]
 },
 "currency2": {
  "UAH": [
   "копейка ",
   "копейки ",
   "копеек "
  ],
  "USD": [
   "цент ",
   "цента ",
   "центов "
  ],
  "EUR": [
   "евроцент ",
   "евроцента ",
   "евроцентов "
  ],
  "RUR": [
   "копейка ",
   "копейки ",
   "копеек "
  ],
  "RUB": [
   "копейка ",
   "копейки ",
   "копеек "
  ],
  "PLZ": [
   "грош ",
   "гроша ",
   "грошей "
  ],
  "PLN": [
   "грош ",
   "гроша ",
   "грошей "
  ],
  "GBP": [
   "пенс ",
   "пенса ",
   "пенсов "
  ],
  "CHF": [
   "сантим ",
   "сантима ",
   "сантимов "
  ],
  "CZK": [
   "геллер ",
   "геллера ",
   "геллеров "
  ],
  "CAD": [
   "цент ",
   "цента ",
   "центов "
  ],
  "SEK": [
   "эре ",
   "эре ",
   "эре "
  ],
  "NOK": [
   "эре ",
   "эре ",
   "эре "
  ],
  "JPY": [
   "сен ",
   "сен ",
   "сен "
  ],
  "ILS": [
   "агора ",
   "агоры ",
   "агорот "
  ],
  "BYN": [
   "копейка ",
   "копейки ",
   "копеек "
  ],
  "KZT": [
   "тиын ",
   "тиына ",
   "тиынов "
  ],
  "DKK": [
   "эре ",
   "эре ",
   "эре "
  ],
  "AUD": [
   "цент ",
   "цента ",
   "центов "
  ],
  "GEL": [
   "тетри ",
   "тетри ",
   "тетри "
  ],
  "UZS": [
   "тиын ",
   "тиына ",
   "тиынов "
  ],
  "MDL": [
   "бань ",
   "баня ",
   "баней "
  ],
  "HUF": [
   "филлер ",
   "филлера ",
   "филлеров "
  ],
  "CNY": [
   "фынь ",
   "фыня ",
   "фыней "
  ],
  "NZD": [
   "цент ",
   "цента ",
   "центов "
  ],
  "AZN": [
   "гяпик ",
   "гяпика ",
   "гяпиков "
  ],
  "INR": [
   "пайса ",
   "пайсы ",
   "пайсов "
  ],
  "KGS": [
   "тиын ",
   "тиына ",
   "тиынов "
  ]
 },
 "days": [
  [
   "первого ",
   "второго ",
   "третьего ",
   "четвертого ",
   "пятого ",
   "шестого ",
   "седьмого ",
   "восьмого ",
   "девятого ",
   "десятого ",
   "одиннадцатого ",
   "двенадцатого ",
   "тринадцатого ",
   "четырнадцатого ",
   "пятнадцатого ",
   "шестнадцатого ",
   "семнадцатого ",
   "восемнадцатого ",
   "девятнадцатого ",
   "двадцатого ",
   "двадцать первого ",
   "двадцать второго ",
   "двадцать третьего ",
   "двадцать четвертого ",
   "двадцать пятого ",
   "двадцать шестого ",
   "двадцать седьмого ",
   "двадцать восьмого ",
   "двадцать девятого ",
   "тридцатого ",
   "тридцать первого "
  ],
  [
   "первое ",
   "второе ",
   "третье ",
   "четвертое ",
   "пятое ",
   "шестое ",
   "седьмое ",
   "восьмое ",
   "девятое ",
   "десятое ",
   "одиннадцатое ",
   "двенадцатое ",
   "тринадцатое ",
   "четырнадцатое ",
   "пятнадцатое ",
   "шестнадцатое ",
   "семнадцатое ",
   "восемнадцатое ",
   "девятнадцатое ",
   "двадцатое ",
   "двадцать первое ",
   "двадцать второе ",
   "двадцать третье ",
   "двадцать четвертое ",
   "двадцать пятое ",
   "двадцать шестое ",
   "двадцать седьмое ",
   "двадцать восьмое ",
   "двадцать девятое ",
   "тридцатое ",
   "тридцать первое "
  ]
 ],
 "month": [
  "января ",
  "февраля ",
  "марта ",
  "апреля ",
  "мая ",
  "июня ",
  "июля ",
  "августа ",
  "сентября ",
  "октября ",
  "ноября ",
  "декабря "
 ]
})
numberToWords.setLocal("ua", {
 "arrayOfString1": [
  "",
  "сто ",
  "двiстi ",
  "триста ",
  "чотириста ",
  "п'ятьсот ",
  "шiстсот ",
  "сiмсот ",
  "вiсiмсот ",
  "дев'ятсот "
 ],
 "arrayOfString2": [
  "",
  "один ",
  "два ",
  "три ",
  "чотири ",
  "п'ять ",
  "шiсть ",
  "сiм ",
  "вiсiм ",
  "дев'ять "
 ],
 "arrayOfString2_1": [
  "",
  "першого ",
  "другого ",
  "третього ",
  "четвертого ",
  "п'ятого ",
  "шостого ",
  "сьомого ",
  "восьмого ",
  "дев'ятого "
 ],
 "arrayOfString2_2": [
  "",
  "одна ",
  "двi ",
  "три ",
  "чотири ",
  "п'ять ",
  "шiсть ",
  "сiм ",
  "вiсiм ",
  "дев'ять "
 ],
 "arrayOfString3": [
  "десять ",
  "одинадцять ",
  "дванадцять ",
  "тринадцять ",
  "чотирнадцять ",
  "п'ятнадцять ",
  "шiстнадцять ",
  "сiмнадцять ",
  "вiсiмнадцять ",
  "дев'ятнадцять "
 ],
 "arrayOfString3_1": [
  "десятого ",
  "одинадцятого ",
  "дванадцятого ",
  "тринадцятого ",
  "чотирнадцятого ",
  "п'ятнадцятого ",
  "шістнадцятого ",
  "сімнадцятого ",
  "вісімнадцятого ",
  "дев'ятнадцятого "
 ],
 "arrayOfString4": [
  "",
  "",
  "двадцять ",
  "тридцять ",
  "сорок ",
  "п'ятдесят ",
  "шiстдесят ",
  "сiмдесят ",
  "вiсiмдесят ",
  "дев'яносто "
 ],
 "arrayOfString4_1": [
  "",
  "",
  "двадцятого ",
  "тридцятого ",
  "сорокового ",
  "п'ятдесятого ",
  "шестидесятого ",
  "семидесятого ",
  "вісімдесятого ",
  "дев'яностого "
 ],
 "arrayOfString5": [
  "тисяча ",
  "тисячі ",
  "тисяч "
 ],
 "arrayOfString6": [
  "",
  "одна ",
  "двi ",
  "три ",
  "чотири ",
  "п'ять ",
  "шiсть ",
  "сiм ",
  "вiсiм ",
  "дев'ять "
 ],
 "arrayOfString7": [
  "мільйон ",
  "мільйона ",
  "мільйонів "
 ],
 "arrayOfString8": [
  "ноль ",
  "цілих "
 ],
 "arrayOfString0": [
  [],
  [
   "десята",
   "десятих"
  ],
  [
   "сота",
   "сотих"
  ],
  [
   "тисячна",
   "тисячних"
  ],
  [
   "стотисячна",
   "стотисячних"
  ],
  [
   "мільйонна",
   "мільйонних"
  ],
  [
   "десятимільйонна",
   "десятимільйонних"
  ],
  [
   "стомільйонна",
   "стомільйонний"
  ]
 ],
 "currency": {
  "UAH": [
   "гривня ",
   "гривні ",
   "гривень "
  ],
  "USD": [
   "долар ",
   "долара ",
   "доларів "
  ],
  "EUR": [
   "євро ",
   "євро ",
   "євро "
  ],
  "RUR": [
   "рубль ",
   "рубля ",
   "рублів "
  ],
  "RUB": [
   "рубль ",
   "рубля ",
   "рублів "
  ],
  "PLZ": [
   "злотий ",
   "злотих ",
   "злотих "
  ],
  "PLN": [
   "злотий ",
   "злотих ",
   "злотих "
  ],
  "GBP": [
   "фунт ",
   "фунта ",
   "фунтів "
  ],
  "CHF": [
   "франк ",
   "франка ",
   "франків "
  ],
  "CZK": [
   "крона ",
   "крони ",
   "крон "
  ],
  "CAD": [
   "долар ",
   "долара ",
   "доларів "
  ],
  "SEK": [
   "крона ",
   "крони ",
   "крон "
  ],
  "NOK": [
   "крона ",
   "крони ",
   "крон "
  ],
  "JPY": [
   "єна ",
   "єн ",
   "єн "
  ],
  "ILS": [
   "шекель ",
   "шекеля ",
   "шекелів "
  ],
  "BYN": [
   "рубль ",
   "рубля ",
   "рублів "
  ],
  "KZT": [
   "теньге ",
   "теньге ",
   "теньге "
  ],
  "DKK": [
   "крона ",
   "крони ",
   "крон "
  ],
  "AUD": [
   "долар ",
   "долара ",
   "доларів "
  ],
  "GEL": [
   "ларі ",
   "ларі ",
   "ларі "
  ],
  "UZS": [
   "сом ",
   "сома ",
   "сомів "
  ],
  "MDL": [
   "лей ",
   "лея ",
   "леїв "
  ],
  "HUF": [
   "форинт ",
   "форинта ",
   "форинтів "
  ],
  "CNY": [
   "юань ",
   "юаня ",
   "юаней "
  ],
  "NZD": [
   "долар ",
   "долара ",
   "доларів "
  ],
  "AZN": [
   "манат ",
   "манат ",
   "манатов "
  ],
  "INR": [
   "рупія ",
   "рупії ",
   "рупій "
  ],
  "KGS": [
   "сом ",
   "сома ",
   "сомів "
  ]
 },
 "currency2": {
  "UAH": [
   "копійка ",
   "копійки ",
   "копійок "
  ],
  "USD": [
   "цент ",
   "цента ",
   "центів "
  ],
  "EUR": [
   "євроцент ",
   "євроцента ",
   "євроцентів "
  ],
  "RUR": [
   "копійка ",
   "копійки ",
   "копійок "
  ],
  "RUB": [
   "копійка ",
   "копійки ",
   "копійок "
  ],
  "PLZ": [
   "грош ",
   "гроша ",
   "грошей "
  ],
  "PLN": [
   "грош ",
   "гроша ",
   "грошей "
  ],
  "GBP": [
   "пенс ",
   "пенса ",
   "пенсів "
  ],
  "CHF": [
   "сантим ",
   "сантима ",
   "сантимів "
  ],
  "CZK": [
   "гелер ",
   "гелера ",
   "гелерів "
  ],
  "CAD": [
   "цент ",
   "цента ",
   "центів "
  ],
  "SEK": [
   "ере ",
   "ере ",
   "ере "
  ],
  "NOK": [
   "ере ",
   "ере ",
   "ере "
  ],
  "JPY": [
   "сен ",
   "сен ",
   "сен "
  ],
  "ILS": [
   "агора ",
   "агоры ",
   "агорот "
  ],
  "BYN": [
   "копійка ",
   "копійки ",
   "копійок "
  ],
  "KZT": [
   "тиїн ",
   "тиїна ",
   "тиїнів "
  ],
  "DKK": [
   "ере ",
   "ере ",
   "ере "
  ],
  "AUD": [
   "цент ",
   "цента ",
   "центів "
  ],
  "GEL": [
   "тетрі ",
   "тетрі ",
   "тетрі "
  ],
  "UZS": [
   "тиїн ",
   "тиїна ",
   "тиїнів "
  ],
  "MDL": [
   "бань ",
   "баня ",
   "банів "
  ],
  "HUF": [
   "філлер ",
   "філлера ",
   "філлерів "
  ],
  "CNY": [
   "финь ",
   "финя ",
   "финей "
  ],
  "NZD": [
   "цент ",
   "цента ",
   "центів "
  ],
  "AZN": [
   "гяпік ",
   "гяпіка ",
   "гяпіків "
  ],
  "INR": [
   "пайс ",
   "пайси ",
   "пайсів "
  ],
  "KGS": [
   "тиїн ",
   "тиїна ",
   "тиїнів "
  ]
 },
 "years": [
  "рік ",
  "року ",
  "років "
 ],
 "days": [
  [
   "перше ",
   "друге ",
   "третє ",
   "четверте ",
   "п'яте ",
   "шосте ",
   "сьоме ",
   "восьме ",
   "дев'яте ",
   "десяте ",
   "одинадцяте ",
   "дванадцяте ",
   "тринадцяте ",
   "чотирнадцяте ",
   "п'ятнадцяте ",
   "шістнадцяте ",
   "сімнадцяте ",
   "вісімнадцяте ",
   "дев'ятнадцяте ",
   "двадцяте ",
   "двадцять перше ",
   "двадцять друге ",
   "двадцять третє ",
   "двадцять четверте ",
   "двадцять п'яте ",
   "двадцять шосте ",
   "двадцять сьоме ",
   "двадцять восьме ",
   "двадцять дев'яте ",
   "тридцяте ",
   "тридцять перше "
  ],
  [
   "першого ",
   "другого ",
   "третього ",
   "четвертого ",
   "п'ятого ",
   "шостого ",
   "сьомого ",
   "восьмого ",
   "дев'ятого ",
   "десятого ",
   "одинадцятого ",
   "дванадцятого ",
   "тринадцятого ",
   "чотирнадцятого ",
   "п'ятнадцятого ",
   "шістнадцятого ",
   "сімнадцятого ",
   "вісімнадцятого ",
   "дев'ятнадцятого ",
   "двадцятого ",
   "двадцять першого ",
   "двадцять другого ",
   "двадцять третього ",
   "двадцять четвертого ",
   "двадцять п'ятого ",
   "двадцять шостого ",
   "двадцять сьомого ",
   "двадцять восьмого ",
   "двадцять дев'ятого ",
   "тридцятого ",
   "тридцять першого "
  ]
 ],
 "month": [
  "січня ",
  "лютого ",
  "березня ",
  "квітня ",
  "травня ",
  "червня ",
  "липня ",
  "серпня ",
  "вересня ",
  "жовтня ",
  "листопада ",
  "грудня "
 ]
})

    return numberToWords;
}));
