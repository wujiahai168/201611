(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/11_network/downloader-native/DownloaderCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '354a9KeL3pPRKzLyRBzHqyl', 'DownloaderCtrl', __filename);
// cases/05_scripting/11_network/downloader-native/DownloaderCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label,
        sprite: cc.Sprite,
        imgUrl: "http://www.cocos.com/wp-content/themes/cocos/img/download1.png",
        txtUrl: "https://raw.githubusercontent.com/cocos-creator/tutorial-dark-slash/master/LICENSE.md",
        tempImgUrl: "http://www.cocos.com/wp-content/uploads/2018/03/%E9%BB%98%E8%AE%A4%E6%A0%87%E9%A2%98_%E5%85%AC%E4%BC%97%E5%8F%B7%E5%BA%95%E9%83%A8%E4%BA%8C%E7%BB%B4%E7%A0%81_2018.03.08.png",
        audioUrl: "http://tools.itharbors.com/christmas/res/sounds/ss.mp3",
        _downloader: null,
        _imgTask: null,
        _txtTask: null,
        _audioTask: null,
        _storagePath: "",
        _inited: false
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (!CC_JSB) {
            this.label.string = 'Downloader is a NATIVE ONLY feature.';
            return;
        }

        this._downloader = new jsb.Downloader();
        this._downloader.setOnFileTaskSuccess(this.onSucceed.bind(this));
        this._downloader.setOnTaskProgress(this.onProgress.bind(this));
        this._downloader.setOnTaskError(this.onError.bind(this));
        this._storagePath = jsb.fileUtils.getWritablePath() + '/example-cases/downloader/';
        this._inited = jsb.fileUtils.createDirectory(this._storagePath);
        if (!this._inited) {
            this.label.string = 'Failed to create storage path, downloader won\'t work correctly';
        }
        this._audioID = -1;
    },
    onSucceed: function onSucceed(task) {
        var _this = this;

        if (this._audioID !== -1) {
            cc.audioEngine.stop(this._audioID);
        }
        switch (task.requestURL) {
            case this.imgUrl:
                cc.loader.load(task.storagePath, function (err, tex) {
                    _this.sprite.spriteFrame = new cc.SpriteFrame(tex);
                    _this.sprite.node.active = true;
                    _this.label.node.active = false;
                });
                break;
            case this.txtUrl:
                var content = jsb.fileUtils.getStringFromFile(task.storagePath);
                this.sprite.node.active = false;
                this.label.node.active = true;
                this.label.string = content.substr(0, 350);
                break;
            case this.audioUrl:
                this.sprite.node.active = false;
                this.label.node.active = true;
                this.label.string = 'Audio Download Complete.';
                cc.loader.load(task.storagePath, function (err, clip) {
                    _this._audioID = cc.audioEngine.play(clip);
                });
        }
    },
    onProgress: function onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected) {},
    onError: function onError(task, errorCode, errorCodeInternal, errorStr) {
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = 'Failed to download file (' + task.requestURL + '): ' + errorStr + '(' + errorCode + ')';
    },
    downloadImg: function downloadImg() {
        if (!this.imgUrl || !this._inited) {
            return;
        }
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = 'Downloading image';
        this._imgTask = this._downloader.createDownloadFileTask(this.imgUrl, this._storagePath + 'download1.png');
    },
    loadImg: function loadImg() {
        var _this2 = this;

        if (!this.tempImgUrl || !this._inited) {
            return;
        }
        cc.loader.load(this.tempImgUrl, function (error, tex) {
            if (error) {
                console.log("Load remote image failed: " + error);
            } else {
                _this2.sprite.spriteFrame = new cc.SpriteFrame(tex);
                _this2.sprite.node.active = true;
                _this2.label.node.active = false;
                cc.audioEngine.stop(_this2._audioID);
            }
        });
    },
    downloadTxt: function downloadTxt() {
        if (!this.txtUrl || !this._inited) {
            return;
        }
        this.label.node.active = true;
        this.sprite.node.active = false;
        this.label.string = 'Downloading Txt';
        this._txtTask = this._downloader.createDownloadFileTask(this.txtUrl, this._storagePath + 'imagine.txt');
    },
    downloadAudio: function downloadAudio() {
        if (!this.audioUrl || !this._inited) {
            return;
        }
        this.sprite.node.active = false;
        this.label.node.active = true;
        this.label.string = 'Downloading Audio';
        this._audioTask = this._downloader.createDownloadFileTask(this.audioUrl, this._storagePath + 'audioTest.mp3');
    },
    onDisable: function onDisable() {
        cc.audioEngine.stop(this._audioID);
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
        //# sourceMappingURL=DownloaderCtrl.js.map
        