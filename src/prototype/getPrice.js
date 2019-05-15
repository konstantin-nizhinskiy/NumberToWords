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