/**
 * @fileoverview 游戏界面控制脚本
 */

let RPS_TYPE = require('Constants').RPS_TYPE;
let Utils = require('Utils');

cc.Class({
    extends: cc.Component,
    // 声明脚本中用到的节点对象，一般是需要改变状态的节点
    // 另外需要在 CocosCreator 中把相应节点绑定到以下变量中
    properties: {
        play1ImageNode: cc.Node,
        myChooseLayout: cc.Layout,
        rpsPrefab: cc.Prefab,
        play1ScoreLabel: cc.Label,
        myScoreLabel: cc.Label,
        beginBtn: cc.Node,
        gameResultDialog: cc.Node,
        gameResult: cc.Label,
    },
    /**
     * @description 场景启动时调用此方法
     */
    onLoad() {

        this.totalTime = 0;
        this.play1ImageInterval = 0.1;
        this.myScore = 0;
        this.play1Score = 0;
        this.isGameRunning = false;
        this.play1RpsType = RPS_TYPE.ROCK;

        this.addRPSNode(RPS_TYPE.ROCK);
        this.addRPSNode(RPS_TYPE.PAPER);
        this.addRPSNode(RPS_TYPE.SCISSOR);
    },
    /**
     * @description 添加玩家的剪刀石头布节点
     * @param {*} type 
     */
    addRPSNode: function (type) {
        let rpsNode = cc.instantiate(this.rpsPrefab);
        rpsNode.getComponent("RPSPrefabController").setData(type);
        rpsNode.getComponent("RPSPrefabController").setOnClickListener((type) => {
            this.myChooseItemClicked(type);
        });
        let childNum = this.myChooseLayout.node.children.length;
        this.myChooseLayout.node.addChild(rpsNode);
        rpsNode.y = 0;
    },
    /**
     * @description 玩家选择了剪刀石头布
     * @param {*} type 
     */
    myChooseItemClicked: function (type) {
        if (this.isGameRunning == false) {
            return;
        }
        this.isGameRunning = false;
        this.beginBtn.active = true;

        if (type == this.play1RpsType) { // 平局
            this.showWinOrLossDialog("本局平");
        } else {
            if ((type == 0 || type == 2) && (this.play1RpsType == 0 || this.play1RpsType == 2)) {
                this.changeScore(type == 0);
            } else {
                this.changeScore(type > this.play1RpsType);
            }
        }
    },
    /**
     * @description 玩家选择后，根据是否胜利来增加分数和改变游戏状态
     * @param {*} isIWin 
     */
    changeScore: function (isIWin) {
        if (isIWin) {
            this.myScore++;
            this.myScoreLabel.string = "我的得分: " + this.myScore;
            this.showWinOrLossDialog("本局胜");
        } else {
            this.play1Score++;
            this.play1ScoreLabel.string = "对方得分: " + this.play1Score;
            this.showWinOrLossDialog("本局负")
        }
    },
    /**
     * @description 展示输赢弹窗
     * @param {*} statusStr 
     */
    showWinOrLossDialog: function (statusStr) {
        this.gameResultDialog.active = true;
        this.gameResult.string = statusStr;
        this.gameResultDialog.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(0.2), cc.callFunc(() => {
            this.gameResultDialog.opacity = 255;
            this.gameResultDialog.active = false;
        })));
    },
    /**
     * @description 开始游戏按钮点击调用
     */
    beginBtnClicked: function () {
        this.isGameRunning = true;
        this.beginBtn.active = false;
    },

    /**
     * @description 游戏运行时每帧调用此方法，这里主要实现电脑石头剪刀布的不断切换功能
     * @param {} dt 
     */
    update(dt) {

        if (this.isGameRunning) {
            if (this.totalTime >= this.play1ImageInterval) {
                this.totalTime -= this.play1ImageInterval;

                if (this.play1RpsType == 2) {
                    this.play1RpsType = 0;
                } else {
                    this.play1RpsType++;
                }
                cc.loader.loadRes(Utils.getImagePathByType(this.play1RpsType), (err, img) => {
                    this.play1ImageNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(img);
                });
            } else {
                this.totalTime += dt;
            }
        }
    },
});