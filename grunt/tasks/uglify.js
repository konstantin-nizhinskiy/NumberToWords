"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {
    uglify: {
        options: {
            compress: {
                drop_console: true
            }
        },
        numberToWords: {
            files: {
                'dist/translations/numberToWords.ru.js':[
                    'src/translations/ru.js'
                ],
                'dist/translations/numberToWords.ua.js':[
                    'src/translations/ua.js'
                ],
                'dist/numberToWords.min.js':[
                    'dist/numberToWords.js'
                ]



            }
        }
    }
};
