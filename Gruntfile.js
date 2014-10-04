module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('uniqueSelector.jquery.json'),
    clean: {
      dist: {
        files: [
          {
            src: ['dist/*']
          }
        ]
      }
    },
    meta: {
      banner: '/*\n' +
        ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' *  <%= pkg.description %>\n' +
        ' *  <%= pkg.homepage %>\n' +
        ' *\n' +
        ' *  Made by <%= pkg.author.name %>\n' +
        ' *  Under <%= pkg.licenses[0].type %> License\n' +
        ' */\n'
    },
    concat: {
      dist: {
        src: ['src/jquery.uniqueSelector.js'],
        dest: 'dist/jquery.uniqueSelector.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },
    jshint: {
      files: ['src/jquery.uniqueSelector.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      my_target: {
        src: ['dist/jquery.uniqueSelector.js'],
        dest: 'dist/jquery.uniqueSelector.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    }
  });
  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);
};
