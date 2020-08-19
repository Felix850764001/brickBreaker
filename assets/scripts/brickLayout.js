cc.Class({
    extends: cc.Component,

    properties: {
        // padding: 0,
        // spacing: 0,
        // cols: 0,
        brickPrefab: cc.Prefab,
    },

    init(bricksNumber){
        this.node.removeAllChildren();
        this.bricksNumber = bricksNumber;
        console.log('数量为:'+bricksNumber);
        for(let i=0; i<this.bricksNumber; i++){
            var brickNode = cc.instantiate(this.brickPrefab);
            this.node.addChild(brickNode);
        }
    },

    // onLoad () {},

    // update (dt) {},
});
