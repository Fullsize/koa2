
import indexRequset from '../controllers/home.ts';
import Router from 'koa-router';
const router=Router();
router.get('/', (ctx, next) => {
  indexRequset.log(ctx)
});
router.post('/', (ctx, next) => {
  indexRequset.log(ctx)
});
export default router;