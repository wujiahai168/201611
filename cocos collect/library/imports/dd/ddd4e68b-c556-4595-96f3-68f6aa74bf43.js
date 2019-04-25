"use strict";
cc._RF.push(module, 'ddd4eaLxVZFlZbzaPaqdL9D', 'MoveAction');
// cases/03_gameplay/02_actions/MoveAction/MoveAction.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        moveTo: cc.Node,
        moveBy: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {
        var moveTo = cc.moveTo(0.5, cc.v2(0, 0));
        var moveBy = cc.moveBy(0.5, cc.v2(100, 100));
        this.moveTo.runAction(moveTo);
        this.moveBy.runAction(moveBy);
    }
});

cc._RF.pop();