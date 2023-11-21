const { Blips } = require('../libs/sequelize/models')

async function getBlips() {
    const blips = await Blips.findAll();
    return blips;
}

module.exports = {
    getBlips
}
