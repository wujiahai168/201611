"use strict";
cc._RF.push(module, 'c07302m/oFJeIq2igPCJbWE', 'DestroySelf');
// cases/05_scripting/06_life_cycle/DestroySelf.js

"use strict";

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        console.log("Pos: " + this.node.getPosition().x + ", " + this.node.getPosition().y);
        this.node.runAction(cc.sequence(cc.moveBy(2, 200, 0), cc.callFunc(function () {
            console.log("Pos: " + this.node.x + ", " + this.node.y);
            this.node.destroy();
        }, this)));
    }
});

cc._RF.pop();