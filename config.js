/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
     'sprite-svg',
     'sprite-png',
     'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    'src/scss/base.scss'
    
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/fonts/abel.woff': 'fonts/',
    'src/fonts/YanoneKaffeesatzRegular.woff': 'fonts/',
    'src/fonts/YanoneKaffeesatzLight.woff': 'fonts/',
    'src/fonts/YanoneKaffeesatzBold.woff': 'fonts/',
    'src/fonts/YanoneKaffeesatzMedium.woff': 'fonts/',
    'src/fonts/Vollkorn.woff': 'fonts/',
    'src/fonts/SFRegular.woff': 'fonts/',
    "./src/img/*.{png,svg,jpg,jpeg}": "img/",
     'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
