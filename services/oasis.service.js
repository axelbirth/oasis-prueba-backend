// Manejo de errores con Boom
const boom = require('@hapi/boom');

// Importo lo que rerquiero de sequilize para la conexion y consultas a BD
const { models } = require('../libs/sequelize');
const{Op} = require('sequelize');

class OasisService {

  constructor() {}

  async create(data) {
    const newOasis = await models.Oasis.create(data);
    return newOasis;
  }

  async getOasis() {
    const rta = await models.Oasis.findAll()
    return rta;
  }

  async getOasisByAgua(cantidad) {
    const rta = await models.Oasis.findAll({
      where: {
        agua: { [Op.lte]: cantidad },
      },
    });

    if(!rta) {
      throw boom.notFound('Oasis no encontrado :(');
    }
    return rta;
  }

  async getDestacados(operation) {
    const rta = await models.Oasis.findAll({
      where: {
        destacado: { [Op.eq]: operation },
      },
    });
    return rta;
  }

  async getOasisByLatLong(lat, long) {
    const rta = await models.Oasis.findAll({
      where: {
        latitud: {
          [Op.lte]: lat
        },
        longitud: {
          [Op.lte]: long
        }
      }
    });
    return rta;
  }

  async find(id) {
    const oasis = await models.Oasis.findByPk(id);
    if(!oasis) {
      throw boom.notFound('Oasis no encontrado :(');
    }
    return oasis;
  }

  async update(id, changes) {
    const oasis = await this.find(id);
    const rta = await oasis.update(changes);
    return rta;
  }

  async delete(id) {
    const oasis = await this.find(id);
    await oasis.destroy();
    return { id };
  }

}

module.exports = OasisService;
