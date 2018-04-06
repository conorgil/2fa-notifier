let path = require('path');

module.exports = {
  entry: {
    './dist/extension/content/contentScript': './dist/extension/content/contentScript.js',
    './dist/extension/background/backgroundScript': './dist/extension/background/backgroundScript.js',
    './dist/extension/options/options': './dist/extension/options/options.js',
    './dist/extension/browserAction/popup': './dist/extension/browserAction/popup.js'
  },
  output: {
    filename: '[name].bundle.js'
  }
}