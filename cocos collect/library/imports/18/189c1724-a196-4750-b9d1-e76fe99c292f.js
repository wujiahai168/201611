"use strict";
cc._RF.push(module, '189c1ckoZZHULnR52/pnCkv', 'DeviceMotionCtrl');
// cases/03_gameplay/01_player_control/DeviceMotion/DeviceMotionCtrl.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 200,
        target: cc.Node,
        btn_label: cc.Label,
        _time: 0,
        _range: cc.v2(0, 0),
        _acc: cc.v2(0, 0)
    },

    onLoad: function onLoad() {
        this._enabled = false;
        var screenSize = cc.view.getVisibleSize();
        this._range.x = screenSize.width / 2 - this.target.width / 2;
        this._range.y = screenSize.height / 2 - this.target.height / 2;
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },
    onOpenAccelerometer: function onOpenAccelerometer() {
        this._enabled = !this._enabled;
        if (this._enabled) {
            this.btn_label.textKey = i18n.t('cases/03_gameplay/01_player_control/On/DeviceMotion.fire.2');
        } else {
            this.btn_label.textKey = i18n.t('cases/03_gameplay/01_player_control/On/DeviceMotion.fire.1');
        }
        if (!this._enabled) {
            this._acc.x = 0;
            this._acc.y = 0;
            this._time = 0;
        }
        cc.systemEvent.setAccelerometerEnabled(this._enabled);
    },
    onDestroy: function onDestroy() {
        cc.systemEvent.setAccelerometerEnabled(false);
        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },
    onDeviceMotionEvent: function onDeviceMotionEvent(event) {
        this._acc.x = event.acc.x;
        this._acc.y = event.acc.y;
    },
    update: function update(dt) {
        var target = this.target,
            range = this._range;
        this._time += 5;
        target.x += this._acc.x * dt * (this.speed + this._time);
        target.x = cc.misc.clampf(target.x, -range.x, range.x);
        target.y += this._acc.y * dt * (this.speed + this._time);
        target.y = cc.misc.clampf(target.y, -range.y, range.y);

        if (target.x <= -range.x || target.x >= range.x || target.y <= -range.y || target.y >= range.y) {
            this._time = 0;
        }
    }
});

cc._RF.pop();