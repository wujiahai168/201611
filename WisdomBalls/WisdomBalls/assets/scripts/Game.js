var {AStar, Grid} = require("AStar");

cc.Class({
    extends: cc.Component,

    properties: {
        ballPrefab1: cc.Prefab,
        ballPrefab2: cc.Prefab,
        ballPrefab3: cc.Prefab,
        ballPrefab4: cc.Prefab,
        ballPrefab5: cc.Prefab,
        ballPrefab6: cc.Prefab,
        sound1Sprite: cc.Sprite,
        sound2Sprite: cc.Sprite,
        gridNode: cc.Node,
        scoreLabel: cc.Label,
        scoreTip: cc.RichText
    },

    getRandomArr (maxNum, trueNum) {
        let arr = [];
        for (let i = 0; i < maxNum; i++) {
            arr.push(i > trueNum - 1 ? 0 : 1);
        }

        arr.sort(() => {
            return cc.random0To1() > 0.5 ? 1 : -1;
        })

        return arr;
    },

    onLoad() {
        this.GlobalData = cc.find('GlobalData');
        this.AudioPlayer = cc.find('AudioClip').getComponent("AudioClip");
        this.AudioPlayer.stopBgMusic();
        this.AudioPlayer.playBgMusic();
        if (this.AudioPlayer.mute) {
            this.sound1Sprite.node.active = false;
            this.sound2Sprite.node.active = true;
        } else {
            this.sound1Sprite.node.active = true;
            this.sound2Sprite.node.active = false;
        }

        this.scoreTip.node.active = false;

        //行列数
        this.row = 14;
        this.col = 10;
        this.maxNodes = this.row * this.col;

        //格子尺寸
        this.gridSize = 50;

        //每次增加灵珠数
        this.addBallsCount = 4;

        //棋盘边距
        this.paddingLeft = 20;
        this.paddingTop = 150;

        //棋盘在坐标系的起始位置
        this.posTop = 480 - this.paddingTop;
        this.posLeft = -270 + this.paddingLeft;


        this.node1 = undefined;
        this.node2 = undefined;
        this.movingBall = false;
        this.gameOver = false;
        this.toClearBallsArr = [];

        this.score = 0;
        this.displayScore = 0;
        this.updateScore();

        let maxCount = this.row * this.col;
        let startCount = Math.round(maxCount * 0.1);
        let startArr = this.getRandomArr(maxCount, startCount);

        this.grid = new Grid(this.col, this.row);
        this.aStar = new AStar();

        this.mapArr = [];
        this.nodesArr = [];
        for (let i = 0; i < this.col; i++) {
            let arr = [];
            this.mapArr.push(arr);
            for (let j = 0; j < this.row; j++) {
                let value = startArr.pop();
                let node;
                if (value) {
                    let randomId = parseInt(cc.random0To1() * 6 + 1);
                    let Prefab = this['ballPrefab' + randomId];
                    let newBall = cc.instantiate(Prefab);
                    newBall.type = randomId;
                    this.gridNode.addChild(newBall);
                    newBall.setPosition(cc.p(this.posLeft + 25 + i * 50, this.posTop - 25 - j * 50));
                    newBall.scale = 0.3;
                    node = {ball: newBall, val: value, x: i, y: j}
                    arr.push(node);
                    this.grid.setWalkable(i, j, false);
                } else {
                    this.grid.setWalkable(i, j, true);
                    node = {ball: undefined, val: value, x: i, y: j};
                    arr.push(node);
                }
                this.nodesArr.push(node);
            }
        }

        this.gridNode.on('touchend', this.onDown.bind(this));
    },

    btnAction(event, eventData){
        let that = this;
        if (eventData === 'setting') {
            cc.loader.loadRes('Settings', function (err, prefab) {
                var settings = cc.instantiate(prefab);
                that.node.addChild(settings);
            });
        } else if (eventData === 'help') {
            cc.loader.loadRes('Help', function (err, prefab) {
                var help = cc.instantiate(prefab);
                that.node.addChild(help);
            })
        } else if (eventData === 'sound1') {
            this.AudioPlayer.switchMute();
            this.sound1Sprite.node.active = false;
            this.sound2Sprite.node.active = true;
        } else if (eventData === 'sound2') {
            this.AudioPlayer.switchMute();
            this.sound1Sprite.node.active = true;
            this.sound2Sprite.node.active = false;
        }

    },

    updateScore () {
        this.scoreLabel.string = this.displayScore;
    },

    onDown (event) {
        if (this.movingBall) {
            console.log('正在移动小球');
            this.AudioPlayer.playSound('warm');
            return;
        }
        if (this.gameOver) {
            console.log('游戏已结束');
            return;
        }
        // 世界坐标转换为本地坐标
        let worldLocation = event.getLocation();
        let localLocation = this.gridNode.convertToNodeSpace(worldLocation);
        
        let x = localLocation.x;
        let y = localLocation.y;
        x = x - this.paddingLeft;
        y = this.gridNode.height - this.paddingTop - y;
        let colId = Math.floor(x / this.gridSize);
        let rowId = Math.floor(y / this.gridSize);
        if (!(colId >= 0 && colId < this.col && rowId >= 0 && rowId < this.row)) {
            console.log('没有选中格子');
            return;
        }
        let clickNode = this.mapArr[colId][rowId];
        if (!this.node1) {
            if (clickNode.ball) {
                //console.log('选中了小球：', rowId, colId);
                this.node1 = this.mapArr[colId][rowId];
                this.AudioPlayer.playSound('select');
            } else {
                //console.log('请选择一个小球');
                window.wx && window.wx.vibrateShort();
                this.showTip("<color=#00ff00><size=40>请先选择灵珠再移动它</size></color>")
                this.AudioPlayer.playSound('warm');
            }
        } else {
            if (clickNode.ball) {
                //console.log('重新选中了小球：', rowId, colId);
                this.AudioPlayer.playSound('select');
                this.node1 && this.node1.ball && (this.node1.ball.scale = 1);
                this.node1 = this.mapArr[colId][rowId];
            } else {
                this.node2 = this.mapArr[colId][rowId];
                this.grid.setStartNode(this.node1.x, this.node1.y);
                this.grid.setEndNode(this.node2.x, this.node2.y);
                this.grid.setWalkable(this.node1.x, this.node1.y, true);
                if (this.aStar.findPath(this.grid)) {
                    this.AudioPlayer.playSound('select');
                    let pathArr = this.aStar.get_path();
                    pathArr.shift();
                    let ball = this.mapArr[this.node1.x][this.node1.y].ball;
                    this.movingBall = true;
                    this.grid.setWalkable(this.node2.x, this.node2.y, false);
                    this.node2.ball = ball;
                    this.mapArr[this.node1.x][this.node1.y].ball = undefined;
                    let _this = this;
                    this.moveBall(ball, pathArr, function () {
                        setTimeout(() => {
                            _this.toDestroyArr = [];
                            _this.getNodesArrToDestroy(_this.node2);
                            _this.destroyBallsArr(_this.toDestroyArr);
                            _this.node1 && _this.node1.ball && (_this.node1.ball.scale = 1);
                            _this.node1 = undefined;
                            _this.node2 = undefined;
                        }, 200);
                        setTimeout(() => {
                            _this.addBalls(_this.addBallsCount);
                            _this.movingBall = false;
                        }, 400);
                    });
                } else {
                    window.wx && window.wx.vibrateShort();
                    this.showTip("<color=#00ff00><size=40>此路不通</size></color>");
                    this.AudioPlayer.playSound('lose');
                }
            }
        }
    },

    destroyBallsArr (arr) {
        let total = arr.length;
        let addScore = 0;
        for (let i = 0; i < total; i++) {
            //大于5个聚集时才能消除
            let node = arr[i];
            if (total >= 5) {
                addScore += (i + 1) * (i + 1);
                this.toClearBallsArr.push(node.ball);
                this.grid.setWalkable(node.x, node.y, true);
                this.mapArr[node.x][node.y].ball = undefined;
            } else {
                node.ball.selected = false;
            }
        }
        if (addScore) {
            this.AudioPlayer.playSound('clear', 1.5);
            this.score += addScore;
            this.showTip(`<color=#00ff00>+</color><color=#0fffff>${addScore}</color>`);
        }
    },

    getNodesArrToDestroy (originNode) {
        let neiborNodesArr = this.getNeiborNode(originNode);
        for (let i = 0; i < neiborNodesArr.length; i++) {
            let node = neiborNodesArr[i];
            if (node.ball.type === originNode.ball.type && !node.ball.selected) {
                node.ball.selected = true;
                this.toDestroyArr.push(node);
                this.getNodesArrToDestroy(node);
            }
        }
    },

    moveBall (ball, pathArr, onComplete) {
        let node = pathArr.shift();
        let newPosition = cc.p(this.posLeft + 25 + node.x * this.gridSize, this.posTop - 25 - node.y * this.gridSize);
        ball.setPosition(newPosition);
        this.AudioPlayer.playSound('move', 0.7);
        let _this = this;
        if (pathArr.length) {
            setTimeout(() => {
                _this.moveBall(ball, pathArr, onComplete)
            }, 50);
        } else {
            onComplete();
        }
    },

    addBalls (count) {
        let arr = this.getAllEmptyNodes();
        arr.sort(() => {
            return cc.random0To1() > 0.5 ? 1 : -1;
        });
        if (arr.length > count) {
            arr.length = count;
        }
        for (let i = 0; i < arr.length; i++) {
            let node = arr[i];
            let randomId = parseInt(cc.random0To1() * 6 + 1);
            let Prefab = this['ballPrefab' + randomId];
            let newBall = cc.instantiate(Prefab);
            newBall.type = randomId;
            this.gridNode.addChild(newBall);
            newBall.setPosition(cc.p(this.posLeft + 25 + node.x * this.gridSize, this.posTop - 25 - node.y * this.gridSize));
            newBall.scale = 0.3;
            this.mapArr[node.x][node.y].ball = newBall;
            this.grid.setWalkable(node.x, node.y, false);
        }
        if (this.getAllEmptyNodes().length === 0) {
            console.log('游戏结束！');
            this.gameOver = true;
            this.GlobalData.currentScore = this.score;
            let _this = this;
            setTimeout(function () {
                _this.AudioPlayer.playSound('gameOver');
                cc.director.loadScene('Statics');
            }, 1000);
        }
    },

    getAllEmptyNodes () {
        let arr = [];
        for (let i = 0; i < this.maxNodes; i++) {
            let node = this.nodesArr[i];
            if (!node.ball) {
                arr.push(node);
            }
        }
        return arr;
    },

    getNeiborNode (node) {
        let arr = [];
        let temNode;
        if (node.y > 0) {
            temNode = this.mapArr[node.x][node.y - 1];
            if (temNode.ball) {
                arr.push(temNode);
            }
            temNode = undefined;
        }
        if (node.y < this.row - 1) {
            temNode = this.mapArr[node.x][node.y + 1];
            if (temNode.ball) {
                arr.push(temNode);
            }
            temNode = undefined;
        }

        if (node.x > 0) {
            temNode = this.mapArr[node.x - 1][node.y];
            if (temNode.ball) {
                arr.push(temNode);
            }
            temNode = null;
        }
        if (node.x < this.col - 1) {
            temNode = this.mapArr[node.x + 1][node.y];
            if (temNode.ball) {
                arr.push(temNode);
            }
            temNode = null;
        }
        return arr;
    },

    showTip (msg) {
        this.scoreTip.string = msg;
        this.scoreTip.node.y = 130;
        this.scoreTip.node.targetY = this.scoreTip.node.y + 150;
        this.scoreTip.node.active = true;
        this.scoreTip.node.zIndex = 10000;
    },

    update(dt) {
        //选中的珠子的动画
        if (this.node1 && this.node1.ball) {
            let ball = this.node1.ball;
            let scale = ball.scale;
            let scaleDirection = ball.scaleDirection || -1;
            if (scaleDirection === -1) {
                scale -= 0.02;
                if (scale <= 0.7) {
                    ball.scaleDirection = 1;
                }
            } else {
                scale += 0.02;
                if (scale >= 1) {
                    ball.scaleDirection = -1;
                }
            }
            ball.scale = scale;
        }
        //新增珠子动画
        for (let i = 0; i < this.maxNodes; i++) {
            let node = this.nodesArr[i];
            if (node.ball && node !== this.node1 && node.ball.scale < 1) {
                let scale = node.ball.scale + 0.08;
                node.ball.scale = Math.min(scale, 1);
            }
        }
        //清除珠子动画
        if (this.toClearBallsArr.length) {
            let temArr = [];
            for (let i = 0; i < this.toClearBallsArr.length; i++) {
                let node = this.toClearBallsArr[i];
                node.scale -= 0.05;
                if (node.scale < 0.2) {
                    node.destroy();
                } else {
                    temArr.push(node);
                }
            }
            this.toClearBallsArr = temArr;
        }
        //得分数字滚动动画
        if (this.displayScore < this.score) {
            this.displayScore += Math.floor((this.score - this.displayScore) * 0.3) + 1;
            this.displayScore = Math.min(this.score, this.displayScore);
            this.updateScore();
        }
        //得分提示动画
        if (this.scoreTip.node.active) {
            this.scoreTip.node.y += (this.scoreTip.node.targetY - this.scoreTip.node.y) * 0.05;
            if (this.scoreTip.node.y >= this.scoreTip.node.targetY - 5) {
                this.scoreTip.node.active = false;
            }
        }
    },
});
