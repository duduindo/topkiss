var grunt = require('grunt');

grunt.registerTask('default', 'default task description', function(){
  console.log('hello world');  
});

module.exports = function(grunt){
  grunt.config.init({
    concat: {
      options: {
        dest: 'tmp',
        templates: ['www/index.html'],
        javascripts: ['www/js/*.js'],
        stylesheets: ['www/style']
      }
    }
  });
 
  // carrega plugins
  //grunt.loadNpmTasks('nome-do-plugin');
};

