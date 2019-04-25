(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/collider/Shooter/Bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '20d7dzfVhZNh4gNZzwaQgEl', 'Bullet', __filename);
// cases/collider/Shooter/Bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.y += this.speed * dt;
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
        //# sourceMappingURL=Bullet.js.map
        