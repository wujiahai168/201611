"use strict";
cc._RF.push(module, 'b8603ZTz2JHKadF2qYm6voj', 'HideOrShowEventLogItem');
// cases/05_scripting/03_events/HideOrShowEventLogItem.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
        eventLabel: cc.Label
    },

    setTimeDisplay: function setTimeDisplay(value) {
        this.timeLabel.string = value;
    },
    setEventDisplay: function setEventDisplay(value) {
        this.eventLabel.string = value;
    }
});

cc._RF.pop();