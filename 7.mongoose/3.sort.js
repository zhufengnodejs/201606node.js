var Model = {
    data:[2,1,3,4,6,5,7,8,9,10],//模拟数据库中的数据
    skip(num){
        this._skip = num;
        return this;
    },
    limit(num){
        this._limit = num;
        return this;
    },
    sort(order){ // 1 升序 -1 降序
        this._order = order;
        return this;
    },
    exec(callback){
       process.nextTick(()=>{
           var page = this.data.sort((a,b)=>(a-b)*this._order)
               .slice(this._skip,this._skip+this._limit);
           callback(page);
       })
        return this;
    }
}

Model.skip(3).limit(3).exec(function(data){
    console.log(data);// 7 6 5
}).sort(-1);