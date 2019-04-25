(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/11_richtext/RichTextEvents.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a0c7fwrZUpN7JS8x9rEtSfl', 'RichTextEvents', __filename);
// cases/02_ui/11_richtext/RichTextEvents.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        logMessage: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    clickme: function clickme(event) {
        var clickPosition = event.touch.getLocation();
        this.logMessage.string = "Clicked at: " + parseFloat(clickPosition.x.toFixed()) + ", y = " + parseFloat(clickPosition.y.toFixed(2));
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
        //# sourceMappingURL=RichTextEvents.js.map
        