(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/13_toggle/checkbox.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ca244RHY8xLbprnCDD9dH+B', 'checkbox', __filename);
// cases/02_ui/13_toggle/checkbox.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        checkbox: {
            default: null,
            type: cc.Toggle
        },

        checkBoxEventString: {
            default: null,
            type: cc.Label
        },

        radioButtonEventString: {
            default: null,
            type: cc.Label
        },

        radioButton: {
            default: [],
            type: cc.Toggle
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (this.checkbox) {
            this._updateToggleEventString("CheckBox", this.checkBoxEventString, this.checkbox);
        }
    },

    _updateToggleEventString: function _updateToggleEventString(title, label, toggle) {
        if (toggle.isChecked) {
            label.string = title + " is checked.";
        } else {
            label.string = title + " is unchecked.";
        }
    },

    radioButtonClicked: function radioButtonClicked(toggle) {
        var index = this.radioButton.indexOf(toggle);
        var title = "RadioButton";
        switch (index) {
            case 0:
                title += "1";
                break;
            case 1:
                title += "2";
                break;
            case 2:
                title += "3";
                break;
            default:
                break;
        }
        this._updateToggleEventString(title, this.radioButtonEventString, toggle);
    },

    checkBoxClicked: function checkBoxClicked(toggle) {
        this._updateToggleEventString("CheckBox", this.checkBoxEventString, toggle);
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
        //# sourceMappingURL=checkbox.js.map
        