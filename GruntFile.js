module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      myConfig: require('./webpack.config.js')
    },
    gitadd: {
      task: {
        options: {
          all: true
        }
      }
    },
    gitcommit: {
      task: {
        options: {
          message: 'Added functionality for selecting a specific component and started trying out typescript'
        }
      }
    },
    gitpush: { your_target: {} }
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-git');
  grunt.registerTask('build', 'webpack');
  // Push to Github
  grunt.registerTask('git', ['build', 'gitadd', 'gitcommit', 'gitpush']);
};