const express = require('express');
const path = require('path');
const webpackCompiler = require('../webpackCompiler')

const app = express();

const setupMiddleware = () => {
  // Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(webpackCompiler, {
    logLevel: 'warn'
  }));

  // Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(webpackCompiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}

setupMiddleware()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

// Only production needs this route to a physical bundle file.
// In dev, the bundle file is created in-memory thanks to dev middleware.
app.get('/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/../frontend/bundle.js'));
});

const port = process.env.PORT || 8080

app.listen(port, function () {
  console.log(`Express server listening on port ${port}`);
});
