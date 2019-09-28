cc.Class({
    extends: cc.Component,

    backToGame (event) {
        this.node.destroy();
        event.stopPropagation();
    },
});