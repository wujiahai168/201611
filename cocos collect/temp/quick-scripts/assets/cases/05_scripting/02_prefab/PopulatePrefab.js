(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/02_prefab/PopulatePrefab.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '75518I0ImJHXqWNNGRIOmJg', 'PopulatePrefab', __filename);
// cases/05_scripting/02_prefab/PopulatePrefab.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        root: {
            default: null,
            type: cc.Node
        },
        prefab: {
            default: null,
            type: cc.Prefab
        },
        canvas: {
            default: null,
            type: cc.Canvas
        },
        numberToSpawn: 0,
        spawnInterval: 0
    },

    addSpawn: function addSpawn() {
        if (this.spawnCount >= this.numberToSpawn) {
            this.clearRepeater();
            return;
        }
        var monster = cc.instantiate(this.prefab);
        monster.parent = this.root;
        //this.canvas.node.addChild(monster);
        monster.position = this.getRandomPosition();
        this.spawnCount++;
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.randomRange = cc.v2(300, 200);
        self.spawnCount = 0;
        self.schedule(self.addSpawn, self.spawnInterval);
    },

    getRandomPosition: function getRandomPosition() {
        return cc.v2((Math.random() - 0.5) * 2 * this.randomRange.x, (Math.random() - 0.5) * 2 * this.randomRange.y);
    },

    clearRepeater: function clearRepeater() {
        this.unschedule(this.addSpawn);
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
        //# sourceMappingURL=PopulatePrefab.js.map
        