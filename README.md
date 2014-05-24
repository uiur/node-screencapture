# node-screencapture
Take a screenshot of your desktop.

Available in OSX and Linux.

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

## Installation
```
npm install -g screencapture
```

In Linux, you need to install imagemagick.
