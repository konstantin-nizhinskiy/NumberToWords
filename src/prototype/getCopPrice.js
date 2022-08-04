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