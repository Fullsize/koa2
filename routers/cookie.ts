import Router from 'koa-router';
import Cookie from '../controllers/cookie.ts';
const router = Router();
router.get('/', async (ctx, next) => {
  ctx.cookies.set('time', '2019-06-06');
  ctx.body='cookie is ok'
})
router.post('/', (ctx, next) => {

})
export default router;