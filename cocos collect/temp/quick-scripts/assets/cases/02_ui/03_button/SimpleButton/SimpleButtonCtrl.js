(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '68675KwfElAdaumPl1byNh7', 'SimpleButtonCtrl', __filename);
// cases/02_ui/03_button/SimpleButton/SimpleButtonCtrl.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        buttonLeft: cc.Button,
        buttonRight: cc.Button,
        display: cc.Label
    },

    onBtnLeftClicked: function onBtnLeftClicked() {
        console.log('Left button clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.1");
    },

    onBtnRightClicked: function onBtnRightClicked() {
        console.log('Right button clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/SimpleButton.js.2");
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
        //# sourceMappingURL=SimpleButtonCtrl.js.map
        