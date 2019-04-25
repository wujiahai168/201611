(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/08_module/LoadModuleCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9e702GubHpK+4vAb3yu2OW5', 'LoadModuleCtrl', __filename);
// cases/05_scripting/08_module/LoadModuleCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        monsterTemp: {
            default: null,
            type: cc.Prefab
        },
        btn_createMonster: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.btn_createMonster.on(cc.Node.EventType.TOUCH_END, this.createMoster.bind(this));
    },

    createMoster: function createMoster() {
        var monster = cc.instantiate(this.monsterTemp);
        var Monster = require("Monster");
        var monsterComp = monster.getComponent(Monster);
        var InitData = require("InitData");
        monsterComp.initInfo(InitData.monsterInfo);
        monster.parent = this.node;
        monster.setPosition(cc.v2(0, 0));
        this.btn_createMonster.active = false;
    }

    // called every frame, uncomment this function to activate update callback
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
        //# sourceMappingURL=LoadModuleCtrl.js.map
        