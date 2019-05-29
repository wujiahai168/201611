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

        p:cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {


        this.p.on( "hi", this.onHi, this );


        this.scheduleOnce( function(){
            //this.node.removeFromParent();

            // let obj = cc.find("Canvas/menuBar");
            // let objNew = cc.instantiate( obj );

            // obj.addChild( objNew );
            // objNew.y -= 200;

            // let childNode = new cc.Node("c");
            // let label = childNode.addComponent( cc.Label );
            // label.string = "ab dsafkl;asjfalkds;jfdalks;jfdaslk;";

            // this.node.addChild( childNode );
            // childNode.y -= 200;

        }, 3 );

        //this.node.destroy();

        // let t = this;
        // setTimeout(function(){
        //     cc.log( t.node );
        //     t.node.active  = false;
        // },2000);

        // setTimeout(function(){
        //     t.node.active = true;
        // },4000);

        // setTimeout(function(){
        //     this.node.destroy();
        // }.bind,6000);

        cc.log("onLoad");

        // this.schedule( function(){
        //     cc.log("schedule");
        //     this.node.active = false;
        // },5 );

        // this.scheduleOnce( function(){
        //     cc.log("scheduleOnce");
        // },5 );



        // var self = this;
        // var childNodes = this.node.children;
        // cc.log( childNodes );

        // var menuBar = this.node.getChildByName( "menuBar" );
        // cc.log( menuBar );
        
        // var helpBtn = menuBar.getChildByName( "helpBtn" );
        // cc.log( helpBtn );

        // let scoreObj = this.node.getChildByName( "score" );
        // if( !scoreObj ) return;
        // let label = scoreObj.getComponent( cc.Label );
        // label.string = "hahahaha";
        
        // //label.width = 50;
        // scoreObj.width = 50;
        // scoreObj.setContentSize(100,100);
        // cc.log( "scoreObj.width",scoreObj.width );
        
        //scoreObj.y = -300;

        //helpBtn.active = false;

        // this.scheduleOnce( function(){
        //     helpBtn.active = true;
        // }, 2 );

        // let gridObj = cc.find("Canvas/gridBg");
        // let settingBtn = menuBar.getChildByName( "settingBtn" );
        // cc.log( "settingBtn", settingBtn );
        // //gridObj.active = false;
        // this.scheduleOnce( function(){
        //     cc.log("gridObj-heidden");
        //     gridObj.active = false;
        // }, 2 );

    },

    start () {        
        cc.log("start");

        let e = new cc.Event.EventCustom( "hi",true );
        e.aaa = "aaaaaaaaaaaaaaaaaa";
        e.bbb = "bbbbbbbb";
        this.node.dispatchEvent( e );

    },

    update (dt) {
        //cc.log("update");
    },

    onEnable(){
        cc.log("onEnable");
    },

    onDisable(){
        cc.log("onDisable");
    },

    onDestroy(){
        cc.log("onDestroy");
        this.p.off( "hi", this.onHi, this );
    },

    onHi( event ){
        cc.log(event);
    },

});
