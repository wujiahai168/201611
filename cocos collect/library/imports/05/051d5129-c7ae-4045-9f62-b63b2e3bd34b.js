"use strict";
cc._RF.push(module, '051d5Epx65ARZ9itjsuO9NL', 'SliderCtrl');
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