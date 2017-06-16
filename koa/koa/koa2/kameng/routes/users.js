var router = require('koa-router')();
let  Users = require('../models/UserModel');

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.post('/zhuce', async function (ctx, next) {
	// console.log(ctx.request.body);
	// let email=ctx.request.body.email;
	// let pwd = ctx.request.body.pwd;
	// console.log(email);
	// console.log(pwd);
 //  	ctx.body = 'aaaaaa='+email;

  	  ctx.request.body['role']=1;
	  ctx.request.body['updtime']=new Date();
	  try{
	    let rs = await Users.create(ctx.request.body);
	    ctx.body = 1;//{type:1};
	  }catch(err){
	  	console.log('---aaaaaa---------------------------aaaaaaa---');
	  	console.log(err.fields);
	  	console.log('---bbbbbb---------------------------bbbbbbbb---');
	    if(err.fields.emailuniq){
	      ctx.body = 0;//{type:0,msg:'email重复'};
	    }else if(err.fields.nichenguniq){
	      ctx.body = 0;//{type:0,msg:'昵称重复'};
	    }else{
	      ctx.body = 0;//{type:0,msg:'数据库错误'};
	    }
	  }
});

router.post('/login', async function (ctx, next) {
  	  ctx.body={id:1,name:'张三'};
});

module.exports = router;
