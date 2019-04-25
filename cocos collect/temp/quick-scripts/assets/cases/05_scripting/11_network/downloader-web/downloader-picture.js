(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/11_network/downloader-web/downloader-picture.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3d00dQT3HNGKavyQVCwTT1h', 'downloader-picture', __filename);
// cases/05_scripting/11_network/downloader-web/downloader-picture.js

'use strict';

var i18n = require('i18n');

cc.Class({
    extends: cc.Component,

    properties: {
        remindLabel: {
            default: null,
            type: cc.Label
        },
        inputUrlBox: {
            default: null,
            type: cc.EditBox
        },
        picNode: {
            default: null,
            type: cc.Sprite
        },
        _picUrl: 'http://tools.itharbors.com/christmas/res/tree.png'
    },

    onLoad: function onLoad() {
        this.remindLabel.textKey = '';
    },
    startLoad: function startLoad() {
        // set url
        this._picUrl = this.inputUrlBox.string;
        // download pic
        if (this._picUrl) {
            cc.loader.load({ url: this._picUrl, type: 'png' }, this.onProgress.bind(this), this.picLoadComplete.bind(this));
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.2');
        } else {
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.10');
        }
    },
    picLoadComplete: function picLoadComplete(err, res) {
        if (err || !res) {
            console.log(err);
            this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.5.2');
            return;
        }

        this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.4.2');

        var spriteFrame = new cc.SpriteFrame(res);
        this.picNode.spriteFrame = spriteFrame;
        this.picNode.node.active = true;
    },
    onProgress: function onProgress(completedCount, totalCount) {
        this.remindLabel.textKey = i18n.t('cases/05_scripting/11_network/download-web.fire.3') + ' ' + completedCount / totalCount * 100;
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
        //# sourceMappingURL=downloader-picture.js.map
        