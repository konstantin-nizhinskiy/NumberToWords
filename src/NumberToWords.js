
(function(root,factory){
    if(typeof define ==='function' && define.amd){
        define('numberToWords',[],function(){
            return root.numberToWords=factory()
        })
    }else{
        root.numberToWords=factory();
    }
}(this,function(){
    var NumberToWords=function(){

    };
    // <%= prototype %>
    return new NumberToWords();
}));
