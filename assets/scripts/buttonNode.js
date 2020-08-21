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
    },

    onButtonPressed: function(){
        this.gameCtl.startGame();
    },

    // onLoad: function(){
        
    // },


    // update (dt) {},
});
