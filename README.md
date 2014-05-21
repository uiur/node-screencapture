# node-screencapture
Take a screenshot of your desktop.

Available in OSX and Linux.

``` javascript
var screencapture = require('screencapture')

screencapture(function (err, imagePath) {
  console.log(imagePath)
})

```

## Installation
```
npm install -g screencapture
```

In Linux, you need to install imagemagick.
