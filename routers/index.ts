import Router from 'koa-router';
const router=Router();
import fs from 'fs';
import path from 'path';
const files = fs.readdirSync(__dirname);




files
  .filter(file => ~file.search(/^[^\.].*\.ts$/))
  .forEach(file => {
    const file_name = file.substr(0, file.length - 3);
    const file_entity = require(path.join(__dirname, file))
    if (file_name !== 'index' && file_name !== 'home') {
      router.use(`/${file_name}`, file_entity.default.routes(), file_entity.default.allowedMethods())
    } else {
      if (file_name === 'home') {
        router.use('/', file_entity.default.routes(), file_entity.default.allowedMethods())
      }
    }
  })
export default router;
