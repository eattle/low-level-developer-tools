/*global module:false*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>' + '\'use strict\';\n',
        process: function (src) {
          return '!function(){' + src + '}();';
        },
        stripBanners: true
      },
      app: {
        src: ['src/js/**/*.js'],
        dest: 'app/scripts.js'
      }
    },
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
    jade: {
      app: {
        files: [{
          cwd: 'src',
          src: '**/*.jade',
          dest: 'app',
          expand: true,
          ext: '.html'
        }]
      }
    },
    stylus: {
      compile: {
        files: [{
          cwd: 'src',
          src: '**/*.styl',
          dest: 'app',
          expand: true,
          ext: '.css'
        }]
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      app: {
        src: '<%= concat.app.dest %>',
        dest: 'app/scripts.min.js'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: 'src/js/**/*.js'
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
        globals: {
          'angular': false,
          'console': false,
          'moment': false,
          '_': false,
          'swal': false,
          'alert': false,
          '$': false
        }
      }
    },
    nodewebkit: {
      options: {
        version: '0.12.2',
        platforms: ['osx', 'win'],
        buildDir: './webkitbuilds'
      },
      src: ['./app/**/*']
    },
    clean: {
      before: ['app/*', '!app/bower_components/**', '!app/package.json'],
      after: ['app/bower_components/angular-i18n/*', '!app/bower_components/angular-i18n/*ko-kr.js']
    },
    copy: {
      public: {
        files: [{
          cwd: 'src/public',
          expand: true,
          src: ['**'],
          dest: 'app'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('common', ['clean:before', 'jshint', 'concat', 'uglify', 'jade', 'stylus', 'copy:public', 'clean:after']);

  // Default task.
  grunt.registerTask('default', ['test', 'common', 'nodewebkit']);
  grunt.registerTask('test', ['jshint', 'mochaTest']);
};
