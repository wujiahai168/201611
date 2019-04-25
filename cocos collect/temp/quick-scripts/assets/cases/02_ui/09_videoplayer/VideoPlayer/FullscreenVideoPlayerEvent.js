(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/09_videoplayer/VideoPlayer/FullscreenVideoPlayerEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c522blbRKFBv7rKt6D8cgUF', 'FullscreenVideoPlayerEvent', __filename);
// cases/02_ui/09_videoplayer/VideoPlayer/FullscreenVideoPlayerEvent.js

"use strict";

var videoPlayer = null;

cc.Class({
    extends: cc.Component,

    videoPlayerEvent: function videoPlayerEvent(sender, event) {
        if (!videoPlayer) {
            videoPlayer = this.node.getComponent(cc.VideoPlayer);
        }
        if (event === cc.VideoPlayer.EventType.COMPLETED) {
            videoPlayer.isFullscreen = false;
            videoPlayer.node.removeFromParent();
            videoPlayer = null;
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
        //# sourceMappingURL=FullscreenVideoPlayerEvent.js.map
        