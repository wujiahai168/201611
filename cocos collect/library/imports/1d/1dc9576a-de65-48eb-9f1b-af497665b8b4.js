"use strict";
cc._RF.push(module, '1dc95dq3mVI658br0l2Zbi0', 'MoveAnimationCtrl');
// cases/03_gameplay/03_animation/MoveAnimation/MoveAnimationCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Animation
        },

        nodes: {
            default: [],
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        this.onRegisteredEvent();
    },

    onRegisteredEvent: function onRegisteredEvent() {
        for (var i = 0; i < this.nodes.length; ++i) {
            this.nodes[i].on(cc.Node.EventType.TOUCH_END, this.onPlayAnimation.bind(this));
        }
    },

    onPlayAnimation: function onPlayAnimation(event) {
        this.target.stop();
        switch (event.target._name) {
            case "Linear":
                this.target.play("linear");
                break;
            case "CaseIn_Expo":
                this.target.play("caseIn-expo");
                break;
            case "CaseOut_Expo":
                this.target.play("caseOut-expo");
                break;
            case "CaseInOut_Expo":
                this.target.play("caseInOut-expo");
                break;
            case "Back_Forward":
                this.target.play("back-forward");
                break;
        }
    }

});

cc._RF.pop();