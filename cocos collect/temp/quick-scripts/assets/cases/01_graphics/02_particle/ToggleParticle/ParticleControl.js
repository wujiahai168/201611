(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '79ae3hiP+JAhIKehaWyiKuh', 'ParticleControl', __filename);
// cases/01_graphics/02_particle/ToggleParticle/ParticleControl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        particle: cc.Node
    },

    toggleParticlePlay: function toggleParticlePlay() {
        var myParticle = this.particle.getComponent(cc.ParticleSystem);
        if (myParticle.particleCount > 0) {
            // check if particle has fully plaed
            myParticle.stopSystem(); // stop particle system
        } else {
            myParticle.resetSystem(); // restart particle system
        }
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
        //# sourceMappingURL=ParticleControl.js.map
        