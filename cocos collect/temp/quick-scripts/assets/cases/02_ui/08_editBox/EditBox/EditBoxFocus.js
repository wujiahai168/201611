(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditBoxFocus.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1a7ff6UBHVKV4jTfKY/YtyS', 'EditBoxFocus', __filename);
// cases/02_ui/08_editBox/EditBox/EditBoxFocus.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        editBox1: cc.EditBox,
        editBox2: cc.EditBox,
        editBox3: cc.EditBox
    },

    // use this for initialization
    onLoad: function onLoad() {},

    setFocus: function setFocus(event) {
        var target = event.target;
        if (target.name === "Button1") {
            this.editBox1.setFocus(true);
        } else if (target.name === "Button2") {
            this.editBox2.setFocus(true);
        } else if (target.name === "Button3") {
            this.editBox3.setFocus(true);
        }

        if (this.editBox1.isFocused()) {
            cc.log("Button1 is focused");
        }
        if (this.editBox2.isFocused()) {
            cc.log("Button2 is focused");
        }
        if (this.editBox3.isFocused()) {
            cc.log("Button3 is focused");
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
        //# sourceMappingURL=EditBoxFocus.js.map
        