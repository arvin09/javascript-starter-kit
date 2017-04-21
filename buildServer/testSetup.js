// this file isn't transpiled do in ES5 and CommonJS

//Register babel to transpile before our test run.
require('babel-register')();

//disable webpack feature that Mocha doesn't understand
require.extensions['.css'] = function(){};
