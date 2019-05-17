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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.player = this.node.getChildByName( "player" );
        this.loadMap();

        this.node.on( cc.Node.EventType.MOUSE_MOVE,this.showMousePoint,this );
    },

    start () {

    },

    // update (dt) {},

    loadMap(){
        
        //

        //地图
        this.tiledMap = this.node.getComponent( cc.TiledMap );

        //players对象层
        let players = this.tiledMap.getObjectGroup( "players" );

        //startPoint和endPoint对象
        let startPoint = players.getObject( "startPoint" );
        let endPoint = players.getObject( "endPoint" );

        //像素坐标
        let startPos = cc.v2( startPoint.offset.x , startPoint.offset.y );
        let endPos = cc.v2( endPoint.offset.x , endPoint.offset.y );

        //障碍
        this.barriers = this.tiledMap.getLayer( "barriers" );
        this.stars = this.tiledMap.getLayer( "stars" );

        this.playerTile = this.startTile = this.getTilePos( startPos );
        
        //更新player位置 / 从start开始
        this.updatePlayerPos();

        // let testPos = this.node.convertToWorldSpace( startPos );
        // this.player.setPosition( testPos );

        cc.log( "startPos",startPos );
        cc.log( "endPos",endPos );
        //cc.log( "testPos",testPos );
        cc.log( "this.playerTile" , this.playerTile );

    },

    getTilePos( posInPixel ){
        let mapSize = this.node.getContentSize();
        let tileSize = this.tiledMap.getTileSize();
        let x = Math.floor( posInPixel.x / tileSize.width );
        let y = Math.floor( posInPixel.y / tileSize.height );
        return cc.v2( x, y );
    },

    updatePlayerPos(){
        let pos = this.barriers.getPositionAt( this.playerTile );
        this.player.setPosition( pos );
    },

    showMousePoint(event){
        //cc.log(event.getLocation());
    },

});
