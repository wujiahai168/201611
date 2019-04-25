"use strict";
cc._RF.push(module, '8ae30fCf3BOT5yZGmirBXJi', 'TipsCtrl');
// scripts/Tips/TipsCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        content: require('LabelLocalized')
    },

    // onLoad () {},
    onDestroySelf: function onDestroySelf() {
        this.node.destroy();
    },
    setContent: function setContent(str) {
        if (str) {
            this.content.textKey = str;
        }
    }
});

cc._RF.pop();