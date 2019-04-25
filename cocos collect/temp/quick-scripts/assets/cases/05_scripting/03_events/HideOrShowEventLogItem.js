(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/03_events/HideOrShowEventLogItem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b8603ZTz2JHKadF2qYm6voj', 'HideOrShowEventLogItem', __filename);
// cases/05_scripting/03_events/HideOrShowEventLogItem.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
        eventLabel: cc.Label
    },

    setTimeDisplay: function setTimeDisplay(value) {
        this.timeLabel.string = value;
    },
    setEventDisplay: function setEventDisplay(value) {
        this.eventLabel.string = value;
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
        //# sourceMappingURL=HideOrShowEventLogItem.js.map
        