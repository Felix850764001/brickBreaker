//实时分数显示脚本
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
    },

    init(gameCtl){
        //this.gameCtl = gameCtl;
        this.scoreLabel.string = '0';
    },

    updateScore(score){
        this.scoreLabel.string = score;
    }


    // update (dt) {},
});
