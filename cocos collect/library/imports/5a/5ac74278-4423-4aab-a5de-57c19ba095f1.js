"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'render_to_canvas');
// cases/07_render_texture/render_to_canvas.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        camera: {
            default: null,
            type: cc.Camera
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var texture = new cc.RenderTexture();
        var gl = cc.game._renderContext;
        texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.texture = texture;
    },
    capture: function capture() {
        var width = this.texture.width;
        var height = this.texture.height;

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        this.camera.render();
        var data = this.texture.readPixels();

        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var imageData = ctx.createImageData(width, 1);
            var start = srow * width * 4;
            for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }

            ctx.putImageData(imageData, 0, row);
        }

        var dataURL = canvas.toDataURL("image/jpeg");
        var img = document.createElement("img");
        img.src = dataURL;
        return img;
    },
    captureAndShow: function captureAndShow() {
        var img = this.capture();

        // You can save the image or show it.

        // img.style.position = 'absolute';
        // img.style.display = 'block';
        // img.style.left = '0px'
        // img.style.top = '0px';
        // img.zIndex = 100;

        // img.style.transform = cc.game.container.style.transform;
        // img.style['transform-origin'] = cc.game.container.style['transform-origin'];
        // img.style.margin = cc.game.container.style.margin;
        // img.style.padding = cc.game.container.style.padding;

        // img.onclick = function (event) {
        //     event.stopPropagation();
        //     img.remove();
        // }

        // document.body.appendChild(img);

        var texture = new cc.Texture2D();
        texture.initWithElement(img);

        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);

        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;

        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        node.x = cc.winSize.width / 2;
        node.y = cc.winSize.height / 2;
        node.on(cc.Node.EventType.TOUCH_START, function () {
            node.parent = null;
        });
    }

    // update (dt) {},

});

cc._RF.pop();