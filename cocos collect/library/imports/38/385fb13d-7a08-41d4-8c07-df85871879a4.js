"use strict";
cc._RF.push(module, '385fbE9eghB1IwH34WHGHmk', 'OrderSwitcher');
// cases/05_scripting/03_events/OrderSwitcher.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        container: cc.Node
    },

    // use this for initialization
    switch: function _switch() {
        var children = this.container.children;
        var length = children.length;
        if (length > 1) {
            var src = Math.floor(Math.random() * length);
            var node = children[src];
            var dst = src === length - 1 ? 0 : src + 1;
            node.setSiblingIndex(dst);
        }
    }
});

cc._RF.pop();