"use strict";
cc._RF.push(module, 'f8de1gmPM1CLoiv+P/T9HnJ', 'WebviewCtrl');
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