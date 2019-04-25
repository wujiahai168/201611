(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/09_singleton/Singleton.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '379d2K4GUtCv7pB9+wuz4Lb', 'Singleton', __filename);
// cases/05_scripting/09_singleton/Singleton.js

"use strict";

var Singleton = cc.Class({
    extends: cc.Component,

    properties: {
        monsterIcon: {
            default: null,
            type: cc.SpriteFrame
        }
    },

    statics: {
        instance: null
    },

    onLoad: function onLoad() {
        Singleton.instance = this;
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
        //# sourceMappingURL=Singleton.js.map
        