"use strict";
cc._RF.push(module, 'a0c7fwrZUpN7JS8x9rEtSfl', 'RichTextEvents');
// cases/02_ui/11_richtext/RichTextEvents.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        logMessage: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {},

    clickme: function clickme(event) {
        var clickPosition = event.touch.getLocation();
        this.logMessage.string = "Clicked at: " + parseFloat(clickPosition.x.toFixed()) + ", y = " + parseFloat(clickPosition.y.toFixed(2));
    }

});

cc._RF.pop();