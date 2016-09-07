let arr = [];
for (var i = 0; i < 3; i++) {
    (function(i){
        setTimeout(function(){
            console.log(i);
        },1000);
    })(i)
}
