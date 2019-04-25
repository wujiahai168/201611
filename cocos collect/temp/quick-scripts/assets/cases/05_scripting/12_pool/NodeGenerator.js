(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/12_pool/NodeGenerator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2149G/5j1JIKd2GGzQfS72', 'NodeGenerator', __filename);
// cases/05_scripting/12_pool/NodeGenerator.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        prefab: cc.Prefab,
        hint: cc.Label,
        regionOrigin: cc.Vec2,
        regionSize: cc.Size
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.schedule(this.generateNode, 2);
        this._pool = new cc.NodePool('PoolHandler');
        this._count = 0;
    },

    generateNode: function generateNode() {
        var monster = this._pool.get();
        if (!monster) {
            monster = cc.instantiate(this.prefab);
            this._count++;
            this.hint.string = 'Node Created: ' + this._count;

            // Add pool handler component which will control the touch event
            monster.addComponent('PoolHandler');
        }
        monster.x = this.regionOrigin.x + Math.floor(Math.random() * this.regionSize.width);
        monster.y = this.regionOrigin.y + Math.floor(Math.random() * this.regionSize.height);

        var angle = Math.random() * Math.PI * 2;
        var dx = 500 * Math.cos(angle);
        var dy = 500 * Math.sin(angle);

        monster.runAction(cc.sequence(cc.moveBy(5, dx, dy), cc.callFunc(this.removeNode, this, monster)));

        this.node.addChild(monster);
    },

    removeNode: function removeNode(sender, monster) {
        this._pool.put(monster);
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
        //# sourceMappingURL=NodeGenerator.js.map
        