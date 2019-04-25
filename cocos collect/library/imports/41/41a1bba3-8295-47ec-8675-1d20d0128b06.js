"use strict";
cc._RF.push(module, '41a1bujgpVH7IZ1HSDQEosG', 'Switcher');
// cases/05_scripting/05_cross_reference/CircleReference/Switcher.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            var newnode = cc.instantiate(this.prefab);
            var parent = this.node.parent;
            this.node.parent = null;
            newnode.parent = parent;
        }, this);
    }
});

cc._RF.pop();