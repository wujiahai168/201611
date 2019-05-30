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

        my:cc.Node,
        enemy:cc.Node,
        bullet:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let manage = cc.director.getCollisionManager();
        manage.enabled = true;
        manage.enabledDebugDraw = true;
    },

    start () {

    },

    update (dt) {},

    click(){
        cc.log("click");

        let b = cc.instantiate( this.bullet );
        this.node.addChild( b );

        // let actionMoveUp = cc.moveBy( 3, cc.v2(0,400) );
        // let fadeOut = cc.fadeOut( 0.5 );

        let spawn = cc.spawn(
            cc.moveBy( 2, cc.v2(0,800) ),
            cc.rotateBy( 3,360 )
            //cc.fadeOut( 0.9)
        );
        
        let finish = cc.callFunc( ()=>{
            b.removeFromParent();
        } );

        let seq = cc.sequence( spawn,finish );
        b.runAction( seq );

    },

});
