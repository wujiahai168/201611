(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/05_scrollView/ListView/Item.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '920c8a5MahAhbCTSvmQvaB+', 'Item', __filename);
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
        //# sourceMappingURL=Item.js.map
        