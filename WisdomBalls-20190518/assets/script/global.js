// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var g = cc.Class({

    extends: cc.Component,

    properties: {

        score:1,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.score = 0;

    },

    start () {

    },

    update (dt) {

    },

    // getScore(){
    //     return this.score;
    // },

    // setScore( n ){
    //     this.score = n;
    // },

});

g.score = 11;

g.setScore = function( n ){
    g.score += n;
};

g.getScore = function(  ){
    
    return "getScore";
    //return g.score;
};

window.ggg = {
    score : 222,
};



