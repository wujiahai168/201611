(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/subpackage/load-subpackage.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9221ffOiRZCRqhxaYTw/z7u', 'load-subpackage', __filename);
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
        //# sourceMappingURL=load-subpackage.js.map
        