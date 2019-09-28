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
        king:{
            type:cc.Node,
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var t = this;
        this.schedule(function(){
            
            if( Math.random()>0.5 ){
                cc.log("high--high--high--high--high--high--");
                t.getComponent(cc.Animation).play("boom_high");
            }else{
                cc.log("low---low---low---low---low---");
                t.getComponent(cc.Animation).play("boom_low");
            }

            //this.getComponent(cc.Animation).play("boom_high");
            //this.getComponent(cc.Animation).play("boom_low");
        },3);
    },

    start () {

    },

    update (dt) {

    },

    judgeJump(){
        if( this.king.getComponent("king").state == "jump" ){
            cc.log("judgeJump -- 已经跳起 - jump - jump - jump - jump -，成功");
        }else{
            cc.log("judgeJump -- 中弹");
        }
    },

    judgeDown(){
        if( this.king.getComponent("king").state == "down" ){
            cc.log("judgeDown -- 已经蹲下 - down - down - down - down -，成功");
        }else{
            cc.log("judgeDown -- 中弹");
        }
    },

});
