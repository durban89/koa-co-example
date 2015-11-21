/**
 * Created by durban on 15/11/21.
 */

const Koa = require('koa');
const app = new Koa();
const Router = require('./router');

app.use(Router.routes());

app.use(function *(next){
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}ms`);
});

app.listen(3008);