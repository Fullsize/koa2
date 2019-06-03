const Koa=require('koa');
const app=new Koa();
const loggerGennerator=require('./middleware/logger-generator.js');

app.use(loggerGennerator())
app.use(async (ctx)=>{
	ctx.body='hello koa2'
})

app.listen(3300);