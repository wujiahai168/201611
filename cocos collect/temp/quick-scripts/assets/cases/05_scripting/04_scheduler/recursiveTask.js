(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/04_scheduler/recursiveTask.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1bdf4Sc2zlNZI/eLikUgkJ3', 'recursiveTask', __filename);
// cases/05_scripting/04_scheduler/recursiveTask.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        label: require('../../../i18n/LabelLocalized')
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    run: function run() {
        this.schedule(this.task1, 1, 0, 1);
    },


    task1: function task1() {
        this.unschedule(this.task1);
        this.label.textKey = 'cases/05_scripting/04_scheduler/recursiveScheduler.fire.1';
        this.schedule(this.task2, 1, 0, 1);
    },

    task2: function task2() {
        this.label.textKey = 'cases/05_scripting/04_scheduler/recursiveScheduler.fire.2';
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
        //# sourceMappingURL=recursiveTask.js.map
        