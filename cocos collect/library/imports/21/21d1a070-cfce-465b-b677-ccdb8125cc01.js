"use strict";
cc._RF.push(module, '21d1aBwz85GW7Z3zNuBJcwB', 'AudioSourceControl');
// cases/04_audio/AudioSourceControl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },

        label: {
            type: cc.Label,
            default: null
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // cc.audioEngine.setMaxWebAudioSize(1024*10);
    },

    update: function update() {
        if (!this.label) {
            return;
        }
        var audio = this.audioSource;
        this.label.string = audio.getCurrentTime().toFixed(1) + ' s / ' + audio.getDuration().toFixed(1) + ' s';
    },

    play: function play() {
        this.audioSource.play();
    },

    pause: function pause() {
        this.audioSource.pause();
    },

    stop: function stop() {
        this.audioSource.stop();
    },

    resume: function resume() {
        this.audioSource.resume();
    }
});

cc._RF.pop();