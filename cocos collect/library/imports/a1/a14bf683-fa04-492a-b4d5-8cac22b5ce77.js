"use strict";
cc._RF.push(module, 'a14bfaD+gRJKrTVjKwitc53', 'TouchEvent');
// cases/05_scripting/03_events/TouchEvent.js

"use strict";

cc.Class({
    extends: cc.Component,

    _callback: null,

    // use this for initialization
    onLoad: function onLoad() {
        this.node.opacity = 100;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.node.opacity = 255;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.node.opacity = 100;
            if (this._callback) {
                this._callback();
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            this.node.opacity = 100;
        }, this);
    }
});

cc._RF.pop();