"use strict";
cc._RF.push(module, 'fde33rWt81MvZWO7QQ3jv3j', 'SimpleMotion');
// cases/collider/Utils/SimpleMotion.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 100,
        rotationSpeed: 90
    },

    // use this for initialization
    onLoad: function onLoad() {},

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.node.x += dt * this.moveSpeed;
        this.node.rotation += dt * this.rotationSpeed;
    }
});

cc._RF.pop();