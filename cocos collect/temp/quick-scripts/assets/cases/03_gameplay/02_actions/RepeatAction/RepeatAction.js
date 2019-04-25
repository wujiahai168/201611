(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '66d74aG3cdDq4lLyUUjOCk/', 'RepeatAction', __filename);
// cases/03_gameplay/02_actions/RepeatAction/RepeatAction.js

'use strict';

var MAX_VALUE = 5;
var TIPS_STR = 'repeat count: ' + MAX_VALUE + ' / value';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: cc.Label
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        this.setTips(0);
        var count = 0;
        var action1 = cc.delayTime(1);
        var action2 = cc.callFunc(function () {
            count++;
            _this.setTips(count);
        }, this);
        this.node.runAction(cc.repeat(cc.sequence(action1, action2), 5));
    },
    setTips: function setTips(count) {
        this.tips.string = TIPS_STR.replace(/value/, count);
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
        //# sourceMappingURL=RepeatAction.js.map
        