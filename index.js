const Koa=require('koa');
const app=new Koa();
app.listen(3300);
app.use(async (ctx)=>{
	ctx.body='hello koa2'
})