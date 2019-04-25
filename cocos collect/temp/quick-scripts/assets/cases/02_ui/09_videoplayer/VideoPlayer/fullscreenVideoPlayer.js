(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayer/fullscreenVideoPlayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer', __filename);
// cases/02_ui/09_videoplayer/VideoPlayer/fullscreenVideoPlayer.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        tempVidePlay: cc.Prefab
    },

    start: function start() {
        var _this = this;

        this.node.on('touchend', function () {
            var node = cc.instantiate(_this.tempVidePlay);
            node.parent = cc.find('Canvas');
            var videoPlayer = node.getComponent(cc.VideoPlayer);
            videoPlayer.enabled = true;
            videoPlayer.isFullscreen = true;
            videoPlayer.play();
        });
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
        //# sourceMappingURL=fullscreenVideoPlayer.js.map
        