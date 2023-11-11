// Validar la data
// Libreria Joi para validacion de datos
const Joi = require('joi');

const id = Joi.string().id();
const nombre = Joi.string().min(3);
const latitud = Joi.number();
const longitud = Joi.number();
const agua = Joi.number();
const destacado = Joi.boolean();

const createOasisSchema = Joi.object({
  nombre: nombre.required(),
  latitud: latitud.required(),
  longitud: longitud.required(),
  agua: agua.required(),
  destacado: destacado.required()
});

const updateOasisSchema = Joi.object({
  nombre: nombre,
  latitud: latitud,
  longitud: longitud,
  agua: agua,
  destacado: destacado
});

const getOasisSchema = Joi.object({
  id: id.required()
});

const getAguaOasisSchema = Joi.object({
  agua: agua.required()
});

module.exports = { createOasisSchema, updateOasisSchema, getOasisSchema, getAguaOasisSchema }
