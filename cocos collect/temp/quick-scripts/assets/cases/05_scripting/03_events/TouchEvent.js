(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/TouchEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a14bfaD+gRJKrTVjKwitc53', 'TouchEvent', __filename);
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
        //# sourceMappingURL=TouchEvent.js.map
        