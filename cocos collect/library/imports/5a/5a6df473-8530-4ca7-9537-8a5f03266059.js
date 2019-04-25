"use strict";
cc._RF.push(module, '5a6dfRzhTBMp5U3il8DJmBZ', 'ShowCollider');
// cases/collider/Shape/ShowCollider.js

'use strict';

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {},

    onBtnClick: function onBtnClick(event) {
        var target = event.target;
        var shapeClassName = 'cc.' + target.name + 'Collider';
        var nodePath = 'Canvas/root/' + target.parent.name;
        var collider = cc.find(nodePath).getComponent(shapeClassName);
        collider.enabled = !collider.enabled;

        var label = target.getChildByName('Label').getComponent(cc.Label);
        if (collider.enabled) {
            label.string = label.string.replace('Show', 'Hide');
        } else {
            label.string = label.string.replace('Hide', 'Show');
        }
    }
});

cc._RF.pop();