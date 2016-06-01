module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        // uglify: {
        //     build: {
        //         src: 'src/js/*.js',
        //         dest: 'js/script.min.js'
        //     },
        //     dev: {
        //         options: {
        //             beautify: true,
        //             mangle: false,
        //             compress: false,
        //             preserveComments: 'all'
        //         },
        //         src: 'src/js/*.js',
        //         dest: 'js/script.min.js'
        //     }
        // },
        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    require: 'susy'
                }
            }
        },
        watch: {
            // js: {
            //     files: ['src/js/*.js'],
            //     tasks: ['uglify:dev']
            // },
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['compass:dev']
            }
        }
    });


    //Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //Default task(s).
    grunt.registerTask('default', ['compass:dev']);
    grunt.registerTask('build', ['uglify:build']);

};