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
        
        overSprite:{
            type:cc.Sprite,
            default:null,
        },

        overLabel:{
            type:cc.Label,
            default:null,
        },

        chessPrefab:{
            type:cc.Prefab,
            default:null,
        },

        chessList:{
            type:[ cc.Node ],
            default:[],
        },

        whiteSpriteFrame:{
            type:cc.SpriteFrame,
            default:null,
        },

        blackSpriteFrame:{
            type:cc.SpriteFrame,
            default:null,
        },

        touchChess:{
            type:cc.Node,
            default:null,
            visible:false,
        },

        gameState:"white",

        fiveGroup:[],

        fiveGroupScore:[],

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.overSprite.node.x = 10000;
        var self = this;

        for( var y=0; y<15; y++ ){
            for( var x=0; x<15; x++ ){
                var newNode = cc.instantiate(this.chessPrefab);
                this.node.addChild( newNode );
                var v2 = cc.p( x*42+30,y*62+45);
                var v2_world = this.node.convertToNodeSpaceAR( v2 );
                newNode.setPosition( v2_world );
                
                newNode.on(cc.Node.EventType.TOUCH_END,function(event){
                    self.touchChess = this;
                    if( self.gameState=="black" && this.getComponent(cc.Sprite).SpriteFrame===null ){
                        this.getComponent( cc.Sprite ).SpriteFrame = self.blackSpriteFrame;
                        self.judgeOver();
                        if( self.gameState=="white" ){
                            self.scheduleOnce(function(){ self.ai(); },1);
                        }
                    }
                },this);

                //newNode.setTag = y*15+x;
                //newNode.tag = y*15+x;//根据每个节点的tag就可以算出其二维坐标
                //newNode.setTag( y*15 + x );
                //cc.log(newNode);
            }
        }
    },

    start () {

    },

    // update (dt) {},

    startGame(){
        cc.director.loadScene("Game");
    },

    backMenu(){
        cc.director.loadScene("Menu");
    },



});
