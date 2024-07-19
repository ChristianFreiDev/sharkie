const level3 = new Level();

/**
 * This function loads level 3 and all the objects associated with it.
 */
function loadLevel3() {
    level3.backgroundObjects = [
        new BackgroundObject('img/3.background/layers/5.water/d2.webp', -719),
        new BackgroundObject('img/3.background/layers/4.layer2/d2.webp', -719),
        new BackgroundObject('img/3.background/layers/3.layer1/d2.webp', -719),
        new BackgroundObject('img/3.background/layers/2.floor/d2.webp', -719),
        new BackgroundObject('img/3.background/layers/5.water/d1.webp', 0),
        new BackgroundObject('img/3.background/layers/4.layer2/d1.webp', 0),
        new BackgroundObject('img/3.background/layers/3.layer1/d1.webp', 0),
        new BackgroundObject('img/3.background/layers/2.floor/d1.webp', 0),
        new BackgroundObject('img/3.background/layers/5.water/d2.webp', 719),
        new BackgroundObject('img/3.background/layers/4.layer2/d2.webp', 719),
        new BackgroundObject('img/3.background/layers/3.layer1/d2.webp', 719),
        new BackgroundObject('img/3.background/layers/2.floor/d2.webp', 719),
        new BackgroundObject('img/3.background/layers/5.water/d1.webp', 719*2),
        new BackgroundObject('img/3.background/layers/4.layer2/d1.webp', 719*2),
        new BackgroundObject('img/3.background/layers/3.layer1/d1.webp', 719*2),
        new BackgroundObject('img/3.background/layers/2.floor/d1.webp', 719*2),
        new BackgroundObject('img/3.background/layers/5.water/d2.webp', 719*3),
        new BackgroundObject('img/3.background/layers/4.layer2/d2.webp', 719*3),
        new BackgroundObject('img/3.background/layers/3.layer1/d2.webp', 719*3),
        new BackgroundObject('img/3.background/layers/2.floor/d2.webp', 719*3),
    ];
    
    level3.enemies = [
        new PufferFish(2, 400, 150),
        new PufferFish(1, 800, 200),
        new PufferFish(3, 900, 400),
        new PufferFish(2, 1100, 50),
        new PufferFish(3, 1700, 200),
        new PufferFish(3, 1900, 100),
        new PufferFish(2, 2000, 350),
        new Jellyfish('super-dangerous', 'pink', 500, 300),
        new Jellyfish('regular-damage', 'purple', 500, 50),
        new Jellyfish('super-dangerous', 'pink', 600, 250),
        new Jellyfish('super-dangerous', 'green', 900, 350),
        new Jellyfish('regular-damage', 'purple', 1300, 100),
        new Jellyfish('super-dangerous', 'green', 1400, 250),
        new Jellyfish('regular-damage', 'yellow', 1600, 350),
        new FinalBoss(25, 1.3, 'hard', 2)
    ];
    
    level3.coins = [
        new Coin(500, 200),
        new Coin(700, 100),
        new Coin(850, 50),
        new Coin(1150, 300),
        new Coin(1200, 100),
        new Coin(1300, 350),
        new Coin(1500, 300),
        new Coin(1700, 100),
        new Coin(1900, 150),
        new Coin(2100, 50)
    ];
    
    level3.poisonBottles = [
        new PoisonBottle(450, 350),
        new PoisonBottle(750, 150),
        new PoisonBottle(950, 250),
        new PoisonBottle(1300, 50),
        new PoisonBottle(1700, 250),
        new PoisonBottle(2000, 350)
    ];
}