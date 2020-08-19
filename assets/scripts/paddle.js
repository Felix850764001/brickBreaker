cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 0,
    },

    onLoad: function(){
        //开启物理系统(默认关闭)
        //cc.director.getPhysicsManager().enabled = true;
        // 初始化键盘监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
        // 获得节点上的刚体组件
        this.heroRigidBody = this.getComponent(cc.RigidBody);
    },

    onKeyPressed(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.direction = -1;
                break;
            case cc.macro.KEY.d:
                this.direction = 1;
                break;
        }
    },

    onKeyReleased(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.direction = 0;
                break;
            case cc.macro.KEY.d:
                this.direction = 0;
                break;
        }
    },

    on_player_walk: function(direction){
        //获取之前的刚体组件的线速度
        var v = this.heroRigidBody.linearVelocity;
        //改变其x方向速度
        v.x = this.moveSpeed * direction;
        //将改变后的值赋值回去
        this.heroRigidBody.linearVelocity = v;
    },

    init(){
        //初始化位置
        this.node.x = 360;
        //初始化速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,0);
        this.direction = 0;
    },

    update (dt){
        if(this.direction != 0){
            this.on_player_walk(this.direction);
        } else{
            this.heroRigidBody.linearVelocity = cc.v2(0,0);
        }
        //限制paddle在屏幕内移动
        if(this.node.x < 89){
            this.heroRigidBody.linearVelocity = cc.v2(0,0);
            this.node.x = 89;
        } else if(this.node.x > 631){
            this.heroRigidBody.linearVelocity = cc.v2(0,0);
            this.node.x = 631;
        }
    }
});