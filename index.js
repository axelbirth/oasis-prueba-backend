// Index principal de la API
const express = require('express');
const routerApi = require('./routes/index.js');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler.js');
var helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = 3000;
/*const whitelist = ['http://localhost:4200'] // Sitios en donde se tenga permiso para acceder a la API
const options = { // Configuracion para detectar que sitios tengo en mi Whitelist
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}*/
app.use(helmet());
app.use(cors());

// Utilizar Middleware para utilizar Json
app.use(express.json());

routerApi(app);



// Middlewares para detectar errores
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
