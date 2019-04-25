(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/08_editBox/EditBox/EditBoxEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5984fyb0ONArqT4eV/OjCgP', 'EditBoxEvent', __filename);
// cases/02_ui/08_editBox/EditBox/EditBoxEvent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        editBox: cc.EditBox,
        stayOnTop: cc.Toggle,
        eventDisplay: cc.Label,
        platfromTip: cc.Node,

        _isEditingReturn: false
    },

    start: function start() {
        this.editBox.stayOnTop = this.stayOnTop.isChecked;
        this.stayOnTop.node.active = cc.sys.isBrowser;
        this.platfromTip.active = !cc.sys.isBrowser;
    },
    onStayOnTop: function onStayOnTop(event) {
        this.editBox.stayOnTop = event.isChecked;
    },
    editingDidBegan: function editingDidBegan(event) {
        this.eventDisplay.string = 'editing did began';
    },
    textChanged: function textChanged(event) {
        this.eventDisplay.string = 'text changed: ' + event;
    },
    editingDidEnded: function editingDidEnded(event) {
        if (this._isEditingReturn) {
            this.eventDisplay.string = 'editing returned and ended';
            this._isEditingReturn = false;
        } else {
            this.eventDisplay.string = 'editing did ended';
        }
    },
    editingReturn: function editingReturn(event) {
        this._isEditingReturn = true;
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
        //# sourceMappingURL=EditBoxEvent.js.map
        