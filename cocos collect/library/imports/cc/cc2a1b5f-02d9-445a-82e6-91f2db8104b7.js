"use strict";
cc._RF.push(module, 'cc2a1tfAtlEWoLmkfLbgQS3', 'TagColliderListener');
// cases/collider/Tag/TagColliderListener.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onEnable: function onEnable() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.label.string = 'Collision on tag : ' + self.tag;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();