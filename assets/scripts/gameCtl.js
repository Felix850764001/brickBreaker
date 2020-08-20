// const GameModel = require('GameModel');
cc.Class({
    extends: cc.Component,

    properties: {
        //gameModel: require('gameModel'),
        gameView: require('gameView'),
        ball: require('ball'),
        paddle: require('paddle'),
        brickLayout: require('brickLayout'),
        //overPanel: require('overPanel'),
    },

    onLoad: function(){
        this.gameModel = this.node.getComponent("gameModel");
        //this.gameModel = new GameModel();
        this.startGame();
    },

    init(){
        //开启物理系统(默认关闭)
        cc.director.getPhysicsManager().enabled = true;

        this.gameModel.init();
        this.gameView.init(this);
        this.ball.init(this);
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        //this.overPanel.init(this);
    },

    startGame(){
        this.init();
    },

    pauseGame(){
        cc.director.getPhysicsManager().enabled = false;
    },

    //重新开始
    resumeGame(){
        cc.director.getPhysicsManager().enabled = true;
    },

    //结束游戏
    stopGame(){
        cc.director.getPhysicsManager().enabled = false;
        //bricksNumber == 0判定WIN
        //this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
    },

    onBallContactBrick(ballNode, brickNode){
        //brickNode.parent = null;
        brickNode.opacity = 0;     //把砖块设置为透明
        brickNode.removeComponent(cc.RigidBody);      //移除刚体组件，让brick无法与ball碰撞
        this.gameModel.addScore(1);     //击中加分
        this.gameModel.minusBrick(1);   //砖块数量-1
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
        cc.director.getPhysicsManager().enabled = false;
    },

    // update (dt) {},
});
