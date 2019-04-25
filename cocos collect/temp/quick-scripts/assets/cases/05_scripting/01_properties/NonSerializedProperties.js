(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/NonSerializedProperties.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd4114PgybhJ3L/k0N9TkCZI', 'NonSerializedProperties', __filename);
// cases/05_scripting/01_properties/NonSerializedProperties.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        mySerializedText: '',
        myNonSerializedText: {
            default: '',
            visible: false
        },
        label1: {
            default: null,
            type: cc.Label
        },
        label2: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myNonSerializedText = 'Can only set value in script';
        this.label1.string = this.mySerializedText;
        this.label2.string = this.myNonSerializedText;
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
        //# sourceMappingURL=NonSerializedProperties.js.map
        