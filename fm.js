'use strict';

var spawn = require('child_process').spawn;
var iconv = require("iconv-lite");
var path = require("path");
var fs = require('fs');

var jarFile = path.join(__dirname, "lib/fm.jar");
var encoding = "utf-8";

var processTemplate = function(args) {
  var resultData = "";

  var cmd = spawn('java', ["-jar", jarFile,
      args.viewsDir,
      args.templatePath,
      encoding]);

  if(args.done) {
    cmd.stdout.on("data", function(data) {
      resultData += iconv.decode(data, encoding);
    });
    cmd.stderr.on("data", function(data) {
      console.error(iconv.decode(data, encoding));
    });
    cmd.stdout.on("end", function() {
      args.done(null, resultData);
    });
  }
};

function fm(viewsDir, outDir) {
  this.viewsDir = viewsDir;
  this.outDir = outDir;
}

fm.prototype.render = function(templatePath, outPath) {
  var self = this;

  processTemplate({
    viewsDir: self.viewsDir,
    templatePath: templatePath,
    done: function(err, data) {
      if(err) {
        console.error(err);
        return;
      }

      fs.writeFile(path.join(self.outDir, outPath), data, (err) => {
        if(err) throw err;
        console.info('Template ' + templatePath + ' was succesfully render as ' 
          + path.join(self.outDir,outPath));
      })
    }
  })
}

module.exports = fm;
