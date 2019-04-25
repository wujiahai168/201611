"use strict";
cc._RF.push(module, '04525pyYBlN26SWawaUF3dA', 'Menu');
// main menu/Menu.js

'use strict';

var i18n = require('i18n');
var SceneList = require('SceneList');
var TipsManager = require('TipsManager');

var MainScene = 'TestList.fire';

cc.Class({
    extends: cc.Component,

    properties: {
        text: cc.Label,
        readme: cc.ScrollView,
        btnInfo: cc.Button,
        btnBack: cc.Button,
        testList: cc.ScrollView,
        uiCamera: cc.Camera,
        sceneTitle: cc.Label
    },

    onLoad: function onLoad() {
        var _this = this;

        this._isLoadingScene = false;
        this.showDebugDraw = false;
        cc.game.addPersistRootNode(this.node);
        this.currentSceneUrl = MainScene;
        this.contentPos = null;
        this.btnBack.node.active = false;
        this.loadInstruction(this.currentSceneUrl);
        this.node.zIndex = 999;

        cc.game.addPersistRootNode(this.testList.node);
        if (this.testList && this.testList.content) {
            // in main scene
            this.sceneList = this.testList.content.getComponent(SceneList);
            this.sceneList.init(this);
        }
        if (typeof cocosAnalytics !== 'undefined' && cocosAnalytics.isInited && cocosAnalytics.isInited()) {
            // Cocos Analytics service, to learn more please visit:
            // https://analytics.cocos.com/docs/
            cocosAnalytics.CAEvent.onEvent({
                eventName: "打开范例"
            });
        }

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            if (event.keyCode === cc.macro.KEY.b || event.keyCode === cc.macro.KEY.back) {
                _this.backToList();
            }
        }, this);

        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this._onSceneLaunched, this);
    },

    _onSceneLaunched: function _onSceneLaunched() {
        var cameras = cc.Camera.cameras;
        for (var i = 0, l = cameras.length; i < l; i++) {
            var camera = cameras[i];
            if (camera === this.uiCamera) {
                camera.cullingMask = 1 << this.node.groupIndex;
            } else {
                camera.cullingMask = camera.cullingMask & ~(1 << this.node.groupIndex);
            }
        }
    },


    backToList: function backToList() {
        this.loadScene(MainScene);
    },

    loadScene: function loadScene(url) {
        if (this._isLoadingScene) {
            return;
        }
        this._isLoadingScene = true;

        this.showReadme(null, false);
        this.contentPos = this.testList.getContentPosition();

        this.currentSceneUrl = url;
        cc.director.loadScene(url, this.onLoadSceneFinish.bind(this));

        if (typeof cocosAnalytics !== 'undefined' && cocosAnalytics.isInited && cocosAnalytics.isInited()) {
            // Cocos Analytics service, to learn more please visit:
            // https://analytics.cocos.com/docs/
            cocosAnalytics.CALevels.begin({
                level: url
            });
        }
    },

    onLoadSceneFinish: function onLoadSceneFinish() {
        var url = this.currentSceneUrl;
        this.loadInstruction(url);

        this.testList.node.active = false;

        var isMenu = url.endsWith(MainScene);
        this.btnBack.node.active = this.sceneTitle.node.active = !isMenu;
        this.testList.node.active = isMenu;
        if (isMenu) {
            if (this.contentPos) {
                this.testList.setContentPosition(this.contentPos);
            }
        } else {
            this.sceneTitle.string = url.replace('db://assets/cases/', '');
        }

        this._isLoadingScene = false;
    },

    _getAdjacentScenes: function _getAdjacentScenes() {
        var _this2 = this;

        var res = { next: '', prev: '' };
        var sceneList = this.sceneList.sceneList;

        function findAvailableScene(startIndex, step) {
            for (var i = startIndex; 0 <= i && i < sceneList.length; i += step) {
                var url = sceneList[i].url;
                if (url) {
                    var sceneName = cc.path.basename(url, '.fire');
                    var available = TipsManager.hasSupport(sceneName, true);
                    if (available) {
                        return url;
                    }
                }
            }
            return MainScene;
        }

        if (this.currentSceneUrl.endsWith(MainScene)) {
            res.next = findAvailableScene(0, 1);
            res.prev = findAvailableScene(sceneList.length - 1, -1);
        } else {
            // findIndex
            var i = -1;
            sceneList.some(function (item, index) {
                if (item.url === _this2.currentSceneUrl) {
                    i = index;
                    return true;
                }
                return false;
            });

            if (i !== -1) {
                res.next = findAvailableScene(i + 1, 1);
                res.prev = findAvailableScene(i - 1, -1);
            }
        }
        return res;
    },
    nextScene: function nextScene() {
        var _getAdjacentScenes2 = this._getAdjacentScenes(),
            next = _getAdjacentScenes2.next;

        if (next) {
            this.loadScene(next);
        }
    },
    prevScene: function prevScene() {
        var _getAdjacentScenes3 = this._getAdjacentScenes(),
            prev = _getAdjacentScenes3.prev;

        if (prev) {
            this.loadScene(prev);
        }
    },


    loadInstruction: function loadInstruction(url) {
        var self = this;
        var urlArr = url.split('/');
        var fileName = urlArr[urlArr.length - 1].replace('.fire', '');
        cc.loader.loadRes('readme/' + fileName, cc.TextAsset, function (err, asset) {
            if (err) {
                self.text.string = i18n.t("scripts/Global/Menu.js.1");
                return;
            }
            self.text.string = asset.text;
        });
    },

    showReadme: function showReadme(event, active) {
        if (active === undefined) {
            active = !this.readme.node.active;
        }

        this.readme.node.active = active;
        if (active) {
            this.readme.scrollToTop();
        }

        // en: fix Collider DebugDraw always displayed on top of the problem.
        // zh：解决 Collider DebugDraw 一直显示在最上层的问题。
        var enabledDebugDraw = cc.director.getCollisionManager().enabledDebugDraw;
        if (this.readme.node.active) {
            this.showDebugDraw = enabledDebugDraw;
            cc.director.getCollisionManager().enabledDebugDraw = false;
        } else {
            cc.director.getCollisionManager().enabledDebugDraw = this.showDebugDraw;
        }

        // en: fix Video Player always displayed on top of the problem.
        // zh：修复 Video Player 一直显示在最上层的问题。
        var videoPlayer = cc.find('Canvas/VideoPlayer');
        if (videoPlayer) {
            videoPlayer.active = !this.readme.node.active;
        }
    },

    restart: function restart() {
        cc.game.restart();
    },

    gc: function gc() {
        cc.sys.garbageCollect();
    }
});

cc._RF.pop();