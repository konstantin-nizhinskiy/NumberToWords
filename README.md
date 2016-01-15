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
</script>
```

## Translations
    * numberToWords.ru
    * numberToWords.ua