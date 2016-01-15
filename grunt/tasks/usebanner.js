"use strict";
var path = require('path'),
    YAML = require('yamljs'),
    tosource = require('tosource'),
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

