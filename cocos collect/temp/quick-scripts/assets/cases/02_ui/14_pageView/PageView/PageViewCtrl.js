(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/02_ui/14_pageView/PageView/PageViewCtrl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'becf9ZpBi5KG43ard9opUPT', 'PageViewCtrl', __filename);
// cases/02_ui/14_pageView/PageView/PageViewCtrl.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        curNum: 3,
        curTotal: 10,
        pageTeample: cc.Prefab,
        target: cc.PageView,
        label: cc.Label
    },

    _createPage: function _createPage() {
        var page = cc.instantiate(this.pageTeample);
        page.position = new cc.v2(0, 0);
        var color = new cc.Color();
        color.r = Math.floor(Math.random() * 255);
        color.g = Math.floor(Math.random() * 255);
        color.b = Math.floor(Math.random() * 255);
        page.color = color;
        return page;
    },
    onLoad: function onLoad() {
        // 设置的当前页面为 1
        this.target.setCurrentPageIndex(0);
    },
    update: function update() {
        // 当前页面索引
        this.label.string = "第" + (this.target.getCurrentPageIndex() + 1) + "页";
    },


    // 返回首页
    onJumpHome: function onJumpHome() {
        // 第二个参数为滚动所需时间，默认值为 0.3 秒
        this.target.scrollToPage(0);
    },


    // 添加页面
    plusPage: function plusPage(callback) {
        if (this.curNum > this.curTotal) {
            return;
        }
        this.curNum++;
        if (callback) {
            callback();
        }
    },


    // 减少页面
    lessPageNum: function lessPageNum(callback) {
        if (this.curNum <= 0) {
            return;
        }
        this.curNum--;
        if (callback) {
            callback();
        }
    },


    // 添加页面
    onAddPage: function onAddPage() {
        var _this = this;

        this.plusPage(function () {
            _this.target.addPage(_this._createPage());
        });
    },


    // 插入当前页面
    onInsertPage: function onInsertPage() {
        var _this2 = this;

        this.plusPage(function () {
            _this2.target.insertPage(_this2._createPage(), _this2.target.getCurrentPageIndex());
        });
    },


    // 移除最后一个页面
    onRemovePage: function onRemovePage() {
        var _this3 = this;

        this.lessPageNum(function () {
            var pages = _this3.target.getPages();
            _this3.target.removePage(pages[pages.length - 1]);
        });
    },


    // 移除当前页面
    onRemovePageAtIndex: function onRemovePageAtIndex() {
        var _this4 = this;

        this.lessPageNum(function () {
            _this4.target.removePageAtIndex(_this4.target.getCurrentPageIndex());
        });
    },


    // 移除所有页面
    onRemoveAllPage: function onRemoveAllPage() {
        this.target.removeAllPages();
        this.curNum = 0;
    },


    // 监听事件
    onPageEvent: function onPageEvent(sender, eventType) {
        // 翻页事件
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
            return;
        }
        console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
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
        //# sourceMappingURL=PageViewCtrl.js.map
        