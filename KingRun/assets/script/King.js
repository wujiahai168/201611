cc.Class({
    extends: cc.Component,

    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        //主角状态
        state:'run',
    },
    
    //跑
    run:function(){
        this.getComponent(cc.Animation).play('king_run');
        this.state = 'run';
    },
    
    //跳
    jump:function(){
        if(this.state == 'run'){
            this.state = 'jump';
            this.getComponent(cc.Animation).stop();
            this.node.runAction(cc.sequence(cc.jumpBy(this.jumpDuration, cc.p(0,0), this.jumpHeight, 1),
                                cc.callFunc(function() {
                                    this.run();
                                }, this)));
        }
    },
    
    //弯腰跑
    down:function(){
        if(this.state == 'run'){
            this.state = 'down';
            this.node.runAction(cc.scaleTo(0.05, 1, 0.5));
        }
    },
    
    //腰累了
    downRelease:function(){
        if(this.state == 'down'){
            this.node.runAction(cc.sequence(cc.scaleTo(0.05, 1, 1),
                                cc.callFunc(function() {
                                    this.run();
                                }, this)));
        }
    },
});
