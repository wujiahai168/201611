(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/01_graphics/01_sprite/AR.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9e054epu19CIakfnS4cZU3+', 'AR', __filename);
// cases/01_graphics/01_sprite/AR.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        posAR: cc.Label,
        pos: cc.Label,
        goldAR: cc.Node,
        gold: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var sheep = this.goldAR.parent;
        var posAR = sheep.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
        this.posAR.string = '(' + parseInt(posAR.x) + ', ' + parseInt(posAR.y) + ')';

        sheep = this.goldAR.parent;
        var pos = sheep.convertToWorldSpace(cc.v2(this.gold.x, this.gold.y));
        this.pos.string = '(' + parseInt(pos.x) + ', ' + parseInt(pos.y) + ')';
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
        //# sourceMappingURL=AR.js.map
        