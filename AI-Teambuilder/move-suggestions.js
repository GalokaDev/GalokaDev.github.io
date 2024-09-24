const moveList = ["Thunderbolt", "Flamethrower", "Vine Whip", "Surf", "Earthquake", "Psychic", "Shadow Ball", "Ice Beam", "Hyper Beam", "Rock Slide"];

const moveDataList = document.createElement('datalist');
moveDataList.id = 'move-suggestions';

moveList.forEach(move => {
    const option = document.createElement('option');
    option.value = move;
    moveDataList.appendChild(option);
});

document.body.appendChild(moveDataList);
