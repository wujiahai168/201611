(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/15_mask/Mask/MaskCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c324aDRcOtM1oTGYSemsKTY', 'MaskCtrl', __filename);
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
        //# sourceMappingURL=MaskCtrl.js.map
        