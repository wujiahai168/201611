(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Utils/SimpleMotion.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fde33rWt81MvZWO7QQ3jv3j', 'SimpleMotion', __filename);
// cases/collider/Utils/SimpleMotion.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 100,
        rotationSpeed: 90
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.x += dt * this.moveSpeed;
        this.node.rotation += dt * this.rotationSpeed;
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
        //# sourceMappingURL=SimpleMotion.js.map
        