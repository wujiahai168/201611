(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/04_audio/AudioSourceControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '21d1aBwz85GW7Z3zNuBJcwB', 'AudioSourceControl', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=AudioSourceControl.js.map
        