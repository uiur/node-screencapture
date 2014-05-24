var exec = require('child_process').exec
  , os = require('os')
  , fs = require('fs')

function captureCommand(path) {
  switch (os.platform()) {
    case 'darwin':
      return 'screencapture -i ' + path
    case 'linux':
      return 'import ' + path
    default:
      throw new Error('unsupported platform')
  }
}

exports.capture = function (filePath, callback) {
  exec(captureCommand(filePath), function (err) {
    if (err) callback(err)

    fs.exists(filePath, function (exists) {
      callback(null, exists ? filePath : null)
    })
  })
}
