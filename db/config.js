//Configuracion para las migraciones

const{config} = require('./../config/config');

// Protegemos nuestros datos mas importantes
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = config.dbLink;
module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}
