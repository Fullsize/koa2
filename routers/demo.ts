import Router from 'koa-router';
const router=Router();

router.get('/', function (ctx, next) {
  ctx.body = 'demo'
})

router.get('/child', function (ctx, next) {
  ctx.body = 'demo child'
})

export default router