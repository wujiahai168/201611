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

        //cc.log(this.node);

        this.overSprite.node.x = 10000;
        var self = this;

        for( var y=0; y<15; y++ ){
            for( var x=0; x<15; x++ ){
                var newNode = cc.instantiate(this.chessPrefab);
                this.node.addChild( newNode );
                var v2 = cc.v2( x*42+30,y*62+45);
                var v2_world = this.node.convertToNodeSpaceAR( v2 );
                newNode.setPosition( v2_world );

                //cc.log( newNode.getComponent(cc.Sprite).spriteFrame );
                
                newNode.on(cc.Node.EventType.TOUCH_END,function(event){

                    event.target.getComponent(cc.Sprite).spriteFrame = this.blackSpriteFrame;
                    event.target.visible = true;

                    event.target.getComponent( cc.Sprite ).spriteFrame = this.blackSpriteFrame;
                    
                    self.ai();
                    
                    //self.touchChess = this;
                    // if( self.gameState=="white" && event.target.getComponent(cc.Sprite).spriteFrame == null ){
                    //     this.getComponent( cc.Sprite ).spriteFrame = self.blackSpriteFrame;
                    //     self.judgeOver();
                    //     if( self.gameState=="white" ){
                    //         self.scheduleOnce(function(){ self.ai(); },1);
                    //     }
                    // }
                    // if( self.gameState=="black" && event.target.getComponent(cc.Sprite).spriteFrame == null ){
                        
                    //     event.target.getComponent(cc.Sprite).spriteFrame = this.blackSpriteFrame;
                    //     event.target.visible = true;

                    //     event.target.getComponent( cc.Sprite ).spriteFrame = this.blackSpriteFrame;
                        
                    //     self.ai();
                    //     self.gameState = "black";
                        
                    //     //self.judgeOver();
                        


                    //     //self.gameState = "white";
                        


                    //     // if( self.gameState=="white" ){
                    //     //     self.ai();
                    //     //     self.gameState = "black";
                    //     //     //self.scheduleOnce(function(){ self.ai(); },1);
                    //     // }
                        
                    //     // cc.log(this);
                    //     // cc.log(this.node);
                    //     // cc.log(event);
                    // }

                },this);

                this.chessList.push(newNode);

                //newNode.setTag = y*15+x;
                newNode._tag = y*15+x;//根据每个节点的tag就可以算出其二维坐标
                //newNode.setTag( y*15 + x );
                //cc.log(newNode);
            }
        }

        //cc.log(this.chessList);

        this.chessList[112].getComponent(cc.Sprite).spriteFrame = this.whiteSpriteFrame;
        this.gameState = "black";

        //cc.log( this.chessList[112] );

        //横向
        for( var y=0; y<15; y++ ){
            for( var x=0; x<11; x++ ){
                this.fiveGroup.push([y*15+x,y*15+x+1,y*15+x+2,y*15+x+3,y*15+x+4]);
            }
        }

        //纵向
        for( var x=0; x<15; x++ ){
            for( var y=0; y<11; y++ ){
                this.fiveGroup.push( [y*15+x, (y+1)*15+x, (y+2)*15+x, (y+3)*15+x, (y+4)*15+x ] );
            }
        }

        //右上
        for( var b=-10; b<=10; b++ ){
            for( var x=0; x<11; x++ ){
                if( b+x<0 || b+x>10 ){
                    continue;
                }else{
                    this.fiveGroup.push( [(b+x)*15+x, (b+x+1)*15+x+1, (b+x+2)*15+2,(b+x+3)*15+3,(b+x+4)*15+4 ] );
                }
            }
        }

        //右下
        for( var b=4; b<=24; b++ ){
            for( var y=0; y<11; y++ ){
                if( b-y<4 || b-y>14 ){
                    continue;
                }else{
                    this.fiveGroup.push( [y*15+b-y, (y+1)*15+b-y-1, (y+2)*15+b-y-2, (y+3)*15+b-y-3, (y+4)*15+b-y-4 ] );
                }
            }
        }

        cc.log(this.chessList);
        cc.log(this.fiveGroup);        

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

    //电脑下棋
    ai(){
        //cc.log("chessList",this.chessList);
        //cc.log("this.fiveGroup[i][j]",this.fiveGroup);

        //cc.log(this.fiveGroup.length);
        //评分
        for( var i=0; i<this.fiveGroup.length; i++ ){
            var b=0;
            var w=0;
            for( var j=0; j<5; j++ ){
                // cc.log("i,j",i,j);
                // cc.log("this.fiveGroup[i][j]",this.fiveGroup[i][j]);
                //cc.log(this.chessList[this.fiveGroup[i][j]]);
                //this.getComponent(cc.Sprite).spriteFrame;
                //cc.log( this.chessList[this.fiveGroup[i][j]].getComponent(cc.Sprite) );
                if( this.chessList[this.fiveGroup[i][j]].getComponent(cc.Sprite).spriteFrame == this.blackSpriteFrame ){
                    b++;
                }else if( this.chessList[this.fiveGroup[i][j]].getComponent(cc.Sprite).spriteFrame == this.whiteSpriteFrame ){
                    w++;
                }
            }

            if( b+w == 0 ){
                this.fiveGroupScore[i] = 7;
            }else if( b>0 && w>0 ){
                this.fiveGroupScore[i] = 0;
            }else if( b==0 && w==1 ){
                this.fiveGroupScore[i] = 35;
            }else if( b==0 && w==2 ){
                this.fiveGroupScore[i] = 800;
            }else if( b==0 && w==3 ){
                this.fiveGroupScore[i] = 1500;
            }else if( b==0 && w==4 ){
                this.fiveGroupScore[i] = 800000;
            }else if( w==0 && w==1 ){
                this.fiveGroupScore[i] = 15;
            }else if( w==0 && w==2 ){
                this.fiveGroupScore[i] = 400;
            }else if( w==0 && w==3 ){
                this.fiveGroupScore[i] = 1800;
            }else if( w==0 && w==4 ){
                this.fiveGroupScore[i] = 100000;
            }

        }

        //最高分
        var hScore = 0;
        var mPosition = 0;
        for( var i=0; i<this.fiveGroupScore.length; i++ ){
            if( this.fiveGroupScore[i]>hScore ){
                hScore = this.fiveGroupScore[i];
                mPosition = (function(x){
                    return x;
                })(i);
            }
        }

        var flag1 = false;  //无子
        var flag2 = false;  //有子
        var nPosition = 0;

        for( var i=0; i<5; i++ ){

            cc.log(this.fiveGroup[mPosition]);
            cc.log(this.chessList[this.fiveGroup[mPosition]] );

            if( !flag1 && this.chessList[this.fiveGroup[mPosition][i]].getComponent(cc.Sprite).spriteFrame == null ){
                nPosition = (function(x){return x;})(i);
            }
            if( !flag2 && this.chessList[this.fiveGroup[mPosition][i]].getComponent(cc.Sprite).spriteFrame != null ){
                flag1 = true;
                flag2 = true;
            }
            if( !flag2 && this.chessList[this.fiveGroup[mPosition][i]].getComponent(cc.Sprite).spriteFrame == null ){
                nPosition = (function(x){return x;})(i);
                break;
            }
        }

        this.chessList[this.fiveGroup[mPosition][nPosition]].getComponent( cc.Sprite );
        this.touchChess = this.chessList[this.fiveGroup[mPosition][nPosition]];
        
        cc.log("touchChess",this.touchChess);
        //落子
        this.chessList[this.fiveGroup[mPosition][nPosition]].getComponent(cc.Sprite).spriteFrame = this.whiteSpriteFrame;
        
        //this.judgeOver();

    },

    
    judgeOver(){ return; },

    //判断
    judgeOverTest(){
        var x0 = this.touchChess._tag % 15;
        var y0 = parseInt( this.touchChess._tag / 15 );
        
        //判断横向
        var fiveCount = 0;
        for( var x=0; x<15; x++ ){
            if( this.chessList[y0*15+x].getComponent(cc.Sprite).spriteFrame === this.touchChess.getComponent(cc.Sprite).spriteFrame ){
                fiveCount ++;
                if( fiveCount == 5 ){
                    if( this.gameState === "black" ){
                        this.overLabel.string = "你赢了";
                        this.overSprite.node.x = 0;
                    }else{
                        this.overLabel.string = "你输了";
                        this.overSprite.node.x = 0;
                    }
                    this.gameState = "over";
                    return ;
                }
            }else{
                fiveCount = 0;
            }
        }

        //判断纵向
        fiveCount = 0;
        for( var y=0; y<15; y++ ){
            if( this.chessList[y*15+x0].getComponent(cc.Sprite).spriteFrame === this.touchChess.getComponent(cc.Sprite).spriteFrame ){
                fiveCount++;
                if( fiveCount==5 ){
                    if( fiveCount == 5 ){
                        if( this.gameState === "black" ){
                            this.overLabel.string = "你赢了";
                            this.overSprite.node.x = 0;
                        }else{
                            this.overLabel.string = "你输了";
                            this.overSprite.node.x = 0;
                        }
                        this.gameState = "over";
                        return ;
                    }
                }else{
                    fiveCount=0;
                }
            }
        }

        //判断右上
        var f=y0-x0;
        fiveCount=0;
        for( var x=0; x<15; x++ ){
            if( f+x<0 || f+x>14 ){
                continue;
            }
            if( this.chessList[(f+x)*15+x].getComponent(cc.Sprite).spriteFrame === this.touchChess.getComponent(cc.Sprite).spriteFrame ){
                fiveCount++;
                if( fiveCount==5 ){
                    if( fiveCount == 5 ){
                        if( this.gameState === "black" ){
                            this.overLabel.string = "你赢了";
                            this.overSprite.node.x = 0;
                        }else{
                            this.overLabel.string = "你输了";
                            this.overSprite.node.x = 0;
                        }
                        this.gameState = "over";
                        return ;
                    }
                }else{
                    fiveCount=0;
                }
            }
        }

        //判断右下
        f = y0+x0;
        fiveCount=0;
        for(var x=0; x<15; x++){
            if( f-x<0 || f-x>14 ){
                continue;
            }
            if( this.chessList[(f-x)*15+x].getComponent(cc.Sprite).spriteFrame === this.touchChess.getComponent(cc.Sprite).spriteFrame ){
                if( fiveCount == 5 ){
                    if( this.gameState === "black" ){
                        this.overLabel.string = "你赢了";
                        this.overSprite.node.x = 0;
                    }else{
                        this.overLabel.string = "你输了";
                        this.overSprite.node.x = 0;
                    }
                    this.gameState = "over";
                    return ;
                }
            }else{
                fiveCount=0;
            }
        }

        //没有输赢
        if( this.gameState === "black" ){
            this.gameState = "white";
        }else{
            this.gameState = "black";
        }

    },



});
