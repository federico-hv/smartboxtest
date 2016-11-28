var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

const common = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test   : /\.css$/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};


if(TARGET === 'dev' || !TARGET){
  module.exports = merge(common, {
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval',
    module: {
      loaders: [
        {
          exclude: /(node_modules)/,
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        },
      ]
    }
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: path.join(__dirname, 'src'),
    "resolve": {
      extensions: ['', '.js'],
      "alias": {
        "react": "preact-compat",
        "react-dom": "preact-compat"
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production'),
        },
      })
    ],
    module: {
      loaders: [
        {
          exclude: /(node_modules)/,
          test   : /\.js?$/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
        }
      ]
    }
  });
}
