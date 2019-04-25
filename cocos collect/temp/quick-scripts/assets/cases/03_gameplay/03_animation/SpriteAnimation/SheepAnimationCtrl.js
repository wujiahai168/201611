(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ae6fcR8cuFGRYHW525VJD/k', 'SheepAnimationCtrl', __filename);
// cases/03_gameplay/03_animation/SpriteAnimation/SheepAnimationCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        sheepAnim: {
            default: null,
            type: cc.Animation
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var anim = this.sheepAnim;
        this._playAnimCallback = function () {
            anim.play('sheep_jump');
        };
        this.scheduleOnce(this._playAnimCallback, 2);
    },

    // called every frame
    update: function update(dt) {}
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
        //# sourceMappingURL=SheepAnimationCtrl.js.map
        