(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/10_webview/WebviewCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f8de1gmPM1CLoiv+P/T9HnJ', 'WebviewCtrl', __filename);
// cases/02_ui/10_webview/WebviewCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        labelStatus: cc.Label,
        webview: cc.WebView,
        url: cc.EditBox
    },

    onWebFinishLoad: function onWebFinishLoad(sender, event) {
        var loadStatus = "";
        if (event === cc.WebView.EventType.LOADED) {
            loadStatus = " is loaded!";
        } else if (event === cc.WebView.EventType.LOADING) {
            loadStatus = " is loading!";
        } else if (event === cc.WebView.EventType.ERROR) {
            loadStatus = ' load error!';
        }
        this.labelStatus.string = this.url.string + loadStatus;
    },

    visitURL: function visitURL() {
        this.webview.url = this.url.string;
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
        //# sourceMappingURL=WebviewCtrl.js.map
        