let isAudioEnabled = false;

/**
 * This function mutes the audio when the mute button is clicked.
 * @param {Event} event - Button click event
 */
function onMuteButtonClick(event) {
    if (isAudioEnabled) {
        let muteButtonImage = document.getElementById('mute-button-image');
        if (event.pointerType !== '') {
            if (!muted) {
                muteOrUnmuteAllAudio(true);
                muteButtonImage.src = 'img/6.icons/no_sound_24dp_FILL1_wght400_GRAD0_opsz24.svg';
            } else {
                muteOrUnmuteAllAudio(false);
                muteButtonImage.src = 'img/6.icons/volume_up_24dp_FILL1_wght400_GRAD0_opsz24.svg';
            }
        }
    }
}

/**
 * This function resumes the ambience sound.
 */
function resumeAmbienceSound() {
    if (isAudioEnabled) {
        world.AUDIO_AMBIENCE.play();
        world.AUDIO_AMBIENCE.loop = true;
    }
}

/**
 * This function mutes the character sounds.
 */
function muteCharacterAudio(bool) {
    if (isAudioEnabled) {
        world.character.AUDIO_SWIM.muted = bool;
        world.character.AUDIO_BUBBLE_TRAP.muted = bool;
        world.character.AUDIO_FIN_SLAP.muted = bool;
        world.character.AUDIO_HURT.muted = bool;
        world.character.AUDIO_ELECTRIC_SHOCK.muted = bool;
        world.character.AUDIO_SNORING.muted = bool;
        world.character.AUDIO_YAWN.muted = bool;
    }
}

/**
 * This function mutes the world sounds.
 */
function muteWorldAudio(bool) {
    if (isAudioEnabled) {
        world.AUDIO_AMBIENCE.muted = bool;
        world.AUDIO_ENEMY_HURT.muted = bool;
    }
}

/**
 * This function mutes the sounds of the final boss.
 */
function muteFinalBossAudio(bool) {
    if (isAudioEnabled) {
        let finalBoss = world.enemies[world.enemies.length - 1];
        finalBoss.AUDIO_SPLASH.muted = bool;
        finalBoss.AUDIO_HURT.muted = bool;
        finalBoss.AUDIO_BOSS_FIGHT.muted = bool;
        finalBoss.AUDIO_BITE.muted = bool;
    }
}

/**
 * This function mutes or unmutes a specific set of sounds.
 * @param {boolean} bool - Whether audio should be muted or not.
 */
function muteOrUnmuteGameAudio(bool) {
    if (isAudioEnabled) {
        muteCharacterAudio(bool);
        muteWorldAudio(bool);
        muteFinalBossAudio(bool);
    }
}

/**
 * This function mutes or unmutes all audio.
 * @param {boolean} bool - Whether audio should be muted or not.
 */
function muteOrUnmuteAllAudio(bool) {
    if (isAudioEnabled) {
        muted = bool;
        muteOrUnmuteGameAudio(bool);
        world.AUDIO_YAY.muted = bool;
        world.AUDIO_POP.muted = bool;
        world.AUDIO_GAME_OVER.muted = bool;
    }
}

/**
 * This functions mutes the boss fight music.
 */
function muteFinalBossSound() {
    if (isAudioEnabled) {
        let finalBoss = world.enemies[world.enemies.length - 1];
        finalBoss.AUDIO_BOSS_FIGHT.pause();
    }
}

/**
 * This function plays the corresponding sounds when the player wins.
 */
function playWinSounds() {
    if (isAudioEnabled) {
        world.AUDIO_YAY.play();
        world.AUDIO_POP.play();
    }
}