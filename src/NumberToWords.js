
(function(root,factory){
    if(typeof define ==='function' && define.amd){
        define([],function(){
            return root.numberToWords=factory()
        })
    } else if(typeof module === "object" && module.exports) {
        // the CommonJS loader.
        module.exports = (root.numberToWords = factory());
    } else{
        return root.numberToWords=factory();
    }
}(this,function(){
    var NumberToWords=function(){

    };
    // <%= prototype %>
    return new NumberToWords();
}));
