const path = require('path');
const express = require('express');
let config, webpack, compiler;


const app = express();

const TARGET = process.env.npm_lifecycle_event;

if(TARGET=== 'dev'){
  config = require('./webpack.config');
  webpack = require('webpack');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})