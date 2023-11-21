const { Colshapes } = require('../libs/sequelize/models')
const { createColshape } = require('../utils/colshape');

function getColshapes() {
    // for future searching functionality of colshapes 
    return Colshapes.findAll();
}

async function newColshapes() {
    try {
        const colshapes = await getColshapes();
        colshapes.map(item => {
            const colshape = createColshape(item.x, item.y, item.range)

            mp.events.add("playerEnterColshape", (player, shape) => {
                if (shape === colshape) {
                    player.outputChatBox("Enter Area");
                }
            });

            mp.events.add("playerExitColshape", (player, shape) => {
                if (shape === colshape) {
                    player.outputChatBox("Out Area");
                }
            });
        })
    } catch (error) {
        console.error('Error getColshapes:', error);
    }

}


module.exports = {
    getColshapes,
    newColshapes,
}
