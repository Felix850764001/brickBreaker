// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.position = cc.v2(360,270); //初始化位置
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);//初始化速度
    },

    onBeginContact(contact, self, other){
        switch(other.tag){
            case 1: //球碰撞砖块
                this.gameCtl.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰撞地面
                this.gameCtl.onBallContactGround(self.node, other.node);
                break;
            case 3: //球碰撞托盘
                this.gameCtl.onBallContactPaddle(self.node, other.node);
                break;
            case 4: //球碰撞到墙
                this.gameCtl.onBallContactWall(self.node, other.node);
                break;
        }
    }
});
