"use strict";
cc._RF.push(module, '9e054epu19CIakfnS4cZU3+', 'AR');
// cases/01_graphics/01_sprite/AR.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        posAR: cc.Label,
        pos: cc.Label,
        goldAR: cc.Node,
        gold: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var sheep = this.goldAR.parent;
        var posAR = sheep.convertToWorldSpaceAR(cc.v2(this.goldAR.x, this.goldAR.y));
        this.posAR.string = '(' + parseInt(posAR.x) + ', ' + parseInt(posAR.y) + ')';

        sheep = this.goldAR.parent;
        var pos = sheep.convertToWorldSpace(cc.v2(this.gold.x, this.gold.y));
        this.pos.string = '(' + parseInt(pos.x) + ', ' + parseInt(pos.y) + ')';
    }
});

cc._RF.pop();