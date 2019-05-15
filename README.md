NumberToWords
===========
Number converter to words

 * [download](#download)
 * [Location](#location)
 * [Function](#function)
 * [example](#example)

# Download

```sh
  $ bower install nks-number-to-words;
  $ npm install nks-number-to-words --save;
  $ git clone https://github.com/konstantin-nizhinskiy/NumberToWords;
```
# Location 

Now support (ua,ru)

# Function 

| functions | README |
| ------ | ------ |
| [get](#get) | Convert numbers |
| [getPrice](#getPrice) | Convert sum with currency  |
| [getDate](#getDate) | Convert date |

## get

Number converter to words (support: 1 ... 999 999 999)

### Arguments

| Params | type | README |
| ------ | ------ | ------ |
| number | {int/string} | number |
| local | {string} | location |

## getPrice

Convert sum with currency to words (support: 1 ... 999 999 999.99)

### Arguments

| Params | type | README |
| ------ | ------ | ------ |
| number | {int/string} | sum |
| local | {string} | location |
| currency | {string} | currency |
| options | {object} | dop property |
| options.fractional_is_number | {boolean} | Do not convert fractional amount into words (default:false) |

### Currency

| Currency | Currency number | 
| ------ | ------ | 
| USD | 840 | 
| UAH | 980 | 
| EUR | 978 | 

## getDate

Date converter to words

### Arguments

| Params | type | README |
| ------ | ------ | ------ |
| number | {string} | date |
| local | {string} | location |

### Formats date

| Formats | 
| ------ | 
| DD.MM.YYYY | 
| DD-MM-YYYY | 



# Example
```html
<script src="dist/numberToWords.min.js"  type="text/javascript"></script>
<script src="dist/translations.ua.js"  type="text/javascript"></script>
<script type="text/javascript">
    console.log(numberToWords.get(123,'ua')); //сто двадцять три
    console.log(numberToWords.get(1,'ua')); //один
            
    console.log('UA getPrice: ',numberToWords.getPrice(23,'ua',"UAH"));//UA getPrice:    двадцять три гривні ноль копійок 
    console.log('UA getPrice 101.01: ',numberToWords.getPrice(101.01,'ua',"UAH"));//UA getPrice 101.01:    сто одна гривня одна копійка
    console.log('UA getPrice 101.11: ',numberToWords.getPrice(101.11,'ua',"UAH"));//UA getPrice 101.11:    сто одна гривня одинадцять копійок
    console.log('UA getPrice 101.20: ',numberToWords.getPrice(101.20,'ua',"UAH"));//UA getPrice 101.20:    сто одна гривня двадцять копійок 
    console.log('UA getPrice 101.21: ',numberToWords.getPrice(101.21,'ua',"UAH"));//UA getPrice 101.21:    сто одна гривня двадцять одна копійка
    console.log('UA getPrice 101.22: ',numberToWords.getPrice(101.22,'ua',"UAH"));//UA getPrice 101.22:    сто одна гривня двадцять двi копійки
    console.log('UA getPrice 102.22: ',numberToWords.getPrice(102.22,'ua',"UAH"));//UA getPrice 102.22:    сто двi гривні двадцять двi копійки
    console.log('UA getPrice 12.22: ',numberToWords.getPrice(12.22,'ua',"UAH"));//UA getPrice 12.22:    дванадцять гривень двадцять двi копійки
    console.log('UA getPrice 101.212: ',numberToWords.getPrice(101.212,'ua',"UAH"));//UA getPrice 101.212:    сто одна гривня 212 копійок
    console.log('UA getPrice 101.01: ',numberToWords.getPrice(101.01,'ua',"UAH",{"fractional_is_number":true})); //UA getPrice 101.01:    сто одна гривня 01 копійка
    console.log('UA getPrice 102: ',numberToWords.getPrice(102,'ua',"UAH"));//UA getPrice 102:    сто двi гривні ноль копійок 
    
    console.log('UA getPrice 101.24: ',numberToWords.getPrice(101.24,'ua',"840"));//UA getPrice 101.24:    сто одна долар двадцять чотири цента 
    console.log('UA getPrice 101.24: ',numberToWords.getPrice(101.24,'ua',"USD"));//UA getPrice 101.24:    сто одна долар двадцять чотири цента 
    
    console.log('UA: ',numberToWords.getDate("22.01.2012",'ua',1));//двадцять другого січня двi тисячі дванадцятого року 
    console.log('UA: ',numberToWords.getDate("22.01.2020",'ua',1));//двадцять другого січня двi тисячі двадцятого року 
    console.log('UA: ',numberToWords.getDate("22.01.2021",'ua',1));//двадцять другого січня двi тисячі двадцять першого року 
    console.log('UA: ',numberToWords.getDate("22.01.2012",'ua',0));//двадцять друге січня двi тисячі дванадцятого року 
    console.log('UA: ',numberToWords.getDate("22.01.2020",'ua',0));//двадцять друге січня двi тисячі двадцятого року 
    console.log('UA: ',numberToWords.getDate("22.01.2021",'ua',0));//двадцять друге січня двi тисячі двадцять першого року 
</script>
```

## Translations
    * numberToWords.ru
    * numberToWords.ua