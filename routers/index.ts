const router = require('koa-router')();
const fs = require('fs')
const path = require('path')
const 
const files = fs.readdirSync(__dirname);

//首页
const home = require('koa-router')();
home.get('/', (ctx, next) => {
  
});
router.use('', home.routes(), home.allowedMethods());


files
  .filter(file => ~file.search(/^[^\.].*\.ts$/))
  .forEach(file => {
    const file_name = file.substr(0, file.length - 3);
    const file_entity = require(path.join(__dirname, file));
    if (file_name !== 'index') {
      router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
    }
  })

module.exports = router;
