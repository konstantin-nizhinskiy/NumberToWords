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