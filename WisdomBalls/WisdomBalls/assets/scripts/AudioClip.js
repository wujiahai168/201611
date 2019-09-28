cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic: cc.AudioClip,
        select: cc.AudioClip,
        lose: cc.AudioClip,
        clear: cc.AudioClip,
        warm: cc.AudioClip,
        move: cc.AudioClip,
        gameOver: cc.AudioClip,
        mute: false
    },

    onLoad () {
        console.log('AudioClip onload');
    },

    playBgMusic () {
        if (!this.mute && this.bgMusicChannel === undefined) {
            this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.5);
        }
    },

    onDestroy () {

    },

    switchMute () {
        this.mute = !this.mute;
        if (this.mute) {
            this.stopBgMusic();
        } else {
            this.playBgMusic();
        }
    },

    stopBgMusic () {
        if (this.bgMusicChannel !== undefined) {
            cc.audioEngine.stop(this.bgMusicChannel);
            this.bgMusicChannel = undefined;
        }
    },

    playSound (sound, vol) {
        if (!this.mute) {
            cc.audioEngine.play(this[sound], false, vol || 1);
        }
    }
});
