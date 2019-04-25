const i18n = require('i18n');
const TipsManager = require('TipsManager');

cc.Class({
    extends: cc.Component,

    properties: {
        videoPlayer: {
            default: null,
            type: cc.VideoPlayer
        },
        statusLabel: {
            default: null,
            type: cc.Label
        },
        currentTime: {
            default: null,
            type: cc.Label
        },
        totalTime: {
            default: null,
            type: cc.Label
        },
        resSwitchBtnLabel: {
            default: null,
            type: cc.Label
        },
        _resStatus: false,
    },
    start () {
        TipsManager.init();
    },

    play () {
        this.videoPlayer.play();
    },

    pause () {
        this.videoPlayer.pause();
    },

    toggleFullscreen () {
        if (
            cc.sys.isBrowser &&
            cc.sys.browserType === cc.sys.BROWSER_TYPE_MOBILE_QQ &&
            cc.sys.browserVersion <= 7.2 &&
            /Nexus 6/.test(navigator.userAgent)
        ) {
            TipsManager.createTips(i18n.t('cases/02_ui/09_videoplayer/videoPlayer.nonsupport_fullscreen'));
            return cc.log('May be crash, so prohibit full screen');
        }
        this.videoPlayer.isFullscreen = true;
    },

    stop () {
        this.videoPlayer.stop();
    },

    keepRatioSwitch () {
        this.videoPlayer.keepAspectRatio = !this.videoPlayer.keepAspectRatio;
    },

    getStatus (event) {
        switch (event) {
            case cc.VideoPlayer.EventType.PLAYING:
                return 'PLAYING';
            case cc.VideoPlayer.EventType.PAUSED:
                return 'PAUSED';
            case cc.VideoPlayer.EventType.STOPPED:
                return 'STOPPED';
            case cc.VideoPlayer.EventType.COMPLETED:
                return 'COMPLETED';
            case cc.VideoPlayer.EventType.META_LOADED:
                return 'META_LOADED';
            case cc.VideoPlayer.EventType.CLICKED:
                return 'CLICKED';
            case cc.VideoPlayer.EventType.READY_TO_PLAY:
                return 'READY_TO_PLAY';
            default:
                return 'NONE';
        }
    },

    onVideoPlayerEvent (sender, event) {
        this.statusLabel.string = this.getStatus(event);
        if (event === cc.VideoPlayer.EventType.META_LOADED) {
            var duration = this.videoPlayer.getDuration();
            if (duration) {
                this.totalTime.string = duration.toFixed(2);
            }
            else {
                this.totalTime.string = 0;
            }
        }
        else if (event === cc.VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying()) {
                this.videoPlayer.pause();
            } else {
                this.videoPlayer.play();
            }
        }
    },

    toggleVisibility () {
        this.videoPlayer.enabled = !this.videoPlayer.enabled;
    },

    playOnlineVideo () {
        this.videoPlayer.remoteURL = 'http://benchmark.cocos2d-x.org/cocosvideo.mp4';
        this._resStatus = !this._resStatus;
        this.resSwitchBtnLabel.string = this._resStatus ? 'Switch Resource To Local' : 'Switch Resource To Remote';
        this.videoPlayer.resourceType = this._resStatus ? cc.VideoPlayer.ResourceType.REMOTE : cc.VideoPlayer.ResourceType.LOCAL;
    },

    update () {
        if (this.currentTime && this.videoPlayer.currentTime) {
            this.currentTime.string = this.videoPlayer.currentTime.toFixed(2);
        }
    }

});
