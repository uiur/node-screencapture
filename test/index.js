var test = require('tape')

var captureExec = require('../lib/capture_exec')

var spy

captureExec.capture = function (filePath, callback) {
  spy(filePath, callback)
}

var screencapture = require('../index')

test('screencapture', function (t) {
  spy = function (filePath, callback) {
    t.ok(filePath)
    callback(null, filePath)
  }

  screencapture(function (err, imagePath) {
    t.equal(err, null)
    t.ok(imagePath)
    t.end()
  })
})

test('screencapture with filePath', function (t) {
  spy = function (filePath, callback) {
    t.equal(filePath, 'png.png')
    callback(null, filePath)
  }

  screencapture('png.png', function (err, imagePath) {
    t.equal(err, null)
    t.ok(imagePath)
    t.end()
  })
})
