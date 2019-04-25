"use strict";
cc._RF.push(module, 'c324aDRcOtM1oTGYSemsKTY', 'MaskCtrl');
// cases/02_ui/15_mask/Mask/MaskCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        mask: cc.Mask,
        slider: cc.Slider,
        label: cc.Label
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.slider.progress = this.mask.alphaThreshold;
    },

    update: function update(dt) {
        if (cc.game.renderType !== cc.game.RENDER_TYPE_WEBGL && !CC_JSB) {
            return;
        }
        this.mask.alphaThreshold = this.slider.progress;
        this.label.string = this.slider.progress.toFixed(1);
    }
});

cc._RF.pop();