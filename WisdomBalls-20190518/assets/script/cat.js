// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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

        cc.log("cat",this);
        
        var t = this;

        cc.loader.loadRes("cat",cc.SpriteFrame,(err,sp)=>{
            cc.log( t.node );
            cc.log( sp );
            let com = t.node.getComponent( cc.Sprite );
            com.spriteFrame = sp;
            //this.node.getComponent( cc.SpriteFrame ) = sp;
        });

        this.node.on("hello",this.onHello,this);
        
        // setTimeout( function(){
        //     cc.loader.loadRes("cat",cc.SpriteFrame,(err,sp)=>{
        //         cc.log( t.node );
        //         cc.log( sp );
        //         let com = t.node.getComponent( cc.Sprite );
        //         com.SpriteFrame = sp;
        //         //this.node.getComponent( cc.SpriteFrame ) = sp;
        //     });
        //     cc.log("setTimeout");
        // }, 3000 );
    },

    start () {
        setTimeout( ()=>{
            this.node.emit("hello",{
                msg:"abc",
                one:"one"
            })
        },3000);
    },

    // update (dt) {},

    onDestroy(){
        this.node.off("hello",this.onHello,this);
    },

    onHello(event){
        cc.log(event);
    },

});
