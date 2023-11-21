const { Blips } = require('../libs/sequelize/models')

const ID_X = 0;
const ID_Y = 1;
const ID_Z = 2;

function getBlips() {
    // for future searching functionality of blips
    return Blips.findAll();
}

async function newBlips() {
    try {
        const blips = await getBlips();
        blips?.map((item) => {
            const xyz = item.position?.split(',');
            const x = Number(xyz[ID_X]);
            const y = Number(xyz[ID_Y]);
            const z = Number(xyz[ID_Z]);
            mp.blips.new(item.sprite, new mp.Vector3(x, y, z),
                {
                    name: item.name,
                    color: item.color,
                    shortRange: item.shortRange
                })
        })
    } catch (error) {
        console.error('Error getBlips:', error);
    }

}

module.exports = {
    getBlips,
    newBlips
}
