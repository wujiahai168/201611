(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/09_singleton/SingletonCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fcfefvjPgdGEKnfOwuoIVJD', 'SingletonCtrl', __filename);
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
        //# sourceMappingURL=SingletonCtrl.js.map
        