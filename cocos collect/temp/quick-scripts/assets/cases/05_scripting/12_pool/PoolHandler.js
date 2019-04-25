(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/12_pool/PoolHandler.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea9ac+t92JFY6hOUuiIHUAT', 'PoolHandler', __filename);
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
        //# sourceMappingURL=PoolHandler.js.map
        