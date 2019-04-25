"use strict";
cc._RF.push(module, '9df59JrUQBON5MdA5XnLTjl', 'fullscreenVideoPlayer');
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