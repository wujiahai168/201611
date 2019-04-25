"use strict";
cc._RF.push(module, '9d60fXxtXFNeI79PM6EXYuZ', 'ColliderListener');
// cases/collider/Category/ColliderListener.js

"use strict";

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;

        this.touchingNumber = 0;
    },

    onCollisionEnter: function onCollisionEnter(other) {
        this.node.color = cc.Color.RED;
        this.touchingNumber++;
    },

    onCollisionStay: function onCollisionStay(other) {
        // console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit() {
        this.touchingNumber--;
        if (this.touchingNumber === 0) {
            this.node.color = cc.Color.WHITE;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();