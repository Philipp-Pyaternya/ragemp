function createMarker(type, { x, y, z }, color) {
    return mp.markers.new(type, { x, y, z }, color);
}

module.exports = {
    createMarker
}
