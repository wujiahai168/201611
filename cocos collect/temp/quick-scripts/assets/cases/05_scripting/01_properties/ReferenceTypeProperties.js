(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/01_properties/ReferenceTypeProperties.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9341f3fDdBMjJLKh4D+kJJK', 'ReferenceTypeProperties', __filename);
// cases/05_scripting/01_properties/ReferenceTypeProperties.js

'use strict';

var MyCustomComponent = require('MyCustomComponent');

cc.Class({
    extends: cc.Component,

    properties: {
        myNode: {
            default: null,
            type: cc.Node
        },
        mySprite: {
            default: null,
            type: cc.Sprite
        },
        myLabel: {
            default: null,
            type: cc.Label
        },
        myComponent: {
            default: null,
            type: MyCustomComponent
        },
        mySpriteFrame: {
            default: null,
            type: cc.SpriteFrame
        },
        myAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        myPrefab: {
            default: null,
            type: cc.Prefab
        },
        myAudioClip: {
            default: null,
            type: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.myLabel.string = this.myComponent.getPower().toString();
    },

    // called every frame
    update: function update(dt) {}
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
        //# sourceMappingURL=ReferenceTypeProperties.js.map
        