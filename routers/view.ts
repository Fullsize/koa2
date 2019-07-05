import Router from 'koa-router';
const router = Router();
router.get('/',async (ctx, next) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
})
export default router;