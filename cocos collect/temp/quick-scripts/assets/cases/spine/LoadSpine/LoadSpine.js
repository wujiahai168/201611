(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/spine/LoadSpine/LoadSpine.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '282b2tQFyZNyISOFPjrcQoM', 'LoadSpine', __filename);
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
        //# sourceMappingURL=LoadSpine.js.map
        