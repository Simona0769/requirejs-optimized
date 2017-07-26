zmodule.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        //claen the dist before copy & compile files
        clean: {
            dist: ["dist/"],
            cache: [".sass-cache/", "temp/"]
        },
        requirejs: {
            simona: {
                options: {
                    baseUrl: ".",
                    mainConfigFile: "config.js",
                    name: "dist/js/simona/simona.js",
                    out: "dist/js/simona/simona.js",
                    wrap: false,
                    locale: "zh-cn"
                }
            }
        },
        copy: {
            src: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['js/**', 'css/**', 'html/**'],
                    dest: 'dist/'
                }]
            },
        },
        concat: {
            options: {
                separator: ';',
            },
            simonaDebug: {
                src: ['src/js/simona/vendor/require.js', 'dist/js/simona/simona-debug.js'],
                dest: 'dist/js/simona/simona-debug.js',
            },
            simona: {
                src: ['src/js/simona/vendor/require.js', 'dist/js/simona/simona.js'],
                dest: 'dist/js/simona/simona.js',
            }
        },


        uglify: {
            options: {
                mangle: true,
                beautify: false
            },
            simona: {
                files: {
                    'dist/js/simona/simona.js': ['dist/js/simona/simona.js']
                }
            }
        }
    });


    grunt.registerTask('debug', [
        'clean:dist',
        'copy:src',
        'concat:simonaDebug'
    ]);

    grunt.registerTask('release', [
        'clean:dist',
        'copy:src',
        'requirejs:simona',
        'concat',
        'uglify:simona',
        'clean:cache'
    ]);


    grunt.registerTask('default', [
        'debug',
        'release',
    ]);
};
