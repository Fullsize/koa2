import Router from 'koa-router';
const router=Router();
router.get('/', (ctx, next) => {
  ctx.body=ctx;
});
export default router;