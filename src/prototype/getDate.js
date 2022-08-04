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