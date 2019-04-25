(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/MyCustomComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6b8baEpLuxACIMNlIL2vw2W', 'MyCustomComponent', __filename);
// cases/05_scripting/01_properties/MyCustomComponent.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        power: 10
    },

    getPower: function getPower() {
        return this.power;
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
        //# sourceMappingURL=MyCustomComponent.js.map
        