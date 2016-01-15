"use strict";

var gruntTasks = require('grunt-tasks');

module.exports = function(grunt) {
    var path = require('path');

    gruntTasks(grunt, {
        tasks: [
            'grunt/config/*/*.js',
            'grunt/tasks/*.js'
        ],
        config: 'grunt/config/mainConfig.js',
        aliases: 'grunt/aliases.js'
    });

};