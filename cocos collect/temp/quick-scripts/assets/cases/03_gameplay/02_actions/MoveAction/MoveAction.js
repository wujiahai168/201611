(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/MoveAction/MoveAction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ddd4eaLxVZFlZbzaPaqdL9D', 'MoveAction', __filename);
// cases/03_gameplay/02_actions/MoveAction/MoveAction.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        moveTo: cc.Node,
        moveBy: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var moveTo = cc.moveTo(0.5, cc.v2(0, 0));
        var moveBy = cc.moveBy(0.5, cc.v2(100, 100));
        this.moveTo.runAction(moveTo);
        this.moveBy.runAction(moveBy);
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
        //# sourceMappingURL=MoveAction.js.map
        