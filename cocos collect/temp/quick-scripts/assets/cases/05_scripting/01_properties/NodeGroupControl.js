(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/NodeGroupControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bd4a2+britAlof0UdMCVB8c', 'NodeGroupControl', __filename);
// cases/05_scripting/01_properties/NodeGroupControl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        nodeList: {
            default: [],
            type: [cc.Node]
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        this.inervalId = setInterval(function () {
            self.toggleNodesVisibility();
        }, 1000);
    },

    onDestroy: function onDestroy() {
        clearInterval(this.inervalId);
    },

    toggleNodesVisibility: function toggleNodesVisibility() {
        console.log('toggle visibility');
        for (var i = 0; i < this.nodeList.length; ++i) {
            this.nodeList[i].active = !this.nodeList[i].active;
        }
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
        //# sourceMappingURL=NodeGroupControl.js.map
        