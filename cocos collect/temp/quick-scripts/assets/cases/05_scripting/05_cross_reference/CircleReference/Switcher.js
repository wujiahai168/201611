(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/05_cross_reference/CircleReference/Switcher.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '41a1bujgpVH7IZ1HSDQEosG', 'Switcher', __filename);
// cases/05_scripting/05_cross_reference/CircleReference/Switcher.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            var newnode = cc.instantiate(this.prefab);
            var parent = this.node.parent;
            this.node.parent = null;
            newnode.parent = parent;
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
        //# sourceMappingURL=Switcher.js.map
        