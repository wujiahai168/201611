(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/01_graphics/01_sprite/FilledSprite/FilledSpriteControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '50a95ObLqFH2rz6eShvGuNK', 'FilledSpriteControl', __filename);
// cases/01_graphics/01_sprite/FilledSprite/FilledSpriteControl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        speed: 0.1,

        horizontal: {
            default: null,
            type: cc.Sprite
        },

        vertical: {
            default: null,
            type: cc.Sprite
        },

        radial_round: {
            default: null,
            type: cc.Sprite
        },

        radial_semicircle: {
            default: null,
            type: cc.Sprite
        }
    },

    update: function update(dt) {
        // update fill start
        this._updataFillStart(this.horizontal, dt);
        this._updataFillStart(this.vertical, dt);
        // update fill range
        this._updateFillRange(this.radial_round, 1, dt);
        this._updateFillRange(this.radial_semicircle, 0.5, dt);
    },

    _updataFillStart: function _updataFillStart(sprite, dt) {
        var fillStart = sprite.fillStart;
        fillStart = fillStart > 0 ? fillStart -= dt * this.speed : 1;
        sprite.fillStart = fillStart;
    },

    _updateFillRange: function _updateFillRange(sprite, range, dt) {
        var fillRange = sprite.fillRange;
        fillRange = fillRange < range ? fillRange += dt * this.speed : 0;
        sprite.fillRange = fillRange;
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
        //# sourceMappingURL=FilledSpriteControl.js.map
        