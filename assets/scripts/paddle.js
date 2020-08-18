cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 0,
    },

    onLoad: function(){
        // 设置键盘监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    },

    onKeyPressed: function(event){
        let keyCode = event.keyCode;
        switch(keyCode){
            case cc.macro.KEY.a:
                this.direction = -1;
                break;
            case cc.macro.KEY.d:
                this.direction = 1;
                break;
        }
    },

    onKeyReleased: function(event){
        let keyCode = event.keyCode;
        switch(keyCode){
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
        this.node.x = 360;
    },

    update (dt){
        if(this.direction != 0){
            this.on_player_walk(this.direction);
        }
        //限制paddle在屏幕内移动
        if(this.node.x <= 89 || this.node.x >= 631){
            this.direction = 0;
        }
    }
});
