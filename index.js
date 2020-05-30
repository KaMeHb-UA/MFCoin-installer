import React from 'react'
import { AppRegistry } from 'proton-native'
import App from './app'

AppRegistry.registerComponent('app', <App/>);

// ================================================================================
// This is for hot reloading (this will be stripped off in production by webpack)
// THIS SHOULD NOT BE CHANGED
if (module.hot) {
  module.hot.accept(["./app"], function() {
    const app = require("./app")["default"];
    AppRegistry.updateProxy(app);
  });
}
