(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Global/ListItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aa63bWNE8hBf4P4Sp0X2uT0', 'ListItem', __filename);
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
        //# sourceMappingURL=ListItem.js.map
        