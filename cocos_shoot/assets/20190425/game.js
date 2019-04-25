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
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.cube  = cc.find("Canvas/cube");

        this.node.on(cc.Node.EventType.MOUSE_MOVE,this._onMouseMove,this);

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
        let v2_new = this.cube.convertToNodeSpaceAR(v2);
        cc.log(v2_new);
        this.cube.setPosition(v2_new);

        //cc.log("_onMouseMove",event.getLocation());

    },

});
