var mkdirp = require('mkdirp');

var appJS = './app/scripts/',
    appCSS = './app/styles/',
    appImage = './app/images/';


var dirs = [appJS, appCSS, appImage];

dirs.forEach(dir => {
    mkdirp.sync(dir);
});
