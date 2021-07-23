(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['numberToWords'], function (numberToWords) {
            numberToWords.setLocal('ua', factory())
        })
    } else {
        numberToWords.setLocal('ua', factory())
    }
}(this, function () {
    return {
        arrayOfString1: ["", "сто ", "двiстi ", "триста ", "чотириста ", "п'ятьсот ", "шiстсот ", "сiмсот ", "вiсiмсот ", "дев'ятсот "],
        arrayOfString2: ["", "один ", "два ", "три ", "чотири ", "п'ять ", "шiсть ", "сiм ", "вiсiм ", "дев'ять "],
        arrayOfString2_1: ["", "першого ", "другого ", "третього ", "четвертого ", "п'ятого ", "шостого ", "сьомого ", "восьмого ", "дев'ятого "],
        arrayOfString2_2: ["", "одна ", "двi ", "три ", "чотири ", "п'ять ", "шiсть ", "сiм ", "вiсiм ", "дев'ять "],
        arrayOfString3: ["десять ", "одинадцять ", "дванадцять ", "тринадцять ", "чотирнадцять ", "п'ятнадцять ", "шiстнадцять ", "сiмнадцять ", "вiсiмнадцять ", "дев'ятнадцять "],
        arrayOfString3_1: ["десятого ", "одинадцятого ", "дванадцятого ", "тринадцятого ", "чотирнадцятого ", "п'ятнадцятого ", "шістнадцятого ", "сімнадцятого ", "вісімнадцятого ", "дев'ятнадцятого "],
        arrayOfString4: ["", "", "двадцять ", "тридцять ", "сорок ", "п'ятдесят ", "шiстдесят ", "сiмдесят ", "вiсiмдесят ", "дев'яносто "],
        arrayOfString4_1: ["", "", "двадцятого ", "тридцятого ", "сорокового ", "п'ятдесятого ", "шестидесятого ", "семидесятого ", "вісімдесятого ", "дев'яностого "],
        arrayOfString5: ["тисяча ", "тисячі ", "тисяч "],
        arrayOfString6: ["", "одна ", "двi ", "три ", "чотири ", "п'ять ", "шiсть ", "сiм ", "вiсiм ", "дев'ять "],
        arrayOfString7: ["мільйон ", "мільйона ", "мільйонів "],
        arrayOfString8: ["ноль ","цілих "],
        arrayOfString0: [
            [],
            ["десята", "десятих"],
            ["сота", "сотих"],
            ["тисячна", "тисячних"],
            ["стотисячна", "стотисячних"],
            ["мільйонна", "мільйонних"],
            ["десятимільйонна", "десятимільйонних"],
            ["стомільйонна", "стомільйонний"],
        ],
        currency: {
            "UAH": ["гривня ", "гривні ", "гривень "],
            "USD": ["долар ", "долара ", "доларів "],
            "EUR": ["євро ", "євро ", "євро "],
            "RUR": ["рубль ", "рубля ", "рублів "],
            "RUB": ["рубль ", "рубля ", "рублів "],
            "PLZ": ["злотий ", "злотих ", "злотих "],
            "PLN": ["злотий ", "злотих ", "злотих "],
            "GBP": ["фунт ", "фунта ", "фунтів "],
            "CHF": ["франк ", "франка ", "франків "],
            "CZK": ["крона ", "крони ", "крон "],
            "CAD": ["долар ", "долара ", "доларів "],
            "SEK": ["крона ", "крони ", "крон "],
            "NOK": ["крона ", "крони ", "крон "],
            "JPY": ["єна ", "єн ", "єн "],
            "ILS": ["шекель ", "шекеля ", "шекелів "],
            "BYN": ["рубль ", "рубля ", "рублів "],
            "KZT": ["теньге ", "теньге ", "теньге "],
            "DKK": ["крона ", "крони ", "крон "],
            "AUD": ["долар ", "долара ", "доларів "],
            "GEL": ["ларі ", "ларі ", "ларі "],
            "UZS": ["сом ", "сома ", "сомів "],
            "MDL": ["лей ", "лея ", "леїв "],
            "HUF": ["форинт ", "форинта ", "форинтів "],
            "CNY": ["юань ", "юаня ", "юаней "],
            "NZD": ["долар ", "долара ", "доларів "],
            "AZN": ["манат ", "манат ", "манатов "],
            "INR": ["рупія ", "рупії ", "рупій "],
            "KGS": ["сом ", "сома ", "сомів "]
        },
        currency2: {
            "UAH": ["копійка ", "копійки ", "копійок "],
            "USD": ["цент ", "цента ", "центів "],
            "EUR": ["євроцент ", "євроцента ", "євроцентів "],
            "RUR": ["копійка ", "копійки ", "копійок "],
            "RUB": ["копійка ", "копійки ", "копійок "],
            "PLZ": ["грош ", "гроша ", "грошей "],
            "PLN": ["грош ", "гроша ", "грошей "],
            "GBP": ["пенс ", "пенса ", "пенсів "],
            "CHF": ["сантим ", "сантима ", "сантимів "],
            "CZK": ["гелер ", "гелера ", "гелерів "],
            "CAD": ["цент ", "цента ", "центів "],
            "SEK": ["ере ", "ере ", "ере "],
            "NOK": ["ере ", "ере ", "ере "],
            "JPY": ["сен ", "сен ", "сен "],
            "ILS": ["агора ", "агоры ", "агорот "],
            "BYN": ["копійка ", "копійки ", "копійок "],
            "KZT": ["тиїн ", "тиїна ", "тиїнів "],
            "DKK": ["ере ", "ере ", "ере "],
            "AUD": ["цент ", "цента ", "центів "],
            "GEL": ["тетрі ", "тетрі ", "тетрі "],
            "UZS": ["тиїн ", "тиїна ", "тиїнів "],
            "MDL": ["бань ", "баня ", "банів "],
            "HUF": ["філлер ", "філлера ", "філлерів "],
            "CNY": ["финь ", "финя ", "финей "],
            "NZD": ["цент ", "цента ", "центів "],
            "AZN": ["гяпік ", "гяпіка ", "гяпіків "],
            "INR": ["пайс ", "пайси ", "пайсів "],
            "KGS": ["тиїн ", "тиїна ", "тиїнів "]
        },
        years: ["рік ", "року ", "років "],
        days: [
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
        month: [
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
    }
}));
