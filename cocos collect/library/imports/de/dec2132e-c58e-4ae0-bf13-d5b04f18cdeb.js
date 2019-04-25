"use strict";
cc._RF.push(module, 'dec21MuxY5K4L8T1bBPGM3r', 'Desactiver');
// cases/05_scripting/03_events/Desactiver.js

"use strict";

cc.Class({
    extends: cc.Component,

    desactivate: function desactivate() {
        this.node.active = false;
    }
});

cc._RF.pop();