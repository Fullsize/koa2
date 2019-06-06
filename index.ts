// 引入koa
import Koa from 'koa';

// 启用koa2
const app = new Koa();

// 引用文件模块
import fs from 'fs';

// 自定义中间件
import loggerGennerator from './middleware/logger-generator.ts';

// 引入router
import router from './routers/index.ts';

// body-parser中间件
import bodyParser from 'koa-bodyparser';

//引入koa-static中间件 加载静态资源
import koaStatic from 'koa-static';

//path
import path from 'path';

//静态文件路径
const staticPath = './static'

// 加载中间件
app.use(loggerGennerator())
app.use(bodyParser())
// 静态资源路径
app.use(koaStatic(path.join(__dirname, staticPath)))
// 启用路由
app.use(router.routes())
// router.allowedMethods()作用： 这是官方文档的推荐用法,
app.use(router.allowedMethods());

app.listen(3300);