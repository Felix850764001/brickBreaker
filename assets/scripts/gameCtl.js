// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        gameView: require('gameView'),
        ball: require('ball'),
        paddle: require('brickLayout'),
        overPanel: require('overPanel'),
    },

    onLoad: function(){
        //安卓返回键退出
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keyCode === cc.KEY.back){
                cc.director.end();
            }
        });
        this.physicsManger = cc.director.getPhysicsManger();
        this.gameModel = new GameModel();
        this.startGame();
    },

    init(){
        this.physicsManger.enabled = true;
        this.gameModel.init();

        this.gameView.init(this);
        this.ball.init();
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        this.overPanel.init(this);
    },

    startGame(){
        this.init();
    },

    pauseGame(){
        this.physicsManger.enabled = false;
    },

    resumeGame(){
        this.physicsManger.enabled = true;
    },

    stopGame(){
        this.physicsManger.enabled = false;
        this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
    },

    onBallContactBrick(ballNode, brickNode){
        brickNode.parent = null;
        this.gameModel.addScore(1);
        this.gameModel.minusBrick(1);
        this.gameView.updateScore(this.gameModel.score);
        if(this.gameModel.bricksNumber <= 0){
            this.stopGame();
        }
    },

    onBallContactGround(ballNode, groundNode){
        this.stopGame();
    },

    onBallContactPaddle(ballNode, paddleNode){
        
    },

    onBallContactWall(ballNode, brickNode){

    },

    onDestroy(){
        this.physicsManger.enabled = false;
    }
    // update (dt) {},
});
