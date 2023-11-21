const { createBlips } = require('../../utils/bilps');
const { createMarker } = require('../../utils/marker');
const { createColshape } = require('../../utils/colshape');

const { getBlips } = require('../../services/blips');
const { getMarker } = require('../../services/markers');
const { getColshapes } = require('../../services/colshape');


mp.events.add('playerJoin', (player) => {
    console.log(`CLIENT [${player.name}] HAS BEEN CONNECT | IP  [${player.ip}]`);

    getBlips()
        .then(blips => {
            blips?.map((item) => {
                createBlips(item.sprite, item.position, item.name, item.color, item.shortRange)
            })
        })
        .catch(error => {
            console.error('Error getBlips:', error);
        });


    let marker = null;
    getMarker()
        .then(result => {
            result?.map((m) => {
                marker = createMarker(m.type, { x: m.x, y: m.y, z: m.z }, m.color)
            })
        })
        .catch(error => {
            console.error('Error getMarker:', error);
        });

    getColshapes()
        .then(colshapes => {
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
        })
        .catch(error => {
            console.error('Error getColshapes:', error);
        });
});

mp.events.add('playerSpawn', (player) => {
    console.log(`CLIENT [${player.name}] HAS BEEN SPAWN`);
});

mp.events.add('playerDeath', (player) => {
    console.log(`CLIENT [${player.name}] HAS BEEN [DEATH`);
});

mp.events.add('playerQuit', (player) => {
    console.log(`CLIENT [${player.name}] HAS BEEN QUIT`);
});