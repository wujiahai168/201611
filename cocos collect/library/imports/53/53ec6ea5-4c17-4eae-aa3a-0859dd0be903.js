"use strict";
cc._RF.push(module, '53ec66lTBdOrqo6CFndC+kD', 'ChangeColor');
// cases/01_graphics/01_sprite/ChangeColor.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        test: {
            default: null,
            type: cc.Node
        }
    },

    ctor: function ctor() {
        this._colorChanged = false;
    },
    changeColor: function changeColor() {
        this.node.color = this._colorChanged ? cc.Color.WHITE : cc.Color.RED;
        this._colorChanged = !this._colorChanged;
    }
});

cc._RF.pop();