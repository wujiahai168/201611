(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/04_scheduler/scheduleCallbacks.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '930deImxoZIkp6ugjMU5ULW', 'scheduleCallbacks', __filename);
// cases/05_scripting/04_scheduler/scheduleCallbacks.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        time: {
            default: 5
        },

        counter: cc.Label
    },

    _callback: function _callback() {
        this.node.stopAllActions();
        this.node.runAction(this.seq);
        if (this.repeat) {
            this.counting = true;
        } else {
            this.counting = false;
        }
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + ' s';
    },

    // use this for initialization
    onLoad: function onLoad() {
        var squashAction = cc.scaleTo(0.2, 1, 0.6);
        var stretchAction = cc.scaleTo(0.2, 1, 1.2);
        var scaleBackAction = cc.scaleTo(0.1, 1, 1);
        var moveUpAction = cc.moveBy(1, cc.v2(0, 100)).easing(cc.easeCubicActionOut());
        var moveDownAction = cc.moveBy(1, cc.v2(0, -100)).easing(cc.easeCubicActionIn());
        this.seq = cc.sequence(squashAction, stretchAction, moveUpAction, scaleBackAction, moveDownAction, squashAction, scaleBackAction);

        this.counter.string = this.time.toFixed(2) + ' s';
        this.counting = false;
        this.repeat = false;
    },

    // called every frame
    update: function update(dt) {
        if (this.counting) {
            this.time -= dt;
            this.counter.string = this.time.toFixed(2) + ' s';
        }
    },

    stopCounting: function stopCounting() {
        this.unscheduleAllCallbacks();
        this.counting = false;
        this.time = 5;
        this.counter.string = this.time.toFixed(2) + ' s';
    },

    repeatSchedule: function repeatSchedule() {
        this.stopCounting();
        this.schedule(this._callback, 5);
        this.repeat = true;
        this.counting = true;
    },

    oneSchedule: function oneSchedule() {
        this.stopCounting();
        this.scheduleOnce(this._callback, 5);
        this.repeat = false;
        this.counting = true;
    },

    cancelSchedules: function cancelSchedules() {
        this.repeat = false;
        this.stopCounting();
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
        //# sourceMappingURL=scheduleCallbacks.js.map
        