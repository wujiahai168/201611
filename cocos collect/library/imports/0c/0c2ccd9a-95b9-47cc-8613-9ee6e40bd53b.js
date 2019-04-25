"use strict";
cc._RF.push(module, '0c2cc2alblHzIYTnubkC9U7', 'downloader-audio');
// cases/05_scripting/11_network/downloader-web/downloader-audio.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        remindLabel: {
            default: null,
            type: cc.Label
        },
        inputUrlBox: {
            default: null,
            type: cc.EditBox
        },
        _audioPlayer: null,
        _audioUrl: 'http://tools.itharbors.com/christmas/res/sounds/ss.mp3'
    },

    onLoad: function onLoad() {
        this.remindLabel.textKey = '';
        this._audioPlayer = this.node.getComponent('AudioCtrl');
    },
    startLoad: function startLoad() {
        // set url
        this._audioUrl = this.inputUrlBox.string;
        // download audio
        if (this._audioUrl) {
            cc.loader.load({ url: this._audioUrl, type: 'mp3' }, this.onProgress.bind(this), this.audioLoadComplete.bind(this));
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.2');
        } else {
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.10');
        }
    },
    audioLoadComplete: function audioLoadComplete(err, res) {
        if (err || !res) {
            console.log(err);
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.5.1');
            return;
        }
        this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.4.1');
        // return back a AudioClip
        this._audioPlayer.setAudioTask(res);
    },
    onProgress: function onProgress(completedCount, totalCount) {
        this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.3') + ' ' + completedCount / totalCount * 100;
    },
    update: function update() {
        this._audioPlayer.currentTime();
    },
    onDisable: function onDisable() {
        this._audioPlayer.stopAllAudio();
    }
});

cc._RF.pop();