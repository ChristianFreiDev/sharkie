class AssetCache {
    imageCache = {};
    imagePaths = [
        'img/1.sharkie/4.attack/bubble-trap/poisoned-bubble.png',
        'img/1.sharkie/4.attack/bubble-trap/bubble.png',
        'img/1.sharkie/1.idle/1.png',
        'img/1.sharkie/1.idle/2.png',
        'img/1.sharkie/1.idle/3.png',
        'img/1.sharkie/1.idle/4.png',
        'img/1.sharkie/1.idle/5.png',
        'img/1.sharkie/1.idle/6.png',
        'img/1.sharkie/1.idle/7.png',
        'img/1.sharkie/1.idle/8.png',
        'img/1.sharkie/1.idle/9.png',
        'img/1.sharkie/1.idle/10.png',
        'img/1.sharkie/1.idle/11.png',
        'img/1.sharkie/1.idle/12.png',
        'img/1.sharkie/1.idle/13.png',
        'img/1.sharkie/1.idle/14.png',
        'img/1.sharkie/1.idle/15.png',
        'img/1.sharkie/1.idle/16.png',
        'img/1.sharkie/1.idle/17.png',
        'img/1.sharkie/1.idle/18.png',
        'img/1.sharkie/2.long-idle/1.png',
        'img/1.sharkie/2.long-idle/2.png',
        'img/1.sharkie/2.long-idle/3.png',
        'img/1.sharkie/2.long-idle/4.png',
        'img/1.sharkie/2.long-idle/5.png',
        'img/1.sharkie/2.long-idle/6.png',
        'img/1.sharkie/2.long-idle/7.png',
        'img/1.sharkie/2.long-idle/8.png',
        'img/1.sharkie/2.long-idle/9.png',
        'img/1.sharkie/2.long-idle/10.png',
        'img/1.sharkie/2.long-idle/11.png',
        'img/1.sharkie/2.long-idle/12.png',
        'img/1.sharkie/2.long-idle/13.png',
        'img/1.sharkie/2.long-idle/14.png',
        'img/1.sharkie/2.long-idle/11.png',
        'img/1.sharkie/2.long-idle/12.png',
        'img/1.sharkie/2.long-idle/13.png',
        'img/1.sharkie/2.long-idle/14.png',
        'img/1.sharkie/3.swim/1.png',
        'img/1.sharkie/3.swim/2.png',
        'img/1.sharkie/3.swim/3.png',
        'img/1.sharkie/3.swim/4.png',
        'img/1.sharkie/3.swim/5.png',
        'img/1.sharkie/3.swim/6.png',
        'img/1.sharkie/6.dead/1.poisoned/1.png',
        'img/1.sharkie/6.dead/1.poisoned/2.png',
        'img/1.sharkie/6.dead/1.poisoned/3.png',
        'img/1.sharkie/6.dead/1.poisoned/4.png',
        'img/1.sharkie/6.dead/1.poisoned/5.png',
        'img/1.sharkie/6.dead/1.poisoned/6.png',
        'img/1.sharkie/6.dead/1.poisoned/7.png',
        'img/1.sharkie/6.dead/1.poisoned/8.png',
        'img/1.sharkie/6.dead/1.poisoned/9.png',
        'img/1.sharkie/6.dead/1.poisoned/10.png',
        'img/1.sharkie/6.dead/1.poisoned/11.png',
        'img/1.sharkie/6.dead/1.poisoned/12.png',
        'img/1.sharkie/5.hurt/1.poisoned/1.png',
        'img/1.sharkie/5.hurt/1.poisoned/2.png',
        'img/1.sharkie/5.hurt/1.poisoned/3.png',
        'img/1.sharkie/5.hurt/1.poisoned/4.png',
        'img/1.sharkie/5.hurt/2.electric-shock/1.png',
        'img/1.sharkie/5.hurt/2.electric-shock/2.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/1.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/2.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/3.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/4.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/5.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/6.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/7.png',
        'img/1.sharkie/4.attack/bubble-trap/op1/8.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/1.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/2.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/3.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/4.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/5.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/6.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/7.png',
        'img/1.sharkie/4.attack/bubble-trap/poisoned/8.png',
        'img/1.sharkie/4.attack/fin-slap/1.png',
        'img/1.sharkie/4.attack/fin-slap/2.png',
        'img/1.sharkie/4.attack/fin-slap/3.png',
        'img/1.sharkie/4.attack/fin-slap/4.png',
        'img/1.sharkie/4.attack/fin-slap/5.png',
        'img/1.sharkie/4.attack/fin-slap/6.png',
        'img/4.score/1.coins/1.png',
        'img/4.score/1.coins/2.png',
        'img/4.score/1.coins/3.png',
        'img/4.score/1.coins/4.png',
        'img/2.enemies/3.final-boss/2.floating/1.png',
        'img/2.enemies/3.final-boss/2.floating/2.png',
        'img/2.enemies/3.final-boss/2.floating/3.png',
        'img/2.enemies/3.final-boss/2.floating/4.png',
        'img/2.enemies/3.final-boss/2.floating/5.png',
        'img/2.enemies/3.final-boss/2.floating/6.png',
        'img/2.enemies/3.final-boss/2.floating/7.png',
        'img/2.enemies/3.final-boss/2.floating/8.png',
        'img/2.enemies/3.final-boss/2.floating/9.png',
        'img/2.enemies/3.final-boss/2.floating/10.png',
        'img/2.enemies/3.final-boss/2.floating/11.png',
        'img/2.enemies/3.final-boss/2.floating/12.png',
        'img/2.enemies/3.final-boss/2.floating/13.png',
        'img/2.enemies/3.final-boss/5.hurt/1.png',
        'img/2.enemies/3.final-boss/5.hurt/2.png',
        'img/2.enemies/3.final-boss/5.hurt/3.png',
        'img/2.enemies/3.final-boss/5.hurt/4.png',
        'img/2.enemies/3.final-boss/4.dead/1.png',
        'img/2.enemies/3.final-boss/4.dead/2.png',
        'img/2.enemies/3.final-boss/4.dead/3.png',
        'img/2.enemies/3.final-boss/4.dead/4.png',
        'img/2.enemies/3.final-boss/4.dead/5.png',
        'img/2.enemies/3.final-boss/4.dead/6.png',
        'img/2.enemies/3.final-boss/1.spawning/1.png',
        'img/2.enemies/3.final-boss/1.spawning/2.png',
        'img/2.enemies/3.final-boss/1.spawning/3.png',
        'img/2.enemies/3.final-boss/1.spawning/4.png',
        'img/2.enemies/3.final-boss/1.spawning/5.png',
        'img/2.enemies/3.final-boss/1.spawning/6.png',
        'img/2.enemies/3.final-boss/1.spawning/7.png',
        'img/2.enemies/3.final-boss/1.spawning/8.png',
        'img/2.enemies/3.final-boss/1.spawning/9.png',
        'img/2.enemies/3.final-boss/1.spawning/10.png',
        'img/2.enemies/3.final-boss/3.attack/1.png',
        'img/2.enemies/3.final-boss/3.attack/2.png',
        'img/2.enemies/3.final-boss/3.attack/3.png',
        'img/2.enemies/3.final-boss/3.attack/4.png',
        'img/2.enemies/3.final-boss/3.attack/5.png',
        'img/2.enemies/3.final-boss/3.attack/6.png',
        `img/2.enemies/2.jelly-fish/regular-damage/swim/purple/1.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/purple/2.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/purple/3.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/purple/4.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/yellow/1.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/yellow/2.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/yellow/3.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/swim/yellow/4.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/purple/1.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/purple/2.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/purple/3.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/purple/4.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/yellow/1.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/yellow/2.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/yellow/3.png`,
        `img/2.enemies/2.jelly-fish/regular-damage/dead/yellow/4.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/green/1.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/green/2.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/green/3.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/green/4.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/pink/1.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/pink/2.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/pink/3.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/swim/pink/4.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/green/1.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/green/2.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/green/3.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/green/4.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/pink/1.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/pink/2.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/pink/3.png`,
        `img/2.enemies/2.jelly-fish/super-dangerous/dead/pink/4.png`,
        'img/4.score/3.poison/animated/1.png',
        'img/4.score/3.poison/animated/2.png',
        'img/4.score/3.poison/animated/3.png',
        'img/4.score/3.poison/animated/4.png',
        'img/4.score/3.poison/animated/5.png',
        'img/4.score/3.poison/animated/6.png',
        'img/4.score/3.poison/animated/7.png',
        'img/4.score/3.poison/animated/8.png',
        `img/2.enemies/1.puffer-fish/1.swim/1.swim1.png`,
        `img/2.enemies/1.puffer-fish/1.swim/1.swim2.png`,
        `img/2.enemies/1.puffer-fish/1.swim/1.swim3.png`,
        `img/2.enemies/1.puffer-fish/1.swim/1.swim4.png`,
        `img/2.enemies/1.puffer-fish/1.swim/1.swim5.png`,
        `img/2.enemies/1.puffer-fish/1.swim/2.swim1.png`,
        `img/2.enemies/1.puffer-fish/1.swim/2.swim2.png`,
        `img/2.enemies/1.puffer-fish/1.swim/2.swim3.png`,
        `img/2.enemies/1.puffer-fish/1.swim/2.swim4.png`,
        `img/2.enemies/1.puffer-fish/1.swim/2.swim5.png`,
        `img/2.enemies/1.puffer-fish/1.swim/3.swim1.png`,
        `img/2.enemies/1.puffer-fish/1.swim/3.swim2.png`,
        `img/2.enemies/1.puffer-fish/1.swim/3.swim3.png`,
        `img/2.enemies/1.puffer-fish/1.swim/3.swim4.png`,
        `img/2.enemies/1.puffer-fish/1.swim/3.swim5.png`,
        `img/2.enemies/1.puffer-fish/2.transition/1.transition1.png`,
        `img/2.enemies/1.puffer-fish/2.transition/1.transition2.png`,
        `img/2.enemies/1.puffer-fish/2.transition/1.transition3.png`,
        `img/2.enemies/1.puffer-fish/2.transition/1.transition4.png`,
        `img/2.enemies/1.puffer-fish/2.transition/1.transition5.png`,
        `img/2.enemies/1.puffer-fish/2.transition/2.transition1.png`,
        `img/2.enemies/1.puffer-fish/2.transition/2.transition2.png`,
        `img/2.enemies/1.puffer-fish/2.transition/2.transition3.png`,
        `img/2.enemies/1.puffer-fish/2.transition/2.transition4.png`,
        `img/2.enemies/1.puffer-fish/2.transition/2.transition5.png`,
        `img/2.enemies/1.puffer-fish/2.transition/3.transition1.png`,
        `img/2.enemies/1.puffer-fish/2.transition/3.transition2.png`,
        `img/2.enemies/1.puffer-fish/2.transition/3.transition3.png`,
        `img/2.enemies/1.puffer-fish/2.transition/3.transition4.png`,
        `img/2.enemies/1.puffer-fish/2.transition/3.transition5.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim2.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim3.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim4.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim1.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/1.bubbleswim5.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim2.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim3.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim4.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim1.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/2.bubbleswim5.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim2.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim3.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim4.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim1.png`,
        `img/2.enemies/1.puffer-fish/3.bubbleswim/3.bubbleswim5.png`,
        `img/2.enemies/1.puffer-fish/4.dead/1.png`,
        `img/2.enemies/1.puffer-fish/4.dead/2.png`,
        `img/2.enemies/1.puffer-fish/4.dead/3.png`,
        'img/4.score/2.elements/coin.png',
        'img/4.score/2.elements/heart.png',
        'img/4.score/2.elements/poison.png',
        'img/3.background/layers/5.water/d2.png',
        'img/3.background/layers/4.layer2/d2.png',
        'img/3.background/layers/3.layer1/d2.png',
        'img/3.background/layers/2.floor/d2.png',
        'img/3.background/layers/5.water/d1.png',
        'img/3.background/layers/4.layer2/d1.png',
        'img/3.background/layers/3.layer1/d1.png',
        'img/3.background/layers/2.floor/d1.png',
        'img/3.background/layers/1.light/1.png',
        'img/3.background/layers/1.light/2.png'
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

    updateProgress() {
        progress++;
        this.loadPercentage = Math.round(progress / this.assetLength * 100) || 0;
        let progressBar = document.getElementById('progress-bar');
        if (progressBar.value != null) {
            progressBar.value = this.loadPercentage;
        }
    }

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

    async loadAssets() {
        try {
            await Promise.all([this.loadImages(), this.loadAudio()]);
        } catch {
            console.error('Assets could not be loaded.');
        } finally {
            setTimeout(() => {
                let loadingScreen = document.getElementById('loading-screen');
                loadingScreen.style.display = 'none';
            }, 1000);
        }
    }
}