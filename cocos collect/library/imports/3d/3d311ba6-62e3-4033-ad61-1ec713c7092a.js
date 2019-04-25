"use strict";
cc._RF.push(module, '3d311umYuNAM61hHscTxwkq', 'AnimationCallback');
// cases/03_gameplay/03_animation/AnimationCallback.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        playLabel: {
            default: null,
            type: cc.Label
        },

        pauseLabel: {
            default: null,
            type: cc.Label
        },

        stateLabel: {
            default: null,
            type: cc.Label
        },

        animation: {
            default: null,
            type: cc.Animation
        }
    },

    onEnable: function onEnable() {
        var animation = this.animation;

        animation.on('play', this.onPlay, this);
        animation.on('stop', this.onStop, this);
        animation.on('lastframe', this.onLastFrame, this);
        animation.on('finished', this.onFinished, this);
        animation.on('pause', this.onPause, this);
        animation.on('resume', this.onResume, this);
    },

    onDisable: function onDisable() {
        var animation = this.animation;

        animation.off('play', this.onPlay, this);
        animation.off('stop', this.onStop, this);
        animation.off('lastframe', this.onLastFrame, this);
        animation.off('finished', this.onFinished, this);
        animation.off('pause', this.onPause, this);
        animation.off('resume', this.onResume, this);
    },

    onPlayButtonClicked: function onPlayButtonClicked() {
        if (this.playLabel.string === 'play') {
            this.playLabel.string = 'stop';
            this.animation.play('linear');
        } else {
            this.playLabel.string = 'play';
            this.animation.stop('linear');
        }
    },

    onPauseButtonClicked: function onPauseButtonClicked() {
        if (this.pauseLabel.string === 'pause') {
            this.pauseLabel.string = 'resume';
            this.animation.pause('linear');
        } else {
            this.pauseLabel.string = 'pause';
            this.animation.resume('linear');
        }
    },

    onPlay: function onPlay() {
        cc.log('onPlay');
        this.stateLabel.string = 'onPlay';
    },

    onStop: function onStop() {
        cc.log('onStop');
        this.stateLabel.string = 'onStop';
        this.playLabel.string = 'play';
    },

    onLastFrame: function onLastFrame() {
        cc.log('onLastFrame');
        this.stateLabel.string = 'onLastFrame';
    },

    onFinished: function onFinished() {
        cc.log('onFinished');
        this.stateLabel.string = 'onFinished';
    },

    onPause: function onPause() {
        cc.log('onPause');
        this.stateLabel.string = 'onPause';
    },

    onResume: function onResume() {
        cc.log('onResume');
        this.stateLabel.string = 'onResume';
    }
});

cc._RF.pop();