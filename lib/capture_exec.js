var exec = require('child_process').exec
  , os = require('os')
  , fs = require('fs')
  , path = require('path')
  // freeware nircmd http://www.nirsoft.net/utils/nircmd.html
  , nircmdc = path.resolve(__dirname, '../bin/nircmdc.exe')

function captureCommand(path) {
  switch (os.platform()) {
    case 'win32':
      return '"' + nircmdc + '" savescreenshot ' + path
    case 'freebsd':
      return 'scrot -s ' + path
    case 'darwin':
      return 'screencapture ' + path
    case 'linux':
      return 'import ' + path
    default:
      throw new Error('unsupported platform')
  }
}

exports.capture = function (filePath, callback) {
  exec(captureCommand(filePath), function (err) {
    // ignore such error
    // nircmd always exits with err even though it works
    // if (err) callback(err)

    fs.exists(filePath, function (exists) {
      // check exists for success/fail instead
      if (!exists) {
        return callback(new Error('Screenshot failed'))
      }
      callback(null, filePath)
    })
  })
}
