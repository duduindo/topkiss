var copy = require('directory-copy');

copy(
    { src: 'dev/_site/'
    , dest:'src/'
    , excludes: [ /^\./ ] // Exclude hidden files 
    }
  , function () {
    console.log('done!')
  })
  .on('log', function (msg, level) {
    // Level is debug, info, warn or error 
    console.log(level + ': ' + msg)
  })