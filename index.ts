// 引入koa
const Koa=require('koa');

// 	启用koa2
const app=new Koa();

//引用文件模块
const fs=require('fs');

//自定义中间件
const loggerGennerator=require('./middleware/logger-generator.js');

//引入router
const Router=require('koa-router');
app.use(loggerGennerator())
app.use(async (ctx)=>{
	ctx.body='hello koa2'
})

app.listen(3300);