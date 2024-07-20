/** Class for an asset cache that stores all the images and audio files. */
class AssetCache {
    imageCache = {};
    imagePaths = [
        'img/1.sharkie/4.attack/bubble-trap/poisoned-bubble.webp',
        'img/1.sharkie/4.attack/bubble-trap/bubble.webp',
        ...createImagePaths('img/1.sharkie/1.idle/', 1, 18),
        ...createImagePaths('img/1.sharkie/2.long-idle/', 1, 14),
        ...createImagePaths('img/1.sharkie/3.swim/', 1, 6),
        ...createImagePaths('img/1.sharkie/6.dead/1.poisoned/', 1, 12),
        ...createImagePaths('img/1.sharkie/5.hurt/1.poisoned/', 1, 4),
        ...createImagePaths('img/1.sharkie/5.hurt/2.electric-shock/', 1, 2),
        ...createImagePaths('img/1.sharkie/4.attack/bubble-trap/op1/', 1, 8),
        ...createImagePaths('img/1.sharkie/4.attack/bubble-trap/poisoned/', 1, 8),
        ...createImagePaths('img/1.sharkie/4.attack/fin-slap/', 1, 6),
        ...createImagePaths('img/4.score/1.coins/', 1, 4),
        ...createImagePaths('img/2.enemies/3.final-boss/2.floating/', 1, 13),
        ...createImagePaths('img/2.enemies/3.final-boss/5.hurt/', 1, 4),
        ...createImagePaths('img/2.enemies/3.final-boss/4.dead/', 1, 6),
        ...createImagePaths('img/2.enemies/3.final-boss/1.spawning/', 1, 10),
        ...createImagePaths('img/2.enemies/3.final-boss/3.attack/', 1, 6),
        ...createImagePaths('img/2.enemies/2.jelly-fish/regular-damage/swim/purple/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/regular-damage/swim/yellow/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/regular-damage/dead/purple/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/regular-damage/dead/yellow/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/super-dangerous/swim/green/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/super-dangerous/swim/pink/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/super-dangerous/dead/green/', 1, 4),
        ...createImagePaths('img/2.enemies/2.jelly-fish/super-dangerous/dead/pink/', 1, 4),
        ...createImagePaths('img/4.score/3.poison/animated/', 1, 8),
        ...createImagePaths('img/2.enemies/1.puffer-fish/1.swim/1.swim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/1.swim/2.swim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/1.swim/3.swim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/2.transition/1.transition', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/2.transition/2.transition', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/2.transition/3.transition', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim', 1, 5),
        ...createImagePaths('img/2.enemies/1.puffer-fish/4.dead/', 1, 3),
        'img/4.score/2.elements/coin.webp',
        'img/4.score/2.elements/heart.webp',
        'img/4.score/2.elements/poison.webp',
        'img/3.background/layers/5.water/d2.webp',
        'img/3.background/layers/4.layer2/d2.webp',
        'img/3.background/layers/3.layer1/d2.webp',
        'img/3.background/layers/2.floor/d2.webp',
        'img/3.background/layers/5.water/d1.webp',
        'img/3.background/layers/4.layer2/d1.webp',
        'img/3.background/layers/3.layer1/d1.webp',
        'img/3.background/layers/2.floor/d1.webp',
        'img/3.background/layers/1.light/1.webp',
        'img/3.background/layers/1.light/2.webp'
    ];
    audioCache = {
        'swim': { 
            path: 'audio/swim/swim.ogg',
            volume: 0.3
        },
        'character-hurt': { 
            path: 'audio/hurt/character-hurt.wav',
            volume: 0.3
        },
        'electric-shock': {
            path: 'audio/hurt/electric-shock.wav',
            volume: 0.7
        },
        'slap': {
            path: 'audio/slap/slap.wav',
            volume: 1
        },
        'blow': {
            path: 'audio/blow/blow.ogg',
            volume: 0.55
        },
        'slap': {
            path: 'audio/slap/slap.wav',
            volume: 0.5
        },
        'snoring': {
            path: 'audio/sleep/snoring.wav',
            volume: 1
        },
        'yawn': {
            path: 'audio/sleep/yawn.wav',
            volume: 0.1
        },
        'splash': {
            path: 'audio/splash/splash.wav',
            volume: 1
        },
        'final-boss-hurt': {
            path: 'audio/hurt/final-boss-hurt.ogg',
            volume: 1
        },
        'boss-fight': {
            path: 'audio/boss-fight/boss-fight.mp3',
            volume: 0.2
        },
        'bite': {
            path: 'audio/bite/bite.wav',
            volume: 1
        },
        'bubble-pop': {
            path: 'audio/bubble-pop/bubble-pop.wav',
            volume: 0.9
        },
        'ambience': {
            path: 'audio/ambience/ambience.mp3',
            volume: 1
        },
        'enemy-hurt': {
            path: 'audio/hurt/enemy-hurt.wav',
            volume: 0.3
        },
        'collect': {
            path: 'audio/collect/collect.wav',
            volume: 0.15
        },
        'game-over': {
            path: 'audio/game-over/game-over.mp3',
            volume: 1
        },
        'yay': {
            path: 'audio/win/yay.wav',
            volume: 0.8
        },
        'pop': {
            path: 'audio/win/pop.wav',
            volume: 0.8
        }
    };
    assetLength = this.imagePaths.length + Object.keys(this.audioCache).length;
    loadPercentage = 0;

    /**
     * Update progress variable and progress bar HTML element. 
     */
    updateProgress() {
        progress++;
        this.loadPercentage = Math.round(progress / this.assetLength * 100) || 0;
        let progressBar = document.getElementById('progress-bar');
        if (progressBar.value != null) {
            progressBar.value = this.loadPercentage;
        }
    }

    /**
     * Load all images and cache them.
     */
    async loadImages() {
        await Promise.all(this.imagePaths.map(imagePath => new Promise(resolve => {
            let img = new Image();
            img.src = imagePath;
            this.imageCache[imagePath] = img;
            img.addEventListener('load', () => {
                this.updateProgress();
                resolve();
            }
        )})));
    }

    /**
     * Load all audio files and cache them.
     */
    async loadAudio() {
        let keys = Object.keys(this.audioCache);
        await Promise.all(keys.map(key => new Promise(resolve => {
            let audioObject = this.audioCache[key];
            let audio = new Audio(audioObject.path);
            audio.volume = audioObject.volume;
            audioObject.file = audio;
            audioObject.file.addEventListener('canplaythrough', () => {
                this.updateProgress();
                resolve();
            }
        )})));
    }

    /**
     * Load all assets. Hide loading screen with a slight delay after all assets have been loaded
     * so that assets can be rendered behind loading screen before it disappears
     * and the loading screen is shown at least for a little while.
     */
    async loadAssets() {
        try {
            await Promise.all([this.loadImages(), this.loadAudio()]);
        } catch {
            console.error('Assets could not be loaded.');
        } finally {
            setTimeout(() => {
                changeDisplayProperty('loading-screen', 'none');
            }, 1000);
        }
    }
}