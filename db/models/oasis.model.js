const { Model, DataTypes, Sequelize } = require('sequelize');

const OASIS_TABLE = 'oasis';

const OasisSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  latitud: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  longitud: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  agua: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  destacado: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}

class Oasis extends Model {
  static associate() {
    // Asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: OASIS_TABLE,
      modelName: 'Oasis',
      timestamps: false
    }
  }
}

module.exports = { OASIS_TABLE, OasisSchema, Oasis }
