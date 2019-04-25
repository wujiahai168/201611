(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1dc09SR4TdLU74RjGBArlm0', 'AnimationEvent', __filename);
// cases/03_gameplay/03_animation/AnimationEvent/AnimationEvent.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        var node = cc.find('Canvas/Label');
        this._label = node.getComponent(cc.Label);
        this._animCtrl = this.node.getComponent(cc.Animation);
    },

    onNextAnimation: function onNextAnimation(step) {
        this._animCtrl.play("step_" + step);
        this._label.string = i18n.t("cases/03_gameplay/03_animation/AnimationEvent.js.1") + step + "个动画";
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
        //# sourceMappingURL=AnimationEvent.js.map
        