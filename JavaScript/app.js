var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
                                      
        cc.sys.localStorage.setItem( JSON.stringify( "Key1" ), JSON.stringify( 67 ) );
        
        var value = JSON.parse( cc.sys.localStorage.getItem( JSON.stringify( "Key1" ) ) );
                                      
        cc.log( value );
                                      
        return true;
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});