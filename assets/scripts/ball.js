cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        //初始化位置
        this.node.position = cc.v2(360,270);
        //初始化速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);
        //开启刚体碰撞监听
        this.enabledContactListener = true;
    },

    //碰撞开始时调用
    onBeginContact(contact, self, other){
        switch(other.tag){
            case 1: //球碰撞砖块
                this.gameCtl.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰撞地面
                this.gameCtl.onBallContactGround(self.node, other.node);
                break;
            case 3: //球碰撞桨
                this.gameCtl.onBallContactPaddle(self.node, other.node);
                break;
            case 4: //球碰撞到墙
                this.gameCtl.onBallContactWall(self.node, other.node);
                break;
        }
    }
});
