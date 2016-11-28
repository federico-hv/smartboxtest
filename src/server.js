import express from 'express';
import fs from 'fs';
import React from 'react';
import App from './components/App';
import { renderToString } from 'react-dom/server';
import path from 'path';


const app = express();

// const wpfiles = fs.readdirSync('./static');
// const bundleName = wpfiles.find(val => val.indexOf('bundle') !== -1);
// console.log('BUNDLE_NAME: ', bundleName);
app.use(express.static(path.join(__dirname, 'assets')));

app.use(function handleRender(req, res, next) {

  const html = renderToString(<App/>);

  // Send the rendered page back to the client
  res.send(renderFullPage(html));
});

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>SmartBox Test</title>
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <script
          src="https://code.jquery.com/jquery-3.1.1.min.js"
          integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
          crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </head>
      <body>
        <div id="root"><div>${html}</div></div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
