(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0c450SopmNKmbcQu50ror3a', 'CreateClipCtrl', __filename);
// cases/03_gameplay/03_animation/CreateClip/CreateClipCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var animation = this.getComponent(cc.Animation);

        cc.loader.loadRes("test_assets/atlas", cc.SpriteAtlas, function (err, atlas) {
            var spriteFrames = atlas.getSpriteFrames();

            var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 10);
            clip.name = 'run';
            clip.wrapMode = cc.WrapMode.Loop;

            animation.addClip(clip);
            animation.play('run');
        });
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
        //# sourceMappingURL=CreateClipCtrl.js.map
        