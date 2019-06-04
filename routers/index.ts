const router = require('koa-router')();
const fs = require('fs')
const path = require('path');
// 首页逻辑处理
const indexRequset=require('../controllers/index.ts');
const files = fs.readdirSync(__dirname);




files
  .filter(file => ~file.search(/^[^\.].*\.ts$/))
  .forEach(file => {
    const file_name = file.substr(0, file.length - 3);
    const file_entity = require(path.join(__dirname, file));
    if (file_name !== 'index') {
      router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
    }
  })

// 首页
const home = require('koa-router')();
home.get('/', (ctx, next) => {
  indexRequset.log(ctx)
});
router.use('', home.routes(), home.allowedMethods());
module.exports = router;
