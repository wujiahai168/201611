(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Global/AdaptiveSprite.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4edf1JTF/BHIKZVY3FaAqsT', 'AdaptiveSprite', __filename);
// scripts/Global/AdaptiveSprite.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        padding: 20,

        label: {
            default: null,
            type: cc.Node
        },

        backgroup: {
            default: null,
            type: cc.Node
        }

    },

    update: function update() {
        if (this.backgroup.width !== this.label.width) {
            this.backgroup.width = this.label.width + this.padding;
        }
        if (this.backgroup.height !== this.label.height) {
            this.backgroup.height = this.label.height + this.padding;
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
        //# sourceMappingURL=AdaptiveSprite.js.map
        