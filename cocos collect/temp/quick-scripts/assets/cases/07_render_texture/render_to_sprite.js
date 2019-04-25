(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/07_render_texture/render_to_sprite.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '67ec9/MsdtPTI6ozOcKQcAR', 'render_to_sprite', __filename);
// cases/07_render_texture/render_to_sprite.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: {
            default: null,
            type: cc.Sprite
        },

        camera: {
            default: null,
            type: cc.Camera
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var texture = new cc.RenderTexture();
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height);

        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.sprite.spriteFrame = spriteFrame;

        this.camera.targetTexture = texture;

        this.renderTexture = texture;
    },


    // update (dt) {},

    saveImage: function saveImage() {
        if (CC_JSB) {

            var data = this.renderTexture.readPixels();
            var width = this.renderTexture.width;
            var height = this.renderTexture.height;
            var filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';

            var success = jsb.saveImageData(data, width, height, filePath);
            if (success) {
                cc.log("save image data success, file: " + filePath);
            } else {
                cc.error("save image data failed!");
            }
        } else {
            cc.log("saveImage, only supported on native platform.");
        }
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
        //# sourceMappingURL=render_to_sprite.js.map
        