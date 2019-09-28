cc.Class({
    extends: cc.Component,

    properties: {
        currentScore: cc.Label,
        recordScore: cc.Label
    },

    onLoad () {
        this.GlobalData = cc.find('GlobalData');
        let nowScore = this.GlobalData && this.GlobalData.currentScore || 0;
        var recordScore = cc.sys.localStorage.getItem('recordScore') || 0;
        if (recordScore < nowScore) {
            recordScore = Math.max(nowScore, recordScore);
            cc.sys.localStorage.setItem('recordScore', nowScore);
        }
        this.currentScore.string = nowScore;
        this.recordScore.string = recordScore;
    },

    replayGame () {
        cc.director.loadScene('Game');
    }
})
;
