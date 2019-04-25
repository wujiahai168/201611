"use strict";
cc._RF.push(module, 'dd654DFPoRNVKRWOuQdLiEE', 'EditboxCtrl');
// cases/02_ui/08_editBox/EditBox/EditboxCtrl.js

"use strict";

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        singleLineText: {
            default: null,
            type: cc.EditBox
        },

        singleLinePassword: {
            default: null,
            type: cc.EditBox
        },

        multiLineText: {
            default: null,
            type: cc.EditBox
        },

        showEditorBoxLabel: {
            default: null,
            type: cc.Label
        }

    },

    // use this for initialization
    onLoad: function onLoad() {},

    singleLineEditBoxDidBeginEditing: function singleLineEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidBeginEditing");
    },

    singleLineEditBoxDidChanged: function singleLineEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line editBoxDidChanged: " + text);
    },

    singleLineEditBoxDidEndEditing: function singleLineEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line editBoxDidEndEditing: " + this.singleLineText.string);
    },

    singleLinePasswordEditBoxDidBeginEditing: function singleLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidBeginEditing");
    },

    singleLinePasswordEditBoxDidChanged: function singleLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " single line password editBoxDidChanged: " + text);
    },

    singleLinePasswordEditBoxDidEndEditing: function singleLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " single line password editBoxDidEndEditing: " + this.singleLinePassword.string);
    },

    multiLinePasswordEditBoxDidBeginEditing: function multiLinePasswordEditBoxDidBeginEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidBeginEditing");
    },

    multiLinePasswordEditBoxDidChanged: function multiLinePasswordEditBoxDidChanged(text, sender) {
        cc.log(sender.node.name + " multi line editBoxDidChanged: " + text);
    },

    multiLinePasswordEditBoxDidEndEditing: function multiLinePasswordEditBoxDidEndEditing(sender) {
        cc.log(sender.node.name + " multi line editBoxDidEndEditing: " + this.multiLineText.string);
    },
    buttonClicked: function buttonClicked() {
        cc.log("button Clicked!");
        if (this.singleLineText.string !== "") {
            this.showEditorBoxLabel.string = i18n.t("cases/02_ui/07_editBox/editbox.js.1") + this.singleLineText.string;
        } else {
            this.showEditorBoxLabel.string = "";
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();