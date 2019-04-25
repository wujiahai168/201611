"use strict";
cc._RF.push(module, '990e2c/1VlE9pmwd+Ftseau', 'Bar');
// cases/05_scripting/05_cross_reference/Bar.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: function properties() {
        return {
            refToFoo: require('Foo')
        };
    },

    // use this for initialization
    onLoad: function onLoad() {
        var tip = this.node.children[0].getComponent(cc.Label);
        tip.string = this.name + ' has reference to ' + this.refToFoo.name;
    }
});

cc._RF.pop();