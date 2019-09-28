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
        
        cube:{
            type:cc.Node,
            default:null,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

        this.act_to = cc.moveBy( 5 , 300 , 300 );
        this.act_jump = cc.jumpTo( 5 , 200 , 3  );
        this.act_rotate = cc.rotateBy( 3 , 60 );
        this.act_back = cc.rotateBy( 3 , -200 , -200 );

        //this.seq = cc.sequence( [ this.act_to , this.act_jump , this.act_rotate , cc.moveTo(2,-300,-300) ] ) ;
        this.rep = cc.repeat( cc.sequence( this.act_to , this.act_jump , this.act_rotate ) , 5 );
        this.cube.runAction( this.rep );

        //this.cube.runActionByTag( this.ACT );

        // this.act_jump = cc.moveBy( 2 , 300,300 );
        // this.cube.runAction( this.act_jump );

        // this.act_rotate = cc.rotateBy( 3,60 );
        // this.cube.runAction( this.act_rotate );

    },

    update (dt) {

    },

    fnAction( event , arg ){
        cc.log( arg );
        if( arg == "stop" ){
            this.pauseAllActions();
        }
        if( arg == "resume" ){
            this.resumeAllActions();
        }
        // if( event == "1" ){
        //     this.pauseAllActions();
        // }else if( event == "2" ){
        //     this.resumeAllActions();
        // }
    },

    pauseAllActions(){
        //cc.log("pause");
        this.cube.pauseAllActions();
    },

    resumeAllActions(){
        //cc.log("resume");
        let btnStop = cc.find("Canvas/stopAllAction");
        btnStop.show = false;
        btnStop.disabled = false;
        this.cube.resumeAllActions();
    },    

});
