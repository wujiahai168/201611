(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Global/Instruction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6a871gy73FDLap3Eje/2h6i', 'Instruction', __filename);
// scripts/Global/Instruction.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        text: {
            default: '',
            multiline: true
            // foo: {
            //    default: null,
            //    url: cc.Texture2D,  // optional, default is typeof default
            //    serializable: true, // optional, default is true
            //    visible: true,      // optional, default is true
            //    displayName: 'Foo', // optional
            //    readonly: false,    // optional, default is false
            // },
            // ...
        } },

    // use this for initialization
    onLoad: function onLoad() {}

    // called every frame
    // update: function (dt) {

    // },
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
        //# sourceMappingURL=Instruction.js.map
        