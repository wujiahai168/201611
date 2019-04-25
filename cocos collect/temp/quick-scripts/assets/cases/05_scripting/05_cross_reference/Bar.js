(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/05_cross_reference/Bar.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '990e2c/1VlE9pmwd+Ftseau', 'Bar', __filename);
// cases/05_scripting/05_cross_reference/Bar.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: function properties() {
        return {
            refToFoo: require('Foo')
        };
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + ' has reference to ' + this.refToFoo.name;
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
        //# sourceMappingURL=Bar.js.map
        