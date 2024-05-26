const level1 = new Level();

level1.backgroundObjects = [
    new BackgroundObject('img/3.background/layers/5.water/d2.png', -720),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', -720),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', -720),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', -720),
    new BackgroundObject('img/3.background/layers/5.water/d1.png', 0),
    new BackgroundObject('img/3.background/layers/4.layer2/d1.png', 0),
    new BackgroundObject('img/3.background/layers/3.layer1/d1.png', 0),
    new BackgroundObject('img/3.background/layers/2.floor/d1.png', 0),
    new BackgroundObject('img/3.background/layers/5.water/d2.png', 720),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', 720),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', 720),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', 720),
    new BackgroundObject('img/3.background/layers/5.water/d1.png', 720*2),
    new BackgroundObject('img/3.background/layers/4.layer2/d1.png', 720*2),
    new BackgroundObject('img/3.background/layers/3.layer1/d1.png', 720*2),
    new BackgroundObject('img/3.background/layers/2.floor/d1.png', 720*2),
    new BackgroundObject('img/3.background/layers/5.water/d2.png', 720*3),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', 720*3),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', 720*3),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', 720*3),
];

level1.enemies = [
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new FinalBoss()
];