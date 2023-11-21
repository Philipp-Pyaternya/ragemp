function createBlips(iconId, position, name, color, shortRange) {
    return mp.blips.new(iconId, new mp.Vector3(Number(position?.split(',')[0]), Number(position?.split(',')[1]), Number(position?.split(',')[2])),
        {
            name: name,
            color: color,
            shortRange: shortRange
        });
}

module.exports = {
    createBlips
}