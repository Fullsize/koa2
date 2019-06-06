// ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
// ctx.cookies.set(name, value, [options]) 在上下文中写入cookie
const setCookie=(ctx,name,val,options)=>{
  console.log(name,val,options)
  ctx.cookies.set(name,val,options)
  ctx.body='cookie已经写入成功'
};
const getCookie=(ctx,name,options)=>{
  ctx.cookies.set(name,options)
};
export default {
  setCookie,
  getCookie
}
