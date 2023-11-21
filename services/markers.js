const { Marker } = require('../libs/sequelize/models')

async function getMarker() {
    const marker = await Marker.findAll();
    return marker;
}

module.exports = {
    getMarker
}
