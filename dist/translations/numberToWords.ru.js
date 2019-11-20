/*
name: nks-number-to-words
version: 0.9.2
author: Konstantin Nizhinskiy <konstantin.nizhinskiy@gmail.com>
date: 2019-11-20 10:11:42 

*/
!function(a,b){"function"==typeof define&&define.amd?define(["numberToWords"],function(a){a.setLocal("ru",b())}):numberToWords.setLocal("ru",b())}(0,function(){return{arrayOfString1:["","сто ","двести ","триста ","четыреста ","пятьсот ","шестьсот ","семьсот ","восемьсот ","девятьсот "],arrayOfString2:["","один ","два ","три ","четыре ","пять ","шесть ","семь ","восемь ","девять "],arrayOfString2_1:["","первого ","второго ","третьего ","четвёртого ","пятого ","шестого ","седьмого ","восьмого ","девятого "],arrayOfString2_2:["","одна ","две ","три ","четыре ","пять ","шесть ","семь ","восемь ","девять "],arrayOfString3:["десять ","одиннадцать ","двенадцать ","тринадцать ","четырнадцать ","пятнадцать ","шестнадцать ","семнадцать ","восемнадцать ","девятнадцать "],arrayOfString3_1:["десятого ","одиннадцатого ","двенадцатого ","тринадцатого ","четырнадцатого ","пятнадцатого ","шестнадцатого ","семнадцатого ","восемнадцатого ","девятнадцатого "],arrayOfString4:["","","двадцать ","тридцать ","сорок ","пятьдесят ","шестьдесят ","семьдесят ","восемьдесят ","девяносто "],arrayOfString4_1:["","","двадцатого ","тридцатого ","сорокового ","пятидесятого ","шестидесятого ","семидесятого ","восьмидесятого ","девяностого "],arrayOfString5:["тысяча ","тысячи ","тысяч"],arrayOfString6:["","одна ","две ","три ","четыре ","пять ","шесть ","семь ","восемь ","девять "],arrayOfString7:["миллион ","миллиона ","миллионов "],arrayOfString8:["ноль "],years:["год ","года ","годов "],currency:{UAH:["гривна ","гривны ","гривен "],USD:["доллар ","доллара ","долларов "],EUR:["евро ","евро ","евро "],RUR:["рубль ","рубля ","рублей "],RUB:["рубль ","рубля ","рублей "],PLZ:["злотый ","злотых ","злотых "],PLN:["злотый ","злотых ","злотых "],GBP:["фунт ","фунта ","фунтов "],CHF:["франк ","франка ","франков "],CZK:["крона ","кроны ","крон "],CAD:["доллар ","доллара ","долларов "],SEK:["крона ","кроны ","крон "],NOK:["крона ","кроны ","крон "],JPY:["иена ","иены ","иен "],ILS:["шекель ","шекеля ","шекелей "],BYN:["рубль ","рубля ","рублей "],KZT:["тенге ","тенге ","тенге "],DKK:["крона ","кроны ","крон "],AUD:["доллар ","доллара ","долларов "],GEL:["лари ","лари ","лари "],UZS:["сум ","сума ","сумов "],MDL:["лей ","лея ","леев "],HUF:["форинт ","форинта ","форинтов "],CNY:["юань ","юаня ","юаней "],NZD:["доллар ","доллара ","долларов "],AZN:["манат ","маната ","манатов "],INR:["рупия ","рупии ","рупий "],KGS:["сом ","сома ","сомов "]},currency2:{UAH:["копейка ","копейки ","копеек "],USD:["цент ","цента ","центов "],EUR:["евроцент ","евроцента ","евроцентов "],RUR:["копейка ","копейки ","копеек "],RUB:["копейка ","копейки ","копеек "],PLZ:["грош ","гроша ","грошей "],PLN:["грош ","гроша ","грошей "],GBP:["пенс ","пенса ","пенсов "],CHF:["сантим ","сантима ","сантимов "],CZK:["геллер ","геллера ","геллеров "],CAD:["цент ","цента ","центов "],SEK:["эре ","эре ","эре "],NOK:["эре ","эре ","эре "],JPY:["сен ","сен ","сен "],ILS:["агора ","агоры ","агорот "],BYN:["копейка ","копейки ","копеек "],KZT:["тиын ","тиына ","тиынов "],DKK:["эре ","эре ","эре "],AUD:["цент ","цента ","центов "],GEL:["тетри ","тетри ","тетри "],UZS:["тиын ","тиына ","тиынов "],MDL:["бань ","баня ","баней "],HUF:["филлер ","филлера ","филлеров "],CNY:["фынь ","фыня ","фыней "],NZD:["цент ","цента ","центов "],AZN:["гяпик ","гяпика ","гяпиков "],INR:["пайса ","пайсы ","пайсов "],KGS:["тиын ","тиына ","тиынов "]},days:[["первого ","второго ","третьего ","четвертого ","пятого ","шестого ","седьмого ","восьмого ","девятого ","десятого ","одиннадцатого ","двенадцатого ","тринадцатого ","четырнадцатого ","пятнадцатого ","шестнадцатого ","семнадцатого ","восемнадцатого ","девятнадцатого ","двадцатого ","двадцать первого ","двадцать второго ","двадцать третьего ","двадцать четвертого ","двадцать пятого ","двадцать шестого ","двадцать седьмого ","двадцать восьмого ","двадцать девятого ","тридцатого ","тридцать первого "],["первое ","второе ","третье ","четвертое ","пятое ","шестое ","седьмое ","восьмое ","девятое ","десятое ","одиннадцатое ","двенадцатое ","тринадцатое ","четырнадцатое ","пятнадцатое ","шестнадцатое ","семнадцатое ","восемнадцатое ","девятнадцатое ","двадцатое ","двадцать первое ","двадцать второе ","двадцать третье ","двадцать четвертое ","двадцать пятое ","двадцать шестое ","двадцать седьмое ","двадцать восьмое ","двадцать девятое ","тридцатое ","тридцать первое "]],month:["января ","февраля ","марта ","апреля ","мая ","июня ","июля ","августа ","сентября ","октября ","ноября ","декабря "]}});