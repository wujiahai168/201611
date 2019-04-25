"use strict";
cc._RF.push(module, '920c8a5MahAhbCTSvmQvaB+', 'Item');
// cases/02_ui/05_scrollView/ListView/Item.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        itemID: 0
    },

    onLoad: function onLoad() {
        this.node.on('touchend', function () {
            console.log("Item " + this.itemID + ' clicked');
        }, this);
    },

    updateItem: function updateItem(tmplId, itemId) {
        this.itemID = itemId;
        this.label.textKey = i18n.t("cases/02_ui/05_scrollView/Item.js.1") + tmplId + ' Item#' + this.itemID;
    }
});

cc._RF.pop();