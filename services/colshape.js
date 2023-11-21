const { Colshapes } = require('../libs/sequelize/models')
async function getColshapes() {
    const colshapes = await Colshapes.findAll();
    return colshapes;
}

module.exports = {
    getColshapes
}
