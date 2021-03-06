define(function() {
    // 1 - wall
    // 2 - steel wall
    // 3 - trees
    // 4 - water
    // 5 - ice
    function getMap()
    {
        return [
            [0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [2,2,2,2,0,0,0,0,2,2,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0],
            [2,2,2,2,0,0,0,0,2,2,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0],
            [0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,2,2,2,2,3,3],
            [0,0,2,2,0,0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,2,2,2,2,3,3],
            [0,0,2,2,0,0,0,0,2,2,2,2,2,2,0,0,3,3,0,0,2,2,0,0,0,0],
            [0,0,2,2,0,0,0,0,2,2,2,2,2,2,0,0,3,3,0,0,2,2,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,0,0,0,0],
            [3,3,2,2,2,2,0,0,2,2,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0],
            [3,3,2,2,2,2,0,0,2,2,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,2,2,3,3,2,2,3,3,0,0,0,0,1,1,0,0,0,0,2,2,2,2],
            [0,0,0,0,2,2,3,3,2,2,3,3,0,0,0,0,1,1,0,0,0,0,2,2,2,2],
            [0,0,0,0,2,2,0,0,0,0,3,3,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
            [0,0,0,0,2,2,0,0,0,0,3,3,0,0,0,0,2,2,0,0,0,0,2,2,0,0],
            [0,0,0,0,1,1,0,0,0,0,2,2,0,0,0,0,2,2,2,2,1,1,2,2,0,0],
            [0,0,0,0,1,1,0,0,0,0,2,2,0,0,0,0,2,2,2,2,1,1,2,2,0,0],
            [3,3,2,2,2,2,2,2,3,3,3,3,1,1,2,2,2,2,0,0,1,1,2,2,0,0],
            [3,3,2,2,2,2,2,2,3,3,3,3,1,1,2,2,2,2,0,0,1,1,2,2,0,0],
            [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3,3,3,0,0,1,1,0,0],
            [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3,3,3,0,0,1,1,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,3,3,0,0,1,1,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,1,1,1,1,0,0,0,3,3,0,0,1,1,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,1,0,0,1,0,0,0,2,2,0,0,1,1,0,0],
            [0,0,0,0,0,0,2,2,0,0,0,1,0,0,1,0,0,0,2,2,0,0,1,1,0,0]
        ];
    };

    function getEnemies()
    {
        return [3,3,1,1,2,2,2,2,4,4,4,4,1,1,2,2,4,4,2,2]; //todo
    };

    return {
        getMap: getMap,
        getEnemies: getEnemies
    };
});
