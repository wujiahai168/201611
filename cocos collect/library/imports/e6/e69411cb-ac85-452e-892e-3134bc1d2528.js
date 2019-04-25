"use strict";
cc._RF.push(module, 'e6941HLrIVFLokuMTS8HSUo', 'TiledSpriteControl');
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