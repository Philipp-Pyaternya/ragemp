const { Marker } = require('../libs/sequelize/models')
const { createMarker } = require('../utils/marker');

async function getMarker() {
    // for future searching functionality of markers
    return Marker.findAll();
}

async function newMarkers() {
    try {
        const markers = await getMarker();
        markers?.map((m) => {
            createMarker(m.type, { x: m.x, y: m.y, z: m.z }, m.color);
        })
    } catch (error) {
        console.error('Error getMarker:', error);
    }
}

module.exports = {
    getMarker,
    newMarkers
}
