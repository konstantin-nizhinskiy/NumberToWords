NumberToWords
===========
Number converter to words (1 ... 999 999 999)

 * [download](#download)
 * [example](#example)

## Download
```sh
  $ bower install nks-number-to-words
  $ git clone https://github.com/konstantin-nizhinskiy/NumberToWords;
```

## Example
```html
<script src="dist/numberToWords.min.js"  type="text/javascript"></script>
<script src="dist/translations.ua.js"  type="text/javascript"></script>
<script type="text/javascript">
    console.log(numberToWords.get(123,'ua')); //сто двадцять три
    console.log(numberToWords.get(1,'ua')); //один
    
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',1));//двадцять другого січня двi тисячі дванадцятого року 
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',1));//двадцять другого січня двi тисячі двадцятого року 
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',1));//двадцять другого січня двi тисячі двадцять першого року 
    
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2012",'ua',0));//двадцять друге січня двi тисячі дванадцятого року 
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2020",'ua',0));//двадцять друге січня двi тисячі двадцятого року 
    console.log('UA: ',bundle.numberToWords.getDate("22.01.2021",'ua',0));//двадцять друге січня двi тисячі двадцять першого року 
</script>
```

## Translations
    * numberToWords.ru
    * numberToWords.ua