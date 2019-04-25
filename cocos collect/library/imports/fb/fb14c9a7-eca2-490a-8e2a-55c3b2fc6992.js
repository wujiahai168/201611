"use strict";
cc._RF.push(module, 'fb14cmn7KJJCo4qVcOy/GmS', 'AnimateCustomPropertyCtrl');
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