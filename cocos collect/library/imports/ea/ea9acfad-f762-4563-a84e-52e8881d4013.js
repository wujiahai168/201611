"use strict";
cc._RF.push(module, 'ea9ac+t92JFY6hOUuiIHUAT', 'PoolHandler');
// cases/05_scripting/12_pool/PoolHandler.js

'use strict';

var lastClick = 0;

function pauseresume() {
    var now = Date.now();
    // Double click in 300 ms
    if (now - lastClick < 300) {
        this.stopAllActions();
        var pool = this.getComponent('PoolHandler')._pool;
        if (pool) {
            pool.put(this);
        } else {
            this.removeFromParent(true);
        }
    }
    // Click
    else {
            if (this.paused) {
                cc.director.getActionManager().resumeTarget(this);
            } else {
                cc.director.getActionManager().pauseTarget(this);
            }
            this.paused = !this.paused;
        }
    lastClick = now;
}

cc.Class({
    extends: cc.Component,

    properties: {
        _pool: null
    },

    onLoad: function onLoad() {
        this.reuse();
    },

    unuse: function unuse() {
        this.node.off(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
    },

    reuse: function reuse() {
        this.node.paused = false;
        this.node.on(cc.Node.EventType.TOUCH_END, pauseresume, this.node);
    }
});

cc._RF.pop();