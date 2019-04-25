(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/ActionCallback.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2881e6K1edLBbgvc+6/YN7o', 'ActionCallback', __filename);
// cases/05_scripting/03_events/ActionCallback.js

'use strict';

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');
        var mouseEvent = this.getComponent('MouseEvent');
        var event = touchEvent || mouseEvent;
        event._callback = function () {
            this.node.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        };
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
        //# sourceMappingURL=ActionCallback.js.map
        