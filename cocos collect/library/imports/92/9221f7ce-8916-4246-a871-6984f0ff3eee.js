"use strict";
cc._RF.push(module, '9221ffOiRZCRqhxaYTw/z7u', 'load-subpackage');
// cases/subpackage/load-subpackage.js

'use strict';

cc.Class({
    extends: cc.Component,

    start: function start() {
        this.label = cc.find('Canvas/New Label').getComponent(cc.Label);
        this.label.textKey = '';
    },
    loadSubpackage: function loadSubpackage() {
        var _this = this;

        if (CC_PREVIEW || CC_QQPLAY) return;
        cc.loader.downloader.loadSubpackage('subpackage', function (err) {
            if (err) {
                console.error(err);
                _this.label.textKey = 'cases/subpackage.failed';
                return;
            }
            console.log('load subpackage successfully.');
            cc.director.loadScene('subpackage');
        });
    }
});

cc._RF.pop();