(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/KeyboardInput/SimpleKeyboardMovement.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c3f971iyCdIh6xdaO49XP0F', 'SimpleKeyboardMovement', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=SimpleKeyboardMovement.js.map
        