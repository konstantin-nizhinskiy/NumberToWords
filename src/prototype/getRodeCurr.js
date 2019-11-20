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