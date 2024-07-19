const level2 = new Level();

/**
 * This function loads level 2 and all the objects associated with it.
 */
function loadLevel2() {
    level2.backgroundObjects = [
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
    
    level2.enemies = [
        new PufferFish(3, 550, 250),
        new PufferFish(1, 700, 50),
        new PufferFish(3, 1450, 50),
        new PufferFish(3, 1850, 150),
        new PufferFish(1, 2200, 100),
        new Jellyfish('regular-damage', 'yellow', 450, 100),
        new Jellyfish('super-dangerous', 'pink', 800, 250),
        new Jellyfish('super-dangerous', 'green', 1200, 150),
        new Jellyfish('regular-damage', 'yellow', 1350, 200),
        new Jellyfish('regular-damage', 'purple', 1750, 300),
        new Jellyfish('super-dangerous', 'green', 2400, 250),
        new FinalBoss(20, 1.15, 'easy', 1.7)
    ];
    
    level2.coins = [
        new Coin(400, 300),
        new Coin(450, 200),
        new Coin(600, 50),
        new Coin(700, 80),
        new Coin(800, 350),
        new Coin(900, 150),
        new Coin(1000, 50),
        new Coin(1100, 350),
        new Coin(1400, 380),
        new Coin(1700, 100)
    ];
    
    level2.poisonBottles = [
        new PoisonBottle(600, 100),
        new PoisonBottle(800, 40),
        new PoisonBottle(900, 300),
        new PoisonBottle(1200, 200),
        new PoisonBottle(1400, 250),
        new PoisonBottle(1600, 350)
    ];
}