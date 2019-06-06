const log=(ctx)=>{
	console.log(ctx.method,ctx.header.host+ctx.url)
}
export default function(){
	return async function(ctx,next){
		log(ctx)
		if(next){
			await next()
		}
	}
	
}