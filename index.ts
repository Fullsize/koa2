// 引入koa
const Koa = require('koa');

// 启用koa2
const app = new Koa();

// 引用文件模块
const fs = require('fs');

// 自定义中间件
const loggerGennerator = require('./middleware/logger-generator.js');

// 引入router
const router = require('./routers/index.ts');

// 加载中间件
app.use(loggerGennerator())

// 启用路由
app.use(router.routes())
// router.allowedMethods()作用： 这是官方文档的推荐用法,
app.use(router.allowedMethods());




app.listen(3300);