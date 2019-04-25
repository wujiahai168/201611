(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Category/ColliderListener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9d60fXxtXFNeI79PM6EXYuZ', 'ColliderListener', __filename);
// cases/collider/Category/ColliderListener.js

"use strict";

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        this.touchingNumber = 0;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
    },

    onCollisionStay: function onCollisionStay(other) {
        // console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
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
        //# sourceMappingURL=ColliderListener.js.map
        