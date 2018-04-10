# BrowserType.js
**An automated detection library for the current browser.**

## Installation
Include the script somehow in your page. You can retrieve it using the following methods:

**Package manager:**     
``` bash
$ npm install browsertype.js --save

$ yarn add browsertype.js

$ bower install browsertype.js --save
```

**CDN:**     
- https://cdn.jsdelivr.net/npm/browsertype.js@1.0.0
- https://cdn.jsdelivr.net/npm/browsertype.js@1.0.0/main.min.js
- https://cdn.jsdelivr.net/gh/mcstreetguy/browsertype.js@1.0.0/main.js
- https://cdn.jsdelivr.net/gh/mcstreetguy/browsertype.js@1.0.0/main.min.js

_You can change `1.0.0` to any version you want to require. See https://www.jsdelivr.com/ for more information._

## Usage
### Scripts
BrowserType.js registers a plain object in `window`, containing recognition expressions. It's structure is as following:

```
BrowserType = {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isBlink
}
```

You can use these values directly in conditions:

``` javascript
if(BrowserType.isIE) {
  alert('You got the worst browser around, congratulations.');
} else if(BrowserType.isChrome) {
  alert('You got an evergreen browser, nice!');
}
```

### Stylesheets
BrowserType.js also sets a class on the html element, making it really easy to also differ between browsers in stylesheets.

- `bt-opera`
- `bt-firefox`
- `bt-safari`
- `bt-explorer`
- `bt-edge`
- `bt-chrome`
- `bt-other`
