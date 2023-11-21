const { newBlips } = require('../../services/blips');
const { newMarkers } = require('../../services/markers');
const { newColshapes } = require('../../services/colshape');


mp.events.add('playerJoin', (player) => {
    console.log(`CLIENT [${player.name}] HAS BEEN CONNECT | IP  [${player.ip}]`);

    newBlips();
    newMarkers();
    newColshapes();

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