const{Pool}=require('pg');
const{config}=require('./../config/config');

// Protegemos nuestros datos mas importantes
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//console.log(URI);
const pool = new Pool({ connectionString: URI });

  /*const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'axel',
    password: 'admin12345',
    database: 'mkt_portal'
  });*/

module.exports = pool;
