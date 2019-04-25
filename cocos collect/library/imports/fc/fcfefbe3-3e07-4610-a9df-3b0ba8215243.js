"use strict";
cc._RF.push(module, 'fcfefvjPgdGEKnfOwuoIVJD', 'SingletonCtrl');
// cases/05_scripting/09_singleton/SingletonCtrl.js

"use strict";

var Singleton = require("Singleton");

cc.Class({
    extends: cc.Component,

    properties: {},

    start: function start() {
        var node = new cc.Node("Monster");
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = Singleton.instance.monsterIcon;
        node.parent = this.node;
    }
});

cc._RF.pop();