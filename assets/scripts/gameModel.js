//游戏数据监控脚本(控制分数和砖块数)
cc.Class({
    extends: cc.Component,

    properties: {
        bricksNumber: 0,
    },
    
    init(){
        //初始化分数
        this.score = 0;
        this.num = this.bricksNumber;
    },

    addScore(score){
        this.score += score;
    },

    minusBrick(n){
        this.num -= n;
    },

});
