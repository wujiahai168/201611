cc.Class({
    extends: cc.Component,

    properties: {
        king:{
            default:null,
            type:cc.Node,
        }
    },

    onLoad: function () {
        var self = this;
        //左侧蹲，右侧跳
        this.node.on('touchstart',function(event){
            var visibleSize = cc.director.getVisibleSize();
            if(event.getLocationX()<visibleSize.width/2){
                self.king.getComponent('King').down();
            }else{
                self.king.getComponent('King').jump();
            }
        });
        //左侧松手就恢复跑的状态
        this.node.on('touchend',function(event){
            var visibleSize = cc.director.getVisibleSize();
            if(event.getLocationX()<visibleSize.width/2){
                self.king.getComponent('King').downRelease();
            }else{
                // self.king.getComponent('King').jump();
            }
        });
    },

});
