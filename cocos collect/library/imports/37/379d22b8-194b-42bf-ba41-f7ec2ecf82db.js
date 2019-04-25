"use strict";
cc._RF.push(module, '379d2K4GUtCv7pB9+wuz4Lb', 'Singleton');
// cases/05_scripting/09_singleton/Singleton.js

"use strict";

var Singleton = cc.Class({
    extends: cc.Component,

    properties: {
        monsterIcon: {
            default: null,
            type: cc.SpriteFrame
        }
    },

    statics: {
        instance: null
    },

    onLoad: function onLoad() {
        Singleton.instance = this;
    }
});

cc._RF.pop();