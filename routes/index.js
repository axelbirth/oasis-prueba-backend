// Administrar las rutas de la API
const express = require('express');
const productsRouter = require('./oasis.router.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/oasis', productsRouter);
}

module.exports = routerApi;
