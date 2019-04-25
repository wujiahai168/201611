(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Hittest/Hittest.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '49ade5wuu9ILKDuwPmdIALx', 'Hittest', __filename);
// cases/collider/Hittest/Hittest.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        collider: {
            default: null,
            type: cc.PolygonCollider
        },

        title: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        this.title.string = 'normal';

        this.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
            var touchLoc = touch.getLocation();

            if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
                this.title.string = 'Hit';
            } else {
                this.title.string = 'Not hit';
            }
        }, this);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        this.node.off(cc.Node.EventType.TOUCH_START);
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
        //# sourceMappingURL=Hittest.js.map
        