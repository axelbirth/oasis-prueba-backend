// Configuracion para conexion a base de datos a traves de Sequelize que es un ORM para NodeJS
const{Sequelize} = require('sequelize');
const{config} = require('./../config/config');
const setupModels = require('./../db/models/index');

// Protegemos nuestros datos mas importantes
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//postgres://axel:bzi7M9bgcY6asHIJxcBN5PlVis3009JF@dpg-cl7fbvv6e7vc739sbrs0-a/oasis_knqs
const URI = config.dbLink;
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
