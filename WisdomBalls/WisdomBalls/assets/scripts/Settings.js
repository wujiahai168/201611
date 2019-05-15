cc.Class({
    extends: cc.Component,

    properties: {
        recordLabel: cc.Label
    },

    onLoad () {
        this.GlobalData = cc.find('GlobalData');
        var recordScore = cc.sys.localStorage.getItem('recordScore') || 0;
        this.recordLabel.string = recordScore;
    },

    btnAction(event, eventData){
        if (eventData === 'clearBtn') {
            let recordScore = 0;
            cc.sys.localStorage.setItem('recordScore', recordScore);
            this.recordLabel.string = recordScore;
        } else if (eventData === 'menuBtn') {
            cc.director.loadScene('Menu');
        } else if (eventData === 'restartBtn') {
            cc.director.loadScene('Game');
        } else if (eventData === 'backBtn') {
            this.node.destroy();
            event.stopPropagation();
        }
    }
});
