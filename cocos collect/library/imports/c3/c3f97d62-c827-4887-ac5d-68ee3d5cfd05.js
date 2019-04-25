"use strict";
cc._RF.push(module, 'c3f971iyCdIh6xdaO49XP0F', 'SimpleKeyboardMovement');
// cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        sheep: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // set initial move direction
        this.turnRight();

        //add keyboard input listener to call turnLeft and turnRight
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    onKeyDown: function onKeyDown(event) {
        var macro = cc.macro;
        switch (event.keyCode) {
            case macro.KEY.a:
            case macro.KEY.left:
                console.log('turn left');
                this.turnLeft();
                break;
            case macro.KEY.d:
            case macro.KEY.right:
                console.log('turn right');
                this.turnRight();
                break;
        }
    },


    // called every frame
    update: function update(dt) {
        this.sheep.x += this.speed * dt;
    },
    turnLeft: function turnLeft() {
        this.speed = -100;
        this.sheep.scaleX = 1;
    },
    turnRight: function turnRight() {
        this.speed = 100;
        this.sheep.scaleX = -1;
    }
});

cc._RF.pop();