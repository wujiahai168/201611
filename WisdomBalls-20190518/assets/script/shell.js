// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html



var g = require( "global" );

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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //this.score = g.getScore();
        cc.log( "g", g );

    },

    start () {

    },

    // update (dt) {},

    onCollisionEnter(){
        cc.log("onCollisionEnter");
        let atBig = cc.scaleTo( 0.2, 4 );
        let atSamll = cc.scaleTo( 1, 0.1 );
        let atFinish = cc.callFunc( ()=>{
            cc.log("over");
            this.node.removeFromParent();
        } );

        let atSequence = cc.sequence( atBig, atSamll, atFinish );
        this.node.runAction( atSequence );

        //g.setScore();
        cc.log( "g.getScore()" , g.getScore() );
        cc.log( "Global" , ggg.score );
        
        //this.score += 1;
        //cc.log( this.score );

    },

    onCollisionStay(){
        cc.log("onCollisionStay");
    },

    onCollisionExit(){
        cc.log("onCollisionExit");
    },

});
