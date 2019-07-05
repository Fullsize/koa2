const log=(ctx)=>{
	return ctx
}
export default function(){
	return async function(ctx,next){
		log(ctx)
		if(next){
			await next()
		}
	}
	
}