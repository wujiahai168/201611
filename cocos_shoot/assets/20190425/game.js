// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

module.exports = {
    bulletSpeed:300,
};

cc.Class({
    extends: cc.Component,

    properties: {
        
        cube:{
            type:cc.Node,
            default:null,
        },

        bullet:{
            type:cc.Prefab,
            default:null,
        },

        particle:{
            type:cc.ParticleAsset,
            default:null,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.canvas = cc.find("Canvas");
        this.cube  = cc.find("Canvas/cube");
        this.touch = cc.find("Canvas/touch");

        //鼠标相对于canvas左下角（即世界坐标）的位置
        this.node.on(cc.Node.EventType.MOUSE_MOVE,function(event){

            this.v2_world = event.getLocation();
            this.v2_canvas = this.canvas.convertToNodeSpaceAR( this.v2_world );
            this.cube.setPosition( this.v2_canvas );

            cc.log( "mouse",this.v2_canvas );
            cc.log( "cube",this.cube.getPosition() );

        },this);

        this.node.on( cc.Node.EventType.MOUSE_DOWN,function(){
            let newBullt = cc.instantiate( this.bullet );
            this.node.addChild(newBullt);
            newBullt.setPosition(this.v2_canvas);

            cc.log("click");            
        },this );


        //this.node.on(cc.Node.EventType.MOUSE_MOVE,this._onMouseMove,this);

        // cc.log(this.cube);
        // this.node.on(cc.Node.EventType.MOUSE_ENTER,function(){
        //     cc.log("mouser enter123");
        // },this);

        // this.node.on(cc.Node.EventType.MOUSE_MOVE,function(){
        //     cc.log("mouser MOUSE_MOVE");
        // },this);
    },

    start () {

    },

    // update (dt) {},

    onDestroy(){

    },

    _onMouseMove(event){
        let v2 = event.getLocation();
        var newVec2 = this.cube.convertToNodeSpaceAR(v2);
        cc.log(newVec2);
        //let v2_world = this.cube.converToWorldSpace( v2 );
        this.cube.setPosition( newVec2 );
        // let v2_new = this.cube.convertToNodeSpaceAR(v2);
        // cc.log(v2_new);
        // this.cube.setPosition(v2_new);

        //cc.log("_onMouseMove",event.getLocation());

    },

});
