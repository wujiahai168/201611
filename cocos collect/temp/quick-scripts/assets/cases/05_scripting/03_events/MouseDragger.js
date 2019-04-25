(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/MouseDragger.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2412ev9NSRMeI28JHH2OS8r', 'MouseDragger', __filename);
// cases/05_scripting/03_events/MouseDragger.js

'use strict';

var TouchDragger = cc.Class({
    extends: cc.Component,

    properties: {
        propagate: {
            default: false
        }
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        this._down = false;
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            cc.log('Drag stated ...');
            this.node.opacity = 255;
            this._down = true;
            if (!this.propagate) event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return;
            }
            this.node.opacity = 255;
            var delta = event.getDelta();
            this.node.x += delta.x;
            this.node.y += delta.y;
            if (!this.propagate) event.stopPropagation();
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return;
            }
            this.node.opacity = 160;
            cc.log('Drag leave ...');
            this._down = false;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
            if (!this._down) {
                event.stopPropagation();
                return;
            }
            cc.log('Drag done ...');
            this.node.opacity = 160;
            this._down = false;
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
        //# sourceMappingURL=MouseDragger.js.map
        