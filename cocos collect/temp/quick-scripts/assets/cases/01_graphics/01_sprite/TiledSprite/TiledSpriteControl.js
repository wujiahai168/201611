(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/01_graphics/01_sprite/TiledSprite/TiledSpriteControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e6941HLrIVFLokuMTS8HSUo', 'TiledSpriteControl', __filename);
// cases/01_graphics/01_sprite/TiledSprite/TiledSpriteControl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        speed: 100,

        progressBar: {
            default: null,
            type: cc.Node
        },

        ground: {
            default: null,
            type: cc.Node
        }
    },

    update: function update(dt) {
        this._updateWdith(this.progressBar, 500, dt);
        this._updateWdith(this.ground, 1000, dt);
    },

    _updateWdith: function _updateWdith(node, range, dt) {
        var width = node.width;
        width = width < range ? width += dt * this.speed : 0;
        node.width = width;
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
        //# sourceMappingURL=TiledSpriteControl.js.map
        