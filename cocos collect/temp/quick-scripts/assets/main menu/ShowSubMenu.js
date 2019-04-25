(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/main menu/ShowSubMenu.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '19224TiKDhPbZ8/hTkQA7ey', 'ShowSubMenu', __filename);
// main menu/ShowSubMenu.js

'use strict';

cc.Class({
    extends: cc.Component,

    toggle: function toggle() {
        var shown = this.node.y < 0;
        var animation = this.getComponent(cc.Animation);
        animation.play(shown ? 'hide menu' : 'show menu');
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
        //# sourceMappingURL=ShowSubMenu.js.map
        