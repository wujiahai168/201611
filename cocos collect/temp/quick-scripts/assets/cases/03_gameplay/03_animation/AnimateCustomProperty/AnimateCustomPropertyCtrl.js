(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fb14cmn7KJJCo4qVcOy/GmS', 'AnimateCustomPropertyCtrl', __filename);
// cases/03_gameplay/03_animation/AnimateCustomProperty/AnimateCustomPropertyCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hp: 0,
        emissionRote: 0,
        num: 0,
        hpBar: cc.ProgressBar,
        particle: cc.ParticleSystem,
        score: cc.Label
    },

    update: function update(dt) {
        this.hpBar.progress = this.hp;
        this.particle.emissionRate = this.emissionRote;
        this.score.string = Math.ceil(this.num);
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
        //# sourceMappingURL=AnimateCustomPropertyCtrl.js.map
        