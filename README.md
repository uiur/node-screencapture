# node-screencapture
[![Build Status](https://travis-ci.org/uiureo/node-screencapture.svg)](https://travis-ci.org/uiureo/node-screencapture)

Take a screenshot of your desktop interactively.

Available in OSX, Linux, FreeBSD and Windows.

``` javascript
var screencapture = require('screencapture')

screencapture(function (err, imagePath) {
  // then you have imagePath as png.
  //
  // When an user exits screencapture without taking a screenshot,
  // imagePath == null
})
```

You can specify an output file path.
``` javascript
screencapture('/path/to/output.png', function (err, imagePath) {
  // imagePath is '/path/to/output.png' or null
})
```

You can use env named `CAPTURE_COMMAND` for capture.
This is formatted with `%s` for file path; `CAPTURE_COMMAND="shutter -s -e -o %s"`.

## Installation
```
npm install -g screencapture
```

In Linux, you need to install imagemagick.
