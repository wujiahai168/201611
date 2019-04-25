(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f9b352jbGtMIqjEuud60Wpx', 'OnTouchCtrl', __filename);
// cases/03_gameplay/01_player_control/OnTouchCtrl/OnTouchCtrl.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        canvas: cc.Node,
        touchLocationDisplay: {
            default: null,
            type: cc.Label
        },
        follower: {
            default: null,
            type: cc.Node
        },
        followSpeed: 200
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        self.moveToPos = cc.v2(0, 0);
        self.isMoving = false;
        self.canvas.on(cc.Node.EventType.TOUCH_START, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.isMoving = true;
            self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
            self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var touches = event.getTouches();
            var touchLoc = touches[0].getLocation();
            self.moveToPos = self.follower.parent.convertToNodeSpaceAR(touchLoc);
            self.touchLocationDisplay.textKey = i18n.t("cases/03_gameplay/01_player_control/On/OnTouchCtrl.js.1") + Math.floor(touchLoc.x) + ', ' + Math.floor(touchLoc.y) + ')';
        }, self.node);
        self.canvas.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.isMoving = false; // when touch ended, stop moving
        }, self.node);
    },

    // called every frame
    update: function update(dt) {
        if (!this.isMoving) return;
        var oldPos = this.follower.position;
        // get move direction
        var direction = this.moveToPos.sub(oldPos).normalize();
        // multiply direction with distance to get new position
        var newPos = oldPos.add(direction.mul(this.followSpeed * dt));
        // set new position
        this.follower.setPosition(newPos);
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
        //# sourceMappingURL=OnTouchCtrl.js.map
        