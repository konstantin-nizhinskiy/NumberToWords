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