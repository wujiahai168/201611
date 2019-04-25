"use strict";
cc._RF.push(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem');
// scripts/Global/ListItem.js

'use strict';

var TipsManager = require('TipsManager');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        url: '',
        bg: cc.Sprite,
        btn: cc.Button
    },

    init: function init(menu) {
        this.index = -1;
        this.__name = '';
        this.menu = menu;
    },
    loadExample: function loadExample() {
        if (this.url && TipsManager.hasSupport(this.__name)) {
            this.menu.loadScene(this.url);
        }
    },
    updateItem: function updateItem(idx, y, name, url) {
        var isDir = !url;
        this.index = idx;
        this.node.y = y;
        this.node.x = isDir ? 50 : 100;
        this.label.string = this.__name = name;
        this.url = url;
        this.bg.enabled = !isDir;
        this.btn.interactable = !isDir;
    }
});

cc._RF.pop();