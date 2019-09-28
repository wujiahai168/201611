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
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        //cc.log( "down", cc.macro.KEY.down );

        var view_w = cc.director.getWinSize();
        var king = cc.find("Canvas/King");

        this.node.on( cc.Node.EventType.MOUSE_DOWN,function(event){
            
            let x = event.getLocationX();
            
            //左侧，就跳起来
            if( x < view_w.width/2 ){
                cc.log("左边");
                cc.log(king);
                
                this.king.getComponent("king").jump();
                
                // king.getComponent(cc.Animation).stop();
                // king.runAction( cc.jumpBy(1,cc.v2(0,0),200,1) );
                // king.getComponent(cc.Animation).play("king_run");

            }else{
                cc.log("右边");

                this.king.getComponent("king").down();

            }

            // cc.log(event);
            // cc.log(x);
            // cc.log(view_w.width);

        },this);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN ,function( event ){

            //cc.log( "KEY_DOWN" ,event, event.keyCode );
            switch( event.keyCode ){
                
                case cc.macro.KEY.down:
                    cc.log("按下down");
                    this.king.getComponent("king").downRelease();
                    break;
            }

        },this);


        // this.node.on( cc.Node.EventType.MOUSE_UP,function(event){

        //     // let x = event.getLocationX();

        //     // if( x < view_w/2 ){
        //     //     cc.log("左边放松");
        //     // }

        // },this );

        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(){
        //     cc.log("key_down");    
        // },this);

    },

    start () {

    },

    // update (dt) {},


});
