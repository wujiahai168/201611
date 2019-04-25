(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/03_button/ButtonInteractable/ButtonInteractable.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '18e60T2NZpEwZAunS+2rFMK', 'ButtonInteractable', __filename);
// cases/02_ui/03_button/ButtonInteractable/ButtonInteractable.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        buttonLeft: {
            default: null,
            type: cc.Button
        },
        buttonRight: {
            default: null,
            type: cc.Button
        },
        labelLeft: {
            default: null,
            type: cc.Label
        },
        labelRight: {
            default: null,
            type: cc.Label
        }
    },

    onBtnLeftClicked: function onBtnLeftClicked() {
        console.log('Left button clicked!');
        this.buttonLeft.interactable = false;
        this.buttonRight.interactable = true;
        this.updateInfo();
    },

    onBtnRightClicked: function onBtnRightClicked() {
        console.log('Right button clicked!');
        this.buttonRight.interactable = false;
        this.buttonLeft.interactable = true;
        this.updateInfo();
    },

    updateInfo: function updateInfo() {
        this.labelLeft.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.1") + this.buttonLeft.interactable;
        this.labelRight.textKey = i18n.t("cases/02_ui/03_button/ButtonInteractable.js.2") + this.buttonRight.interactable;
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
        //# sourceMappingURL=ButtonInteractable.js.map
        