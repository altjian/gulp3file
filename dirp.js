var mkdirp = require('mkdirp');

var appJS = './app/scripts/',
    appCSS = './app/styles/',
    appImage = './app/images/',
    uiCSS = './app/ui/css',
    uiJS = './app/ui/js';


var dirs = [appJS, appCSS, appImage, uiCSS, uiJS];

dirs.forEach(dir => {
    mkdirp.sync(dir);
});
