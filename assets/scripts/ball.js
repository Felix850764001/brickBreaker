cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    init(gameCtl){
        //开启物理系统(默认关闭)
        //cc.director.getPhysicsManager().enabled = true;
        this.gameCtl = gameCtl;
        //随机初始化位置
        this.node.position = cc.v2(50+Math.random()*680,270);
        //初始化速度
        v = Math.random()-0.5;
        if(v <= 0){
            v = -1;
        } else{
            v = 1;
        }
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(v * 800,800);
        // 获得节点上的刚体组件
        this.heroRigidBody = this.getComponent(cc.RigidBody);
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
