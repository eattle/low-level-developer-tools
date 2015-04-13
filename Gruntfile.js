/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    mochaTest: {
      test: {
        options: {
          run: true,
          debug: true,
          reporter: 'spec'
        },
        src: 'test/'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      app: {
        src: 'app/js/**/*.js'
      },
      test: {
        src: 'test/**/*.js',
        options: {
          mocha: true
        }
      },
      options: {
        nonbsp: true,
        nonew: true,
        noyield: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: 'nofunc',
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        esnext: true,
        browser: false,
        node: true,
        quotmark: 'single',
        globals: {}
      }
    },
    nodewebkit: {
      options: {
        platforms: ['osx', 'win'],
        buildDir: './webkitbuilds'
      },
      src: ['./app/**/*']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Default task.
  grunt.registerTask('default', ['test', 'nodewebkit']);
  grunt.registerTask('test', ['jshint', 'mochaTest']);
};
