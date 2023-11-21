'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Markers', [
            {
                type: 1,
                x: -44.24192810058594,
                y: 29.43122100830078,
                z: 60.76398468017578,
                scale: 20,
                direction: '',
                rotation: '',
                color: 15,
                visible: true,
                dimension: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Markers', null, {});
    }
};