(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/07_asset_loading/LoadResDir/loadResDir_example.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fee3dcLoaZCvrJ9FZrBngbb', 'loadResDir_example', __filename);
// cases/05_scripting/07_asset_loading/LoadResDir/loadResDir_example.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

cc.Class({
    extends: cc.Component,

    properties: {
        btnClearAll: cc.Node,
        label: cc.Prefab,
        scrollView: cc.ScrollView
    },

    _init: function _init() {
        this._assets = [];
        this._hasLoading = false;
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
    },

    onLoad: function onLoad() {
        this._init();
    },

    _createLabel: function _createLabel(text) {
        var node = cc.instantiate(this.label);
        var label = node.getComponent(cc.Label);
        label.textKey = text;
        this.scrollView.content.addChild(node);
    },

    _clear: function _clear() {
        this.scrollView.content.removeAllChildren(true);
        for (var i = 0; i < this._assets.length; ++i) {
            var asset = this._assets[i];
            // 目前载入 plist 后的 Object 资源没有包含 _uuid 所以无法 release（PS：1.5 版本会加 _uuid）
            // 暂时过滤 Object 并且没有 _uuid 类型的资源
            if ((typeof asset === "undefined" ? "undefined" : _typeof(asset)) === 'object' && !asset._uuid) {
                continue;
            }
            // 需要释放所有资源依赖
            var deps = cc.loader.getDependsRecursively(asset);
            cc.loader.release(deps);
        }
    },

    onClearAll: function onClearAll() {
        this.scrollView.content.height = 0;
        this.btnClearAll.active = false;
        this._clear();
    },

    onLoadAll: function onLoadAll() {
        var _this = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;

        this._clear();
        this._createLabel("Load All Assets");
        this.scrollView.scrollToTop();

        cc.loader.loadResDir("test_assets", function (err, assets) {
            if (!_this.isValid) {
                return;
            }

            _this._assets = assets;
            for (var i = 0; i < assets.length; ++i) {
                var asset = assets[i];
                var info = asset.toString();
                if (!info) {
                    if (asset instanceof cc.JsonAsset) {
                        info = JSON.stringify(asset.json, null, 4);
                    } else {
                        info = info || asset.name || cc.js.getClassName(asset);
                    }
                }
                _this._createLabel(info);
            }
            _this._hasLoading = false;
            _this.btnClearAll.active = true;
        });
    },

    onLoadSpriteFrameAll: function onLoadSpriteFrameAll() {
        var _this2 = this;

        if (this._hasLoading) {
            return;
        }
        this._hasLoading = true;

        this._clear();
        this._createLabel("Load All Sprite Frame");
        this.scrollView.scrollToTop();

        cc.loader.loadResDir("test_assets", cc.SpriteFrame, function (err, assets) {
            if (!_this2.isValid) {
                return;
            }
            _this2._assets = assets;
            for (var i = 0; i < assets.length; ++i) {
                var asset = assets[i];
                _this2._createLabel(asset.name);
            }
            _this2._hasLoading = false;
            _this2.btnClearAll.active = true;
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
        //# sourceMappingURL=loadResDir_example.js.map
        