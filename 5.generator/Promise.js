class Promise{
   constructor(fn){
       //当调用resolve方法的时候表示任务成功了，要调用成功的回调函数
     var resolve = (data)=>{
        this._onSuccess(data);
     }
       //当调用reject方法的时候表示任务失败了，要调用失败的回调函数
     var reject = (error)=>{
         this._onError(error);
     }
     fn(resolve,reject);
   }
   then(onSuccess,onError){
      this._onSuccess = onSuccess;
      this._onError = onError;
   }
}


module.exports = Promise;