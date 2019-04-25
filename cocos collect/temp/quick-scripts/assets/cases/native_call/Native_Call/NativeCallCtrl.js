(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/native_call/Native_Call/NativeCallCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5245dIEBoFFB4RdXwoJQM2G', 'NativeCallCtrl', __filename);
// cases/native_call/Native_Call/NativeCallCtrl.js

'use strict';

var tips = null;
cc.TestNativeCallJS = function () {
    tips.string = 'The test was successful...';
};

cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Node
    },

    onLoad: function onLoad() {
        var tipNode = cc.find("Canvas/New Label");
        tips = tipNode.getComponent(cc.Label);
        tips.string = 'Native Call Test';
    },

    onClick: function onClick() {
        var className = "org/cocos2dx/javascript/AppActivity";
        var methodName = "showAlertDialog";
        var methodSignature = "(Ljava/lang/String;Ljava/lang/String;)V";
        jsb.reflection.callStaticMethod(className, methodName, methodSignature, "Title", "Native Call Test");
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
        //# sourceMappingURL=NativeCallCtrl.js.map
        