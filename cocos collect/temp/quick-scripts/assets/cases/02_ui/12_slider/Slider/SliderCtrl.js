(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/12_slider/Slider/SliderCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '051d5Epx65ARZ9itjsuO9NL', 'SliderCtrl', __filename);
// cases/02_ui/12_slider/Slider/SliderCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        image: cc.Node,
        music: cc.AudioSource,
        slider_h: cc.Slider,
        slider_v: cc.Slider
    },

    onLoad: function onLoad() {
        this.slider_v.progress = 0.5;
        this.slider_h.progress = 0.5;
        this._updateImageOpacity(this.slider_v.progress);
        this._updateMusicVolume(this.slider_h.progress);
    },
    _updateImageOpacity: function _updateImageOpacity(progress) {
        this.image.opacity = progress * 255;
    },
    _updateMusicVolume: function _updateMusicVolume(progress) {
        this.music.volume = progress;
    },
    onSliderVEvent: function onSliderVEvent(sender, eventType) {
        this._updateImageOpacity(sender.progress);
    },
    onSliderHEvent: function onSliderHEvent(sender, eventType) {
        this._updateMusicVolume(sender.progress);
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
        //# sourceMappingURL=SliderCtrl.js.map
        