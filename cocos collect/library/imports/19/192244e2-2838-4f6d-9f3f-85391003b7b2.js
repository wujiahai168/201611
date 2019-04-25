"use strict";
cc._RF.push(module, '19224TiKDhPbZ8/hTkQA7ey', 'ShowSubMenu');
// main menu/ShowSubMenu.js

'use strict';

cc.Class({
    extends: cc.Component,

    toggle: function toggle() {
        var shown = this.node.y < 0;
        var animation = this.getComponent(cc.Animation);
        animation.play(shown ? 'hide menu' : 'show menu');
    }
});

cc._RF.pop();