(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/graphics/example/lineTo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3ed7bVI5mxF+I75PHb0k24q', 'lineTo', __filename);
// cases/graphics/example/lineTo.js

'use strict';

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var g = this.getComponent(cc.Graphics);

        g.lineWidth = 10;
        g.fillColor.fromHEX('#ff0000');

        g.moveTo(-20, 0);
        g.lineTo(0, -100);
        g.lineTo(20, 0);
        g.lineTo(0, 100);
        g.close();

        g.stroke();
        g.fill();
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
        //# sourceMappingURL=lineTo.js.map
        