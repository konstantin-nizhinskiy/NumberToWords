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
                    'dist/translations/numberToWords.ru.js'
                ],
                'dist/translations/numberToWords.ua.js':[
                    'dist/translations/numberToWords.ua.js'
               ],
                'dist/numberToWords.min.js':[
                    'dist/numberToWords.js'
                ],
                'dist/numberToWords.full.min.js':[
                    'dist/numberToWords.full.js'
                ]



            }
        }
    }
};
