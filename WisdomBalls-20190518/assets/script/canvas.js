// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var utils = require( "utils" );

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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        cc.log( utils );
        let label = cc.find("Canvas/Label");
        let label_la = label.getComponent( cc.Label );
        label_la.string = utils.toText("dsafjlk;ajsflk;as");

        this.nodePool = new cc.NodePool();
        this.nodes = [];
        for( let i=0; i<5; i++ ){
            let node = new cc.Node(" node--- " + i);
            this.nodePool.put( node );
        }

        // let menuBar = cc.find("Canvas/gridBg");
        // let menuBarNew = cc.instantiate( menuBar );
        
        // let gridBg = cc.find("Canvas/gridBg");
        // this.node.addChild( menuBarNew );
        // menuBarNew.y -= 300;

        // cc.log( "isValid", cc.isValid( menuBarNew ) );

        // setTimeout( function(){
        //     menuBarNew.destroy();

        //     cc.log("settimeout" , cc.isValid( menuBarNew ) );

        //     // cc.director.preloadScene("one",() => {
        //     //     cc.log("preloadScene");
        //     // });

        // } , 3000 );

        // setTimeout( function(){            
        //     cc.log("settimeout --- 5000 " , cc.isValid( menuBarNew ) );

        //     //cc.director.loadScene( "one" );

        // } , 5000 );
        
        // .addChild( menuBar );
        // menuBar.y -= 300;

    },

    start () {

    },

    // update (dt) {},

    getNode(){
        let node = this.nodePool.get();
        if( node ){
            cc.log( "get from node pool " + node.name );
            this.nodes.push( node );
        }
    },

    putNode(){
        let node = this.nodes.pop();
        if( node ){
            cc.log( "put into node pool " + node.name );
            this.nodePool.put( node );
        }
    },

    getData(){
        cc.log("getDatagetDatagetDatagetDatagetDatagetDatagetData");
        var xhr = cc.loader.getXMLHttpRequest( );
        xhr.onreadystatechange = function(){
            if( xhr.readyState==4 && xhr.status>=200 && xhr.status<400 ){
                var response = xhr.responseText;
                cc.log( response );
            }
        };
        xhr.open("GET","preview-scripts/assets/Script/canvas.js",true);
        xhr.send();
    },

    btnTest( customEventData, delta ){


        let action = cc.speed(
            cc.spawn(
                cc.moveTo( 2, 200, 200 ),
                cc.rotateBy( 3 , 60 )
            ),

            0.1
            
        );

        let dog = this.node.getChildByName( "dog" );
        dog.runAction( action );

        let dogNew = cc.instantiate( dog );
        this.node.addChild( dogNew );

        let actionNew = cc.repeatForever(
            cc.sequence(
                cc.moveBy( 2, 0, 200 ),
                cc.moveBy( 1, 0, -200 ),
            )
        );

        actionNew = cc.speed(
            actionNew,
            5
        );

        dogNew.runAction( actionNew );

        // cc.log( "customEventData",customEventData );
        // cc.log( "delta",delta );

        // let dog = this.node.getChildByName( "dog" );
        // //cc.log( "dog",this );

        // let rotate = cc.rotateBy( 4 , delta );
        // dog.runAction( rotate );
    },

    playAnimation(){
        let house = this.node.getChildByName( "house" );
        let houseAn = house.getComponent( cc.Animation );


        cc.log( "play" , houseAn.getClips() );

        // houseAn.defaultClip = "house";
        // houseAn.playOnLoad = true;
        houseAn.play("house2",0.5);
        //houseAn.playAdditive("house");
        //houseAn.play();
    },

    pauseAnimation(){
        let house = this.node.getChildByName( "house" );
        let houseAn = house.getComponent( cc.Animation );
        houseAn.pause();
    },

    resumeAnimation(){
        let house = this.node.getChildByName( "house" );
        let houseAn = house.getComponent( cc.Animation );
        houseAn.resume();
    },


});
