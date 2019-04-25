(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/ValueTypeProperties.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd9bf6bFb+tF779stLEmjzTV', 'ValueTypeProperties', __filename);
// cases/05_scripting/01_properties/ValueTypeProperties.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // number
        myNumber: {
            default: 0,
            type: cc.Integer
        },
        // string
        myString: {
            default: 'default text'
        },
        myVec2: {
            default: cc.Vec2.ZERO
        },
        myColor: {
            default: cc.Color.WHITE
        },
        myOtherNumber: 0,
        myOtherString: 'no type definition',
        myOtherVec2: cc.Vec2.ONE,
        myOtherColor: cc.Color.BLACK
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame
    update: function update(dt) {}
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
        //# sourceMappingURL=ValueTypeProperties.js.map
        