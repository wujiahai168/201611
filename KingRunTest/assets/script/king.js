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
        jumpHeight:0,
        jumpDuration:0,
        state:'run',
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    run(){
        this.getComponent(cc.Animation).play("king_run");
        this.state = "run";
    },

    jump(){
        if( this.state == "run" ){
            this.state = "jump";
            this.getComponent(cc.Animation).stop();

            let seq = cc.sequence( 
                            cc.jumpBy(this.jumpDuration,cc.v2(0,0),this.jumpHeight,1),
                            cc.callFunc( function(){ this.run(); },this )
                        );
            this.node.runAction( seq )

            //this.node.runAction( cc.jumpBy(this.jumpDuration,cc.v2(0,0),this.jumpHeight,2) );

        }
    },

    down(){
        let t = this;
        if( this.state == "run" ){
            this.state = "down";
            let spawn = cc.spawn( cc.scaleTo(0.2,1,0.5) , cc.jumpBy(0.2,cc.v2(0,-20),0,1),cc.callFunc(t.funcTest) );
            this.node.runAction( spawn );
            //this.node.runAction( cc.scaleTo(0.05,1,0.5) );
        }
    },

    downRelease(){
        
        cc.log("downRelease");
        cc.log(this.state);

        if( this.state == "down" ){
            this.state = "run";
            let spawn = cc.spawn( cc.jumpBy(0.2,cc.v2(0,20),0,1), cc.scaleTo(0.2,1,1) );
            this.node.runAction( spawn );

        }
    },

    funcTest(){
        cc.log("funcTest---funcTest---funcTest---funcTest---");
    },

});
