(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Tips/TipsCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8ae30fCf3BOT5yZGmirBXJi', 'TipsCtrl', __filename);
// scripts/Tips/TipsCtrl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        content: require('LabelLocalized')
    },

    // onLoad () {},
    onDestroySelf: function onDestroySelf() {
        this.node.destroy();
    },
    setContent: function setContent(str) {
        if (str) {
            this.content.textKey = str;
        }
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
        //# sourceMappingURL=TipsCtrl.js.map
        