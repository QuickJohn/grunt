// John Quick 
// 7/31/2020
// Gruntfile.js
// Demonstrating Grunt.js task runner

module.exports = function(grunt) {

    const sass = require('node-sass');

   

    // Configuration 
    grunt.initConfig({
        // plugin options, files, etc
        concat: {
            css: {
                src: ['css/fonts.css', 'css/styles.css'], //To select all files in css folder['css/*.css]
                dest: 'build/combo.css'
            },
            js:  {
                src: ['js/*.js'],
                dest: 'build/script.js'
            }   
        },

        sass: {
            options: {
                implimentation: sass,
                sourceMap: true
            },

            build: {
                files:[{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files:[{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        },
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        cssmin: {
            mytarget: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        uncss: {
            dist: {
                files: [{
                    nonull: true,
                    src: ['index.html'],
                    dest: 'dist/css/tidy.css'
                }]
            }
        }
    });

    // Register tasks
    grunt.registerTask('concat-js', ['concat:js']);  
    grunt.registerTask('concat-css', ['concat:css']);
    //grunt.registerTask('default', ['sass']);

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');

    // Resister tasks
    grunt.registerTask('run', function(){
        console.log('I am running');
    });

    grunt.registerTask('sleep', function(){
        console.log('I am sleeping');
    });
    grunt.registerTask('all', ['run','sleep']);

};