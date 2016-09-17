var CronJob = require('cron').CronJob;
// 秒 分钟 小时 几号日 月份 星期
//每天的10点执行一次
var job = new CronJob('0 0 10 * * *',function(){
    console.log(new Date().toLocaleString());
});
job.start();