mp.events.addCommand("pos", (player) => {
    const position = player.position;
    const heading = player.heading;

    // mp.markers.new(1, { x: position.x, y: position.y, z: position.z }, 2);

    player.outputChatBox(`Your current location: x=${position.x}, y=${position.y}, z=${position.z}, heading=${heading}`);
    console.log(`Your current location: x=${position.x}, y=${position.y}, z=${position.z}, heading=${heading}`)
});


