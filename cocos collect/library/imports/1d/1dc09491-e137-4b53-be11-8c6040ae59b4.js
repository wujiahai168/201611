"use strict";
cc._RF.push(module, '1dc09SR4TdLU74RjGBArlm0', 'AnimationEvent');
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