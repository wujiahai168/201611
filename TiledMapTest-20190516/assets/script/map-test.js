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
        
        //player:cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.player = this.node.getChildByName("player");
        //cc.log( this.player );

        this.loadMap();

        cc.systemEvent.on( cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this );
        
        // this.node.on( cc.Node.EventType.MOUSE_MOVE,function(event){
        //     cc.log("mouse move" , event.getLocation() );
        // },this );        

        //cc.log(this.player);

    },

    start () {

    },

    // update (dt) {},

    loadMap(){
        this.node.setPosition( cc.visibleRect.bottomLeft );
        this.tiledMap = this.node.getComponent( cc.TiledMap );

        let players = this.tiledMap.getObjectGroup( "players" );
        let startPoint = players.getObject( "startPoint" );
        let endPoint = players.getObject( "endPoint" );

        let startPos = cc.v2( startPoint.offset.x , startPoint.offset.y );
        let endPos = cc.v2( endPoint.offset.x, endPoint.offset.y );

        this.barriers = this.tiledMap.getLayer( "barriers" );
        this.stars = this.tiledMap.getLayer( "stars" );


        
        cc.log( "startPoint",startPoint );
        cc.log( "endPoint",endPoint );
        cc.log("startPos",startPos);
        cc.log("endPos",endPos);

        cc.log("-----------------------------------");

        startPos = this.node.convertToNodeSpaceAR( startPos );

        this.playerTile = this.startTile = this.getTilePos( startPos );
        this.endTile = this.getTilePos( endPos );

        cc.log( "startPoint",startPoint );
        cc.log( "endPoint",endPoint );
        cc.log("startPos",startPos);
        cc.log("endPos",endPos);

        // cc.log( "playerTile---",this.playerTile );
        // cc.log( this.barriers );
        // cc.log( this.stars );

        this.updatePlayerPos();
    },

    getTilePos( posInPixel ){
        let mapSize = this.node.getContentSize();
        //cc.log("mapSizemapSizemapSizemapSizemapSizemapSize",mapSize);
        let tileSize = this.tiledMap.getTileSize();
        let x = Math.floor( posInPixel.x / tileSize.width );
        let y = Math.floor( posInPixel.y / tileSize.height );
        cc.log("mapSize--tileSize",x,y);
        return cc.v2( x,y );
    },

    onKeyDown( event ){
        var newTile = cc.v2( this.playerTile.x ,  this.playerTile.y );
        //cc.log( "onKeyDown - newTile",newTile );
        switch( event.keyCode ){
            case cc.macro.KEY.up:
                newTile.y -= 1;
                break;
            case cc.macro.KEY.down:
                newTile.y += 1;
                break;
            case cc.macro.KEY.left:
                newTile.x -= 1;
                break;
            case cc.macro.KEY.right:
                newTile.x += 1;
                break;
            default:
                return;
        }
        // let v2 = this.node.convertToWorldSpaceAR( newTile );
        // this.tryMoveToNewTile( v2 );
        this.tryMoveToNewTile( newTile );
        
    },

    tryMoveToNewTile( newTile ){

        cc.log( "tryMoveToNewTile - newTile",newTile );
        let width = this.tiledMap.node.width;
        let height = this.tiledMap.node.height;
        if( newTile.x < 0 || newTile.x >= width ) return;
        if( newTile.y < 0 || newTile.y >= height ) return;

        if( this.barriers.getTileGIDAt( newTile ) ){
            cc.LoadingItems( "this way is blocked! " );
            return false;
        }

        this.tryCatchStar( newTile );

        this.playerTile = newTile;
        this.updatePlayerPos();

        //cc.log( "newTile - 中间 ---",newTile );
        //cc.log( "endTile",this.endTile );

        if( newTile.equals( this.endTile ) ){
            cc.log("succeed");
        }

        // if( cc.Vec2.equls( this.playerTile , this.endTile ) ){
        //     cc.log("succeed");
        // }

    },

    tryCatchStar( newTile ){
        let GID = this.stars.getTileGIDAt( newTile );
        let prop = this.tiledMap.getPropertiesForGID( GID );

        if( this.stars.getTileGIDAt( newTile ) ){
            this.stars.removeTileAt( newTile );
        }

    }, 

    updatePlayerPos(){
        let pos = this.barriers.getPositionAt( this.playerTile );
        this.player.setPosition( pos );
        //cc.log( pos );
    },

});
