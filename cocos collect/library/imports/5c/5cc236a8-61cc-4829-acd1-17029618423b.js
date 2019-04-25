"use strict";
cc._RF.push(module, '5cc23aoYcxIKazRFwKWGEI7', 'CustomEvent');
// cases/05_scripting/03_events/CustomEvent.js

'use strict';

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function onLoad() {
        var touchEvent = this.getComponent('TouchEvent');

        // Emit CUSTOM_EVENT to its listeners while touch end
        touchEvent._callback = function () {
            this.node.emit('CUSTOM_EVENT');
        }.bind(this);

        var addButton = cc.find('Canvas/add');
        var cancelButton = cc.find('Canvas/cancel');

        function onCustomEvent(event) {
            this.runAction(cc.sequence(cc.scaleTo(0.5, 2, 1), cc.scaleTo(0.25, 1, 1)));
        }

        this.node.on('CUSTOM_EVENT', onCustomEvent, addButton);
        this.node.on('CUSTOM_EVENT', onCustomEvent, cancelButton);
    }
});

cc._RF.pop();