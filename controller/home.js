/**
 * Created by durban on 15/11/21.
 */
'use strict';

const urllib = require('urllib');

module.exports.doLogin = function *(next){
  let res = yield urllib.requestThunk('http://www.baidu.com');
  console.log(res);
  this.body = '处理完数据';
};