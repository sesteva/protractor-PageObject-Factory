'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        parallel:{
            selenium:{
                options:{
                    stream: true
                },
                tasks: [{cmd: "./bin/selenium-server.sh"}, {cmd: './bin/test.sh'}]
            }
        }
    });

    grunt.registerTask('test', [
        'parallel:selenium'
    ]);

    grunt.registerTask('default', [
        'test',
    ]);


};

