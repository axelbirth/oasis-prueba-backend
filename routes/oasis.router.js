const express = require('express');
const OasisService = require('./../services/oasis.service.js');
const validatorHandler = require('./../middlewares/validate.handler.js');
const { createOasisSchema, updateOasisSchema, getOasisSchema, getAguaOasisSchema } = require('./../schemas/oasis.schema.js');

const router = express.Router();
const service = new OasisService();

// Obtener todos los Oasis
router.get('/', async (req, res) => {
  const oasis = await service.getOasis();
  res.json(oasis);
});

// Obtener un oasis por su ID
router.get('/:id',
  validatorHandler(getOasisSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const list = await service.find(id);
      res.json(list);
    } catch (error) {
      next(error);
    }
  }
);

// Obtener un oasis por cantidad de agua
router.get('/agua/:agua',
  validatorHandler(getAguaOasisSchema, 'params'),
  async (req, res, next) => {
    try {
      const agua = req.params.agua;
      const list = await service.getOasisByAgua(agua);
      res.json(list);
    } catch (error) {
      next(error);
    }
  }
);

// Obtener oasis destacados
router.get('/destacados/:operation', async (req, res) => {
  const operation = req.params.operation;
  const destacados = await service.getDestacados(operation);
  res.json(destacados);
});

//Obtener oasis por latitud y longitud
router.get('/lat/:latitud/long/:longitud', async (req, res) => {
  const lat = req.params.latitud;
  const long = req.params.longitud;
  const list = await service.getOasisByLatLong(lat, long);
  res.json(list);
});

// Añadir un oasis
router.post('/',
  validatorHandler(createOasisSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const list = await service.create(body);
    res.status(201).json({
      message: 'Creado con exito',
      data: list
    });
  }
);

// Actualizar un oasis
router.patch('/:id',
  validatorHandler(getOasisSchema, 'params'),
  validatorHandler(updateOasisSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const list = await service.update(id, body)
      res.json({
        message: 'Actualizado con exito',
        data: list
      });
    } catch (error) {
      next(error);
    }
  }
);

// Eliminar un oasis
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
