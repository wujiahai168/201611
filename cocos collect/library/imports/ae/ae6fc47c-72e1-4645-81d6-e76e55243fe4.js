"use strict";
cc._RF.push(module, 'ae6fcR8cuFGRYHW525VJD/k', 'SheepAnimationCtrl');
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