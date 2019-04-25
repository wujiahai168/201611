"use strict";
cc._RF.push(module, '1ea36nYikVOup6BzaEIMYPH', 'Foo');
// cases/05_scripting/05_cross_reference/Foo.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: function properties() {
        return {
            refToBar: require('Bar')
        };
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + ' has reference to ' + this.refToBar.name;
    }
});

cc._RF.pop();