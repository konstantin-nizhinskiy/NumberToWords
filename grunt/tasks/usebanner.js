"use strict";
var path = require('path'),
    grunt = require('grunt');
module.exports = {
    usebanner: {
        numberToWords: {
            options: {
                position: 'top',
                banner: '/*<%= banner %>*/',
                linebreak: true
            },
            files: {
                src: [
                    'dist/*.js',
                    'dist/translations/*.js'
                ]
            }
        }
    }
};

