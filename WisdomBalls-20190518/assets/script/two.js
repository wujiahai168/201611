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
        
        tank:cc.Node,
        plane:cc.Node,
        shell:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.node.on( "hi", this.onDisplay, this );


        cc.loader.loadRes( "plane", cc.SpriteFrame, (err,t)=>{
            let spritePlane = this.plane.getComponent( cc.Sprite );
            spritePlane.spriteFrame = t;
        } );
        

        let manage = cc.director.getCollisionManager();
        manage.enabled = true;
        manage.enabledDebugDraw = true;        

        this.node.on( cc.Node.EventType.MOUSE_DOWN, (event)=>{
            cc.log("canvas MOUSE_DOWN");

            let objShell = cc.instantiate( this.shell );
            this.node.addChild( objShell );

            objShell.x = -100;
            objShell.y = -100;
            let actionM = cc.moveTo(4,500,300);
            objShell.runAction( actionM );

            // objShell.x += 50;
            // objShell.y += 50;



        }, this , false );






        // this.objTank = cc.find("Canvas/tank");
        // cc.log(this.objTank);
        // this.objPlane = cc.find("Canvas/plane");

        // let resPlane = cc.loader.loadRes( "plane", cc.SpriteFrame, function( err, res ){
        //     let framePlane = this.objPlane.getComponent( cc.Sprite );
        //     framePlane.spriteFrame = res;
        // }.bind(this) );
        
        // this.node.on( cc.Node.EventType.MOUSE_DOWN, ()=>{
        //     cc.log( "MOUSE_DOWN" );
        // }, this );

    },

    start () {

        setTimeout( ()=>{
            cc.log( "setTimeout" );
            this.node.emit( "hi", {
                arg1:"111111111111111",
                arg2:"1122222222222222222222222222222",
            });
        }, 3000 );

    },

    update (dt) {
        cc.log("update");
    },

    lateUpdate(dt){
        cc.log("lateUpdate");
    },

    onDestroy(){        
        this.node.off( "hi", this.onDisplay, this );
    },

    onMouseDown(event){
        cc.log("onMouseDown");
    },

    onDisplay( event ){
        cc.log( "onDisplay", event );
    },

});
