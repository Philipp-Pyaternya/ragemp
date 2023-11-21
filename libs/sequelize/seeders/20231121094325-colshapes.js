'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Colshapes', [
            {
                range: 15,
                x: -44.24192810058594,
                y: 29.43122100830078,
                z: 60.76398468017578,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Colshapes', null, {});
    }
};