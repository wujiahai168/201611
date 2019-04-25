"use strict";
cc._RF.push(module, 'a9c63c/3U5Gv7w0rm3g5wvj', 'loadDragonBonesCtrl');
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