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