"use strict";
cc._RF.push(module, '68675KwfElAdaumPl1byNh7', 'SimpleButtonCtrl');
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