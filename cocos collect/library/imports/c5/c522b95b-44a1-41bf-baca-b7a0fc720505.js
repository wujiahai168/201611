"use strict";
cc._RF.push(module, 'c522blbRKFBv7rKt6D8cgUF', 'FullscreenVideoPlayerEvent');
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