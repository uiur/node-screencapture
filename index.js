var tmp = require('tmp')
  , exec = require('child_process').exec
  , os = require('os')

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

function screencaptureWithFilePath(filePath, callback) {
  exec(captureCommand(filePath), function (err) {
    if (err) callback(err)

    callback(null, filePath)
  })
}

/*
   Capture a screenshot and resolve with the image path

   @param {String} [filePath]
   @param {Function} callback
*/
module.exports = function screencapture(filePath, callback) {
  if (typeof filePath === 'function') {
    callback = filePath
    filePath = null
  }

  if (filePath) {
    screencaptureWithFilePath(filePath, callback)
  } else {
    tmp.tmpName({ postfix: '.png' }, function (err, tmpPath) {
      if (err) callback(err)
      screencaptureWithFilePath(tmpPath, callback)
    })
  }
}
