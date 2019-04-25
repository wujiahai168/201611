"use strict";
cc._RF.push(module, '5245dIEBoFFB4RdXwoJQM2G', 'NativeCallCtrl');
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