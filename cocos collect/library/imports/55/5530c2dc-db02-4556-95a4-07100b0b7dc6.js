"use strict";
cc._RF.push(module, '5530cLc2wJFVpWkBxALC33G', 'RuntimeLabel');
// cases/graphics/RuntimeLabel.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        var isRuntime = typeof runtime !== 'undefined';
        if (!isRuntime) {
            this.node.active = false;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();