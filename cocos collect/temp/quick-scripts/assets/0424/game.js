(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/0424/game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0fc64xBOMVM2psvtJoeisMY', 'game', __filename);
// 0424/game.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

// window.global = {
//     score_int = 0,
// };

var Global = require("global");

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            type: cc.Node,
            default: null
        },

        enemy: {
            type: cc.Prefab,
            default: null
        },

        speed: 10,

        accSpeedInt: 0.2,

        particle: {
            type: cc.ParticleAsset,
            default: null
        },

        particleNode: {
            type: cc.Node,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.p = cc.find("Canvas/player");
        this.p.color = new cc.Color(255, 0, 0);

        this.schedule(this.spawnEnemy, 1, 1000);
    },
    start: function start() {
        this.particleX = 0;
        this.particleY = 0;
    },
    update: function update(dt) {

        this.particleNode.x = this.particleNode.x + 10;

        //this.particleNode.x = this.particleX + 50 * dt * ( Math.random() > 0.5 ? -1 : 1 );
        //this.particleNode.Y = this.particleY + 50 * dt * ( Math.random() > 0.5 ? -1 : 1 );

        if (this.accLeft) {
            this.accSpeed += dt + this.accSpeedInt;
            this.p.x -= this.accSpeed * this.speed;
        }
        if (this.accRight) {
            this.accSpeed += dt + this.accSpeedInt;
            this.p.x += this.accSpeed * this.speed;
        }
        if (this.accUp) {
            this.accSpeed += dt + this.accSpeedInt;
            this.p.y += this.accSpeed * this.speed;
        }
        if (this.accDown) {
            this.accSpeed += dt + this.accSpeedInt;
            this.p.y -= this.accSpeed * this.speed;
        }

        if (!this.accLeft || !this.accRight || !this.accUp || !this.accDown) {
            this.accSpeed = 0;
        }
    },


    // update (dt) {
    //     if( this.accLeft ){
    //         this.accSpeed += dt+this.accSpeedInt ;
    //         this.player.x -= this.accSpeed * this.speed;
    //     }
    //     if( this.accRight ){
    //         this.accSpeed += dt+this.accSpeedInt ;
    //         this.player.x += this.accSpeed * this.speed;
    //     }
    //     if( this.accUp ){
    //         this.accSpeed += dt+this.accSpeedInt ;
    //         this.player.y += this.accSpeed * this.speed;
    //     }
    //     if( this.accDown ){
    //         this.accSpeed += dt+this.accSpeedInt ;
    //         this.player.y -= this.accSpeed * this.speed;
    //     }

    //     if( !this.accLeft || !this.accRight || !this.accUp || !this.accDown ){
    //         this.accSpeed = 0 ;
    //     }
    // },

    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.accUp = true;
                break;
            case cc.macro.KEY.down:
                this.accDown = true;
                break;
            case cc.macro.KEY.left:
                this.accLeft = true;
                break;
            case cc.macro.KEY.right:
                this.accRight = true;
                break;
        }
    },
    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.accUp = false;
                break;
            case cc.macro.KEY.down:
                this.accDown = false;
                break;
            case cc.macro.KEY.left:
                this.accLeft = false;
                break;
            case cc.macro.KEY.right:
                this.accRight = false;
                break;
        }
    },
    spawnEnemy: function spawnEnemy() {
        var newEnemy = cc.instantiate(this.enemy);
        cc.log(newEnemy);
        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.setEnemyPosition());
    },
    setEnemyPosition: function setEnemyPosition() {
        var x = (Math.random() > 0.5 ? 1 : -1) * Math.random() * cc.winSize.width / 2;
        var y = (1 + Math.random()) * cc.winSize.height / 2;
        return cc.v2(x, y);
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
        //# sourceMappingURL=game.js.map
        