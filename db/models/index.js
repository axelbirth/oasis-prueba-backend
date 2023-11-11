// Se encarga de enviar la conexion hacia los modelos

const { Oasis, OasisSchema } = require('./oasis.model');

function setupModels(sequelize) {
  Oasis.init(OasisSchema, Oasis.config(sequelize));
}

module.exports = setupModels;
