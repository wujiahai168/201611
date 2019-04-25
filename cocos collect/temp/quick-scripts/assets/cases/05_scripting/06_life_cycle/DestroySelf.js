(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/06_life_cycle/DestroySelf.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c07302m/oFJeIq2igPCJbWE', 'DestroySelf', __filename);
// cases/05_scripting/06_life_cycle/DestroySelf.js

"use strict";

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
        this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
            console.log("Pos: " + this.node.x + ", " + this.node.y);
            this.node.destroy();
        }, this)));
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
        //# sourceMappingURL=DestroySelf.js.map
        