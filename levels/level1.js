const level1 = new Level();

level1.backgroundObjects = [
    new BackgroundObject('img/3.background/layers/5.water/d2.png', -719),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', -719),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', -719),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', -719),
    new BackgroundObject('img/3.background/layers/5.water/d1.png', 0),
    new BackgroundObject('img/3.background/layers/4.layer2/d1.png', 0),
    new BackgroundObject('img/3.background/layers/3.layer1/d1.png', 0),
    new BackgroundObject('img/3.background/layers/2.floor/d1.png', 0),
    new BackgroundObject('img/3.background/layers/5.water/d2.png', 719),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', 719),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', 719),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', 719),
    new BackgroundObject('img/3.background/layers/5.water/d1.png', 719*2),
    new BackgroundObject('img/3.background/layers/4.layer2/d1.png', 719*2),
    new BackgroundObject('img/3.background/layers/3.layer1/d1.png', 719*2),
    new BackgroundObject('img/3.background/layers/2.floor/d1.png', 719*2),
    new BackgroundObject('img/3.background/layers/5.water/d2.png', 719*3),
    new BackgroundObject('img/3.background/layers/4.layer2/d2.png', 719*3),
    new BackgroundObject('img/3.background/layers/3.layer1/d2.png', 719*3),
    new BackgroundObject('img/3.background/layers/2.floor/d2.png', 719*3),
];

level1.enemies = [
    new PufferFish(1, 500, 350),
    new PufferFish(2, 900, 300),
    new PufferFish(3, 1000, 100),
    new PufferFish(2, 1900, 100),
    new Jellyfish('super-dangerous', 'green', 400, 200),
    new Jellyfish('super-dangerous', 'pink', 800, 100),
    new Jellyfish('regular-damage', 'purple', 1200, 300),
    new Jellyfish('regular-damage', 'yellow', 1700, 200),
    new FinalBoss()
];

level1.coins = [
    new Coin(300, 100),
    new Coin(500, 300),
    new Coin(650, 150),
    new Coin(850, 50),
    new Coin(950, 250),
    new Coin(1100, 350),
    new Coin(1300, 100),
    new Coin(1500, 350),
    new Coin(1600, 50),
    new Coin(1800, 250)
];

level1.poisonBottles = [
    new PoisonBottle(500, 100),
    new PoisonBottle(800, 150),
    new PoisonBottle(1150, 250),
    new PoisonBottle(1350, 350),
    new PoisonBottle(1550, 50)
];