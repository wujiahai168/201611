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
        player:{
            type:cc.Node,
            default:null,
        },

        enemy:{
            type:cc.Prefab,
            default:null,
        },

        speed:10,

        accSpeedInt:0.2,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
        this.p = cc.find("Canvas/player");
        this.p.color = new cc.Color(255,0,0);

        cc.Scheduler(function(){
            cc.log("scheduler");
        },1,1000);

        cc.log("aaaaaaaaaaaaaaaaaa");

    },

    start () {

    },

    update (dt) {
        if( this.accLeft ){
            this.accSpeed += dt+this.accSpeedInt ;
            this.p.x -= this.accSpeed * this.speed;
        }
        if( this.accRight ){
            this.accSpeed += dt+this.accSpeedInt ;
            this.p.x += this.accSpeed * this.speed;
        }
        if( this.accUp ){
            this.accSpeed += dt+this.accSpeedInt ;
            this.p.y += this.accSpeed * this.speed;
        }
        if( this.accDown ){
            this.accSpeed += dt+this.accSpeedInt ;
            this.p.y -= this.accSpeed * this.speed;
        }
        
        if( !this.accLeft || !this.accRight || !this.accUp || !this.accDown ){
            this.accSpeed = 0 ;
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

    onKeyDown(event){
        switch(event.keyCode){
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

    onKeyUp(event){
        switch(event.keyCode){
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

    spawnEnemy(){
        var newEnemy = cc.instantiate( this.enemy );
        this.node.addChild(newEnemy);
        newEnemy.setPosition( this.setEnemyPosition() );
    },

    setEnemyPosition(){
        var x = ( Math.random()>0.5 ? 1 : -1 ) * Math.random() * cc.winSize.width / 2 ;
        var y = ( Math.random()>0.5 ? 1 : -1 ) * Math.random() * cc.winSize.height / 2 ;
        return cc.v2( x, y );
    },

});
