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