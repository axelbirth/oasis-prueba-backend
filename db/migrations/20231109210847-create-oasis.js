'use strict';

const { OasisSchema, OASIS_TABLE } = require('./../models/oasis.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(OASIS_TABLE, OasisSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(OASIS_TABLE);
  }
};
