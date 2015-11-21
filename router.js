/**
 * Created by durban on 15/11/21.
 */
const Router = require('koa-router')();
const Home = require('./controller/home');

Router.all('/', function *(next) {
  console.log('i ams');
  this.body = 'Hello World!';
});

Router.get('/add/user', function *(next) {
  console.log('add user');
  this.body = 'Add User';
});

Router.get('/login', Home.doLogin);

module.exports = Router;