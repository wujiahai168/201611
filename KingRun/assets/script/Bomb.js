cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default:null,
            type:cc.Node,
        }
    },
    
    //判断高空导弹来时，猴哥是否蹲下
    judgeDown:function(){
        if(this.king.getComponent('King').state == 'down'){
            console.log("down---------------------");
        }else{
            cc.director.loadScene('Over');
        }
    },  
    
    //判断低空导弹来时，猴哥是否跳起
    judgeJump:function(){
        if(this.king.getComponent('King').state == 'jump'){
            console.log("jump---------------------");
        }else{
            cc.director.loadScene('Over');
        }
    },
    
    onLoad: function () {
        let self = this;
        //每隔2秒随机发射高空和低空导弹
        this.schedule(function(){
            if(Math.random()>0.5){
                this.getComponent(cc.Animation).play('bomb_high');
            }else{
                this.getComponent(cc.Animation).play('bomb_low');
            }
        },1.5);
    },
});
