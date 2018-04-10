if(typeof window.BrowserType !== 'undefined') {
  if('console' in window) console.log('BrowserType.js seems to be initialized already! Aborting...');
} else {

  /**
   * expressions taken from: https://stackoverflow.com/a/9851769/5088645
   */
  window.BrowserType = {
    // Opera 8.0+
    isOpera: (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,

    // Firefox 1.0+
    isFirefox: typeof InstallTrigger !== 'undefined',

    // Safari 3.0+ "[object HTMLElementConstructor]"
    isSafari: /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),

    // Internet Explorer 6-11
    isIE: /*@cc_on!@*/false || !!document.documentMode,

    // Edge 20+
    isEdge: !this.isIE && !!window.StyleMedia,

    // Chrome 1+
    isChrome: !!window.chrome && !!window.chrome.webstore,

    // Blink engine detection
    isBlink: (this.isChrome || this.isOpera) && !!window.CSS
  }

  var docBase = document.getElementByTagName('html')[0];
  if(BrowserType.isOpera) {
    docBase.classList.add('bt-opera');
  } else if(BrowserType.isFirefox) {
    docBase.classList.add('bt-firefox');
  } else if(BrowserType.isSafari) {
    docBase.classList.add('bt-safari');
  } else if(BrowserType.isIE) {
    docBase.classList.add('bt-explorer');
  } else if(BrowserType.isEdge) {
    docBase.classList.add('bt-edge');
  } else if(BrowserType.isChrome) {
    docBase.classList.add('bt-chrome');
  } else {
    docBase.classList.add('bt-other');
  }

}
