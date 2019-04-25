(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '84a43yb9OxBX6HMQxPzHQyz', 'ProgressBarCtrl', __filename);
// cases/02_ui/04_progressbar/ProgressBar/ProgressBarCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 10,
        horizontalBar: {
            type: cc.ProgressBar,
            default: null
        },
        horizontalBarReverse: {
            type: cc.ProgressBar,
            default: null
        },
        verticalBar: {
            type: cc.ProgressBar,
            default: null
        },
        verticalBarReverse: {
            type: cc.ProgressBar,
            default: null
        }
    },

    onLoad: function onLoad() {
        this._pingpong = true;
        this.verticalBar.progress = 0;
        this.horizontalBar.progress = 0;
        this.verticalBarReverse.progress = 0;
        this.horizontalBarReverse.progress = 0;
    },

    update: function update(dt) {
        this._updateProgressBar(this.verticalBar, dt);
        this._updateProgressBar(this.horizontalBar, dt);
        this._updateProgressBar(this.verticalBarReverse, dt);
        this._updateProgressBar(this.horizontalBarReverse, dt);
    },

    _updateProgressBar: function _updateProgressBar(progressBar, dt) {
        var progress = progressBar.progress;
        if (progress < 1.0 && this._pingpong) {
            progress += dt * this.speed;
        } else {
            progress -= dt * this.speed;
            this._pingpong = progress <= 0;
        }
        progressBar.progress = progress;
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
        //# sourceMappingURL=ProgressBarCtrl.js.map
        