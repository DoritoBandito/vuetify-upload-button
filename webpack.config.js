const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vuetify-upload-button.min.js',
      libraryTarget: 'window',
      library: 'VuetifyUploadButton',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/UploadButton.vue'),
    output: {
      filename: 'vuetify-upload-button.js',
      libraryTarget: 'umd',
      library: 'vuetify-upload-button',
      umdNamedDefine: true
    }
  })
];