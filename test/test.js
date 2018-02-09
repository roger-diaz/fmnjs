var path = require('path');
var fs = require('fs');

var fmjs = require('../fm.js');
var viewsDir = path.join(__dirname, './views');
var outDir = path.join(__dirname, './output');

var fm = new fmjs(viewsDir, outDir);

fm.render('/templates/web/simple.ftl', 'simple.html');
fm.render('/templates/web/simple-service.ftl', 'simplesrv.html');
fm.render('/templates/web/home.ftl', 'home.html');
