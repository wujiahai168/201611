// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var Global = require("game");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        
        //speed:50,
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.accX = ( Math.random() > 0.5 ? 1 : -1 ) * Math.random() * Global.bulletSpeed ;
        this.accY = ( Math.random() > 0.5 ? 1 : -1 ) * Math.random() * Global.bulletSpeed ;
        this.color = new cc.Color(Math.random()*255,Math.random()*255,Math.random()*255);
        this.node.color = this.color;
    },

    update (dt) {

        let x = this.node.x + dt * this.accX ;
        let y = this.node.y + dt * this.accY ;
        let v2 = cc.v2( x , y );
        this.node.setPosition(v2);
        
    },

});
