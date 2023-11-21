const { Blips } = require('../libs/sequelize/models')
const { createBlips } = require('../utils/bilps');

function getBlips() {
    // for future searching functionality of blips
    return Blips.findAll();
}

async function newBlips() {
    try {
        const blips = await getBlips();
        blips?.map((item) => {
            createBlips(item.sprite, item.position, item.name, item.color, item.shortRange);
        })
    } catch (error) {
        console.error('Error getBlips:', error);
    }

}

module.exports = {
    getBlips,
    newBlips
}
