(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Shooter/Shooter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '092a3wYF7pBULdP9SLwGUBQ', 'Shooter', __filename);
// cases/collider/Shooter/Shooter.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        bullet: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    },

    onTouchBegan: function onTouchBegan(event) {
        var scene = cc.director.getScene();
        var touchLoc = event.touch.getLocation();
        var bullet = cc.instantiate(this.bullet);
        bullet.position = touchLoc;
        bullet.active = true;
        scene.addChild(bullet);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
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
        //# sourceMappingURL=Shooter.js.map
        