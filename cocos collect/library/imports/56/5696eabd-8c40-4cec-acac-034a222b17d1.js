"use strict";
cc._RF.push(module, '5696eq9jEBM7KysA0oiKxfR', 'AudioCtrl');
// scripts/ComponentUtils/AudioCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: {
            default: null,
            type: cc.Label
        },
        _audioTask: null,
        _audioID: null
    },

    setAudioTask: function setAudioTask(audio) {
        this._audioTask = audio;
    },
    playAudio: function playAudio() {
        // return current audio object
        this._audioID = cc.audioEngine.play(this._audioTask, false);
    },
    stopAudio: function stopAudio() {
        cc.audioEngine.stop(this._audioID);
    },
    pauseAudio: function pauseAudio() {
        cc.audioEngine.pause(this._audioID);
    },
    resumeAudio: function resumeAudio() {
        cc.audioEngine.resume(this._audioID);
    },
    stopAllAudio: function stopAllAudio() {
        cc.audioEngine.stopAll();
    },
    pauseAllAudio: function pauseAllAudio() {
        cc.audioEngine.pauseAll();
    },
    resumeAllAudio: function resumeAllAudio() {
        cc.audioEngine.resumeAll();
    },
    currentTime: function currentTime() {
        if (!this._audioTask || this._audioID === null) {
            return;
        }
        var currentTime = cc.audioEngine.getCurrentTime(this._audioID).toFixed(1);
        var durationTime = cc.audioEngine.getDuration(this._audioID).toFixed(1);
        this.timeLabel.string = currentTime + " s / " + durationTime + " s";
    }
});

cc._RF.pop();