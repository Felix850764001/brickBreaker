// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.scoreLabel.string = '0';
    },

    updateScore(score){
        this.scoreLabel.string = score;
    }


    // update (dt) {},
});
