"use strict";
cc._RF.push(module, 'e6dc7dWcxxJuofXB7ergGnC', 'ButtonControlCtrl');
// cases/02_ui/03_button/ButtonInScroll/ButtonControlCtrl.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        button_1: cc.Button,
        button_2: cc.Button,
        display: cc.Label
    },

    onClickedButton_1: function onClickedButton_1() {
        console.log('button_1 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.1");
    },

    onClickedButton_2: function onClickedButton_2() {
        console.log('button_2 clicked!');
        this.display.textKey = i18n.t("cases/02_ui/03_button/ButtonInScroll.js.2");
    }
});

cc._RF.pop();