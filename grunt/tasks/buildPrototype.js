"use strict";
var path = require('path'),
    grunt = require('grunt');
grunt.task.registerTask('buildPrototype', 'build prototype', function () {
    var prototype = [''],
        translations=[''];

    grunt.file.recurse('src/translations', function (a, b, c) {

        var locale = a.replace("src/translations/", "").replace(".json", ""),
            data_locale=JSON.stringify(grunt.file.readJSON(a), "", " ")
        grunt.file.write('dist/translations/numberToWords.' + locale + '.js', grunt.template.process(
            grunt.file.read('grunt/translations.ejs'),
            {
                data: {
                    data_locale: data_locale,
                    locale: locale
                }
            }));
        var _tpl='numberToWords.setLocal("<%= locale %>", <%= data_locale %>)'
        translations.push(
            grunt.template.process(
                _tpl,
                {
                    data: {
                        data_locale: data_locale,
                        locale: locale
                    }
                })
        )
    });



    grunt.file.recurse('src/prototype', function (a) {
        prototype.push(grunt.file.read(a));
    });
    grunt.file.write('dist/numberToWords.js', grunt.template.process(
        grunt.file.read('src/NumberToWords.js'),
        {
            data: {
                prototype: prototype.join('\n'),
                translations: ""
            }
        }));
    grunt.file.write('dist/numberToWords.full.js', grunt.template.process(
        grunt.file.read('src/NumberToWords.js'),
        {
            data: {
                prototype: prototype.join('\n'),
                translations: translations.join('\n')
            }
        }));
});

