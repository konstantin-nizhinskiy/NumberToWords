
(function(root,factory){
    if(typeof define ==='function' && define.amd){
        define(['numberToWords'],function(numberToWords){
            numberToWords.setLocal('ua',factory())
        })
    }else{
        numberToWords.setLocal('ua',factory())
    }
}(this,function(){
    return {
        arrayOfString1 : ["", "сто ", "двiстi ", "триста ", "чотириста ", "п'ятьсот ", "шiстьсот ", "сiмсот ", "вiсiмсот ", "дев'ятьсот "],
        arrayOfString2 : ["", "один ", "два ", "три ", "чотири ", "п'ять ", "шiсть ", "сiм ", "вiсiм ", "дев'ять "],
        arrayOfString3 : ["десять ", "одинадцять ", "дванадцять ", "тринадцять ", "чотирнадцять ", "п'ятнадцять ", "шiстнадцять ", "сiмнадцять ", "вiсiмнадцять ", "дев'ятнадцять "],
        arrayOfString4 : ["", "", "двадцять ", "тридцять ", "сорок ", "п'ятьдесят ", "шiстьдесят ", "сiмдесят ", "вiсiмдесят ", "дев'яносто "],
        arrayOfString5 : ["тисяча ","тисячі ","тисяч" ],
        arrayOfString6 : ["", "одна ", "двi ", "три ", "чотири ", "п'ять ", "шiсть ", "сiм ", "вiсiм ", "дев'ять "],
        arrayOfString7 : ["мільйон ","мільйона ","мільйонів" ]
    }
}));
