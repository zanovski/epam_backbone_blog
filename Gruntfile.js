/**
 * Created by Aliaksandr_Zanouski on 10/17/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        handlebars: {
            compile:{
                options: {
                    namespace: "app.tmp",
                    processName: function(filePath) {
                        var name = filePath.split('/');
                        return name[name.length - 1];
                    }
                },
                files: {
                    'js/tmp.js': [ 'templates/*.hbs']
                }
            }
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {
                src: [
                    'js/HB.js',
                    'js/tmp.js',
                    'js/models.js',
                    'js/collection.js',
                    'js/views.js',
                    'js/router.js',
                    'js/app.js'
                ],
                dest: 'build/script.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['handlebars', 'concat'])
};