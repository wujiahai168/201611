"use strict";
cc._RF.push(module, '282b2tQFyZNyISOFPjrcQoM', 'LoadSpine');
// cases/spine/LoadSpine/LoadSpine.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,
    editor: {
        requireComponent: sp.Skeleton
    },

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    start: function start() {
        cc.loader.loadRes('loadSpine/alien-ess', sp.SkeletonData, this.onProcess.bind(this), this.onComplete.bind(this));
    },
    onProcess: function onProcess(completeCount, totalCount, item) {},
    onComplete: function onComplete(err, res) {
        if (err) {
            this.label.textKey = i18n.t('sprite_loadRes_asset_failed');
            cc.error(err);
        }

        var spine = this.getComponent('sp.Skeleton');
        spine.skeletonData = res;
        var animate = spine.setAnimation(0, 'run', true);
        this.label.textKey = i18n.t('sprite_loadRes_asset_success');
    }
});

cc._RF.pop();