# app-context-connie-firebase

[connie-firebase](https://www.npmjs.com/package/connie-firebase) initializer for [app-context](https://www.npmjs.com/package/app-context)

### Installation

```bash
$ npm install --save app-context-connie-firebase
```

### Usage

```javascript
var AppContext = require('app-context');
var connieFirebase = require('app-context-connie-firebase');

module.exports = AppContext.createContext({
  configure: function() {
    this.use(
      AppContext.RunLevel.Connected,
      // load the configuration from firebase using connie
      connieFirebase('https://config-firebaseio.com/' + APP.environment)
    );

    // you can optionally use app-context-connie-firebase through app-context-initialize
    var initialize = require('app-context-initialize');
    this.use(
      AppContext.RunLevel.Connected,
      initialize(['connie-firebase', 'https://config-firebaseio.com/' + APP.environment])
    );
  }
});
```
