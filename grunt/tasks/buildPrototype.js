"use strict";
var path = require('path'),
    grunt = require('grunt');
grunt.task.registerTask('buildPrototype','build prototype',function(){
    var prototype=[''];
    grunt.file.recurse('src/prototype', function (a) {
        prototype.push(grunt.file.read(a));
    });
    grunt.file.write('dist/numberToWords.js',grunt.template.process(
        grunt.file.read('src/NumberToWords.js'),
        {
        data:{
            prototype:prototype.join('\n')
        }
    }));

});

