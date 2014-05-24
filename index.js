var tmp = require('tmp')
  , capture = require('./lib/capture_exec').capture

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
    capture(filePath, callback)
  } else {
    tmp.tmpName({ postfix: '.png' }, function (err, tmpPath) {
      if (err) callback(err)
      capture(tmpPath, callback)
    })
  }
}
