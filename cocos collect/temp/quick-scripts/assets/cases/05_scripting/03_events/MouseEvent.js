(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/MouseEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6df0ft1jy5Jg4cQ039jt8jC', 'MouseEvent', __filename);
// cases/05_scripting/03_events/MouseEvent.js

"use strict";

cc.Class({
    extends: cc.Component,

    move: function move(event) {
        this.node.x += event.getDeltaX();
        this.node.y += event.getDeltaY();
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.scroll = 0;
        this.node.opacity = 50;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            this.node.opacity = 255;
            this.node.on(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function () {
            this.node.opacity = 160;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            this.node.opacity = 50;
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function () {
            this.node.opacity = 50;
            this.node.off(cc.Node.EventType.MOUSE_MOVE, this.move, this);
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, function (event) {
            this.scroll += event.getScrollY();
            var h = this.node.height;
            this.scroll = cc.misc.clampf(this.scroll, -2 * h, 0.7 * h);
            this.node.scale = 1 - this.scroll / h;
        }, this);
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
        //# sourceMappingURL=MouseEvent.js.map
        