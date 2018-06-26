let path = require('path');

module.exports = {
  entry: {
    // Files that need to be transpiled from Typescript
    // to Javascript and included in the extension source.
    background: './src/typescript/background/backgroundScript.ts',
    popup: './src/typescript/browserAction/popup.ts',
    confirmation: './src/typescript/browserAction/confirmation.ts',
    options: './src/typescript/options/options.ts',
    supports2fa: './src/typescript/browserAction/supports2FA.ts'
  },
  output: {
    // This copies each source entry into the folder
    // extension/generatedJS and names it after its
    // entry config key.
    path: path.join(__dirname, 'src', 'extension', 'generatedJS'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be
      // handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  resolve: {
    // Tell webpack which paths to use when we import modules
    // in our typescript code
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      'src',
      'node_modules',
    ]
  }
}