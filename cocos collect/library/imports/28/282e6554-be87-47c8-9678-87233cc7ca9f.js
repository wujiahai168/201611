"use strict";
cc._RF.push(module, '282e6VUvodHyJZ4hyM8x8qf', 'HideOrShowEvent');
// cases/05_scripting/03_events/HideOrShowEvent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        scrollViewContent: cc.Node,
        logItem: cc.Prefab
    },

    onLoad: function onLoad() {
        var self = this;
        cc.game.on(cc.game.EVENT_HIDE, this.addHideLogItem, this);
        cc.game.on(cc.game.EVENT_SHOW, this.addShowLogItem, this);
    },
    onDestroy: function onDestroy() {
        cc.game.off(cc.game.EVENT_HIDE, this.addHideLogItem, this);
        cc.game.off(cc.game.EVENT_SHOW, this.addShowLogItem, this);
    },
    addHideLogItem: function addHideLogItem() {
        var item = cc.instantiate(this.logItem);
        var comp = item.getComponent('HideOrShowEventLogItem');
        comp && comp.setTimeDisplay(this.getTimes());
        comp && comp.setEventDisplay('EVENT_HIDE triggered');
        this.scrollViewContent.addChild(item);
    },
    addShowLogItem: function addShowLogItem() {
        var item = cc.instantiate(this.logItem);
        var comp = item.getComponent('HideOrShowEventLogItem');
        comp && comp.setTimeDisplay(this.getTimes());
        comp && comp.setEventDisplay('EVENT_SHOW triggered');
        this.scrollViewContent.addChild(item);
    },
    getTimes: function getTimes() {
        var date = new Date();
        return '[' + date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds() + ']';
    },
    clearLog: function clearLog() {
        this.scrollViewContent.children.forEach(function (node) {
            node.destroy();
        });
        this.scrollViewContent.children.length = 0;
    }
});

cc._RF.pop();