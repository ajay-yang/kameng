<template>
	<el-dialog title="登陆/注册" v-model="dialogFormVisible">
	<el-row >
      <el-col :span="10">
		  <el-form name='loginForm'>
		    <el-form-item label="登陆:" >
		      <el-input name='email' auto-complete="off" placeholder='请填写email'></el-input>
		    </el-form-item>
		    <el-form-item label="" >
		    	<el-input name='pwd' type='password' auto-complete="off" placeholder='请填写密码'></el-input>
		    </el-form-item>
		    <el-form-item>
			    <el-button type="primary" @click="onLogin">登陆</el-button>
			</el-form-item>

		  </el-form>
	  </el-col>
	  <el-col :span="2">
	  	<div style='margin:auto;height: 300px;width:0px;border:0px solid #aba'></div> 
	  </el-col>
	  <el-col :span="10">
	  	<el-form name='registerForm'>
		    <el-form-item label="注册:" >
		      <el-input name='email' auto-complete="off" placeholder='请填写email'></el-input>
		    </el-form-item>
		    <el-form-item label="" >
		    	<el-input name='pwd' auto-complete="off" placeholder='请填写密码'></el-input>
		    </el-form-item>
		    <el-form-item label="" >
		    	<el-input name='repwd' auto-complete="off" placeholder='再填一次密码'></el-input>
		    </el-form-item>
		    <el-form-item label="" >
		    	<el-input name='nicheng' auto-complete="off" placeholder='请填写昵称'></el-input>
		    </el-form-item>
		    <el-form-item>
			    <el-button type="primary" @click="onRegist">注册</el-button>
			</el-form-item>

		  </el-form>
	  </el-col>
	  </el-row>
	  <div slot="footer" class="dialog-footer" style='text-align:center'>
	    <el-button @click="dialogFormVisible = false">关闭窗口</el-button>
	    
	  </div>
	</el-dialog>
</template>
<script type="text/javascript">
	import {onlogin,onRegister} from '../../vuex/actions/UserAction';
	export default{
		data(){
			return {
				dialogFormVisible:false,
				form:{
					name:'',
					region:''
				}
			}
		},
		methods:{
			onLogin:function(){
				onlogin(loginForm);
			},
			onRegist:function(){
				onRegister(registerForm);
			}
		}
	}
</script>