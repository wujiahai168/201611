(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a9c63c/3U5Gv7w0rm3g5wvj', 'loadDragonBonesCtrl', __filename);
// cases/dragonbones/loadDragonBones/loadDragonBonesCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        dragonBone: {
            default: null,
            type: dragonBones.ArmatureDisplay
        }
    },

    dynamicCreate: function dynamicCreate() {
        var _this = this;

        cc.loader.loadRes('dragonBones/NewDragonTest', dragonBones.DragonBonesAsset, function (err, res) {
            if (err) cc.error(err);
            _this.dragonBone.dragonAsset = res;
            cc.loader.loadRes('dragonBones/texture', dragonBones.DragonBonesAtlasAsset, _this.onComplete.bind(_this));
        });
    },
    onComplete: function onComplete(err, res) {
        if (err) cc.error(err);
        this.dragonBone.dragonAtlasAsset = res;
        this.dragonBone.armatureName = 'armatureName';
        this.dragonBone.playAnimation('stand', 0);
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
        //# sourceMappingURL=loadDragonBonesCtrl.js.map
        