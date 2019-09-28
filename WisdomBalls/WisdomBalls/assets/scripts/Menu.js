cc.Class({
    extends: cc.Component,

    properties: {
        GlobalData: cc.Node,
        AudioClip: cc.Node
    },

    onLoad () {
        cc.game.addPersistRootNode(this.GlobalData);
        cc.game.addPersistRootNode(this.AudioClip);
    },

    playGame () {
        cc.director.loadScene('Game');
    }
});
