/**
 * @fileoverview 剪刀石头布 Prefab 对应的脚本，实现点击事件和对应效果
 */

let Utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        imageNode: cc.Node
    },

    onLoad () {
    },

    start () {

    },

    update (dt) {

    },
    /**
     * @description 设置图片
     * @param {*} rpsType 
     */
    setData: function(rpsType) {
        this.type = rpsType;
        cc.loader.loadRes(Utils.getImagePathByType(rpsType), (err, img) => {
            this.imageNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(img);
        });
    },
    /**
     * @description 设置点击回调方法
     * @param {*} clickCallback 
     */
    setOnClickListener: function(clickCallback) {
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            clickCallback(this.type);
        }, this);
    }
});
