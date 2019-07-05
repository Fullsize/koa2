
import indexRequset from '../controllers/home.ts';
import Router from 'koa-router';
const router=Router();
router.get('/', async (ctx, next) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
});

router.post('/', (ctx, next) => {
  indexRequset.log(ctx)
});
export default router;