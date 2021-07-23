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