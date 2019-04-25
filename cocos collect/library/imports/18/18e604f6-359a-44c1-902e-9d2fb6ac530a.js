"use strict";
cc._RF.push(module, '18e60T2NZpEwZAunS+2rFMK', 'ButtonInteractable');
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