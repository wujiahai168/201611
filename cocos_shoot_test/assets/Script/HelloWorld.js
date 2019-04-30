cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.HelloWorld = cc.find("Canvas/HelloWorld");
        //this.label.string = this.text;
        this.node.on(cc.Node.EventType.MOUSE_MOVE,function(event){
            this.v2 = event.getLocation();
            this.v2_world = this.node.convertToNodeSpaceAR( this.v2 );
            cc.log( this.v2 );
            cc.log( this.v2_world );
            this.HelloWorld.setPosition( this.v2_world );
        },this);
    },

    // called every frame
    update: function (dt) {

    },



});
