<template>
	<el-dialog :title="title" v-model="dialogFormVisible">
	<el-row ref='replyForm' :style="{display:rdisplay}">
      <el-col :span="20">
		  <el-form name='replyForm'>
		    <el-form-item  label="消息:">
		      <el-input
		      name='message'
			  type="textarea"
			  :autosize="{ minRows: 6, maxRows: 40,cols:120}"
			  placeholder="请输入消息内容">
			</el-input>
		    </el-form-item>
		    <el-form-item>
		    	<input type='hidden' name='rid' :value='form.rid'/>
			    <el-button type="primary" @click="reply">回复</el-button>
			</el-form-item>

		  </el-form>
	  </el-col>
	  </el-row>
	  <div ref='newForm' :style="{display:ndisplay}">
	  	<el-form name='newForm'>
		  <el-row >
	      <el-col :span="20">
	      		<el-form-item  label="接收人昵称:">
			      <el-input
			      name='nicheng'
				  type="input"
				  placeholder="请输入收件人昵称">
				</el-input>
				</el-form-item>
			    <el-form-item  label="消息:">
			      <el-input
			      name='message'
				  type="textarea"
				  :autosize="{ minRows: 6, maxRows: 40,cols:120}"
				  placeholder="请输入消息内容">
				</el-input>
			    </el-form-item>
			    <el-form-item>
			    	<input type='hidden' name='rid' :value='form.rid'/>
				    <el-button type="primary" @click="newMsg">发送</el-button>
				</el-form-item>
		  </el-col>
		  </el-row>
		</el-form>
	  </div>

	  <div slot="footer" class="dialog-footer" style='text-align:center'>
	    <el-button @click="dialogFormVisible = false">关闭窗口</el-button>
	  </div>
	</el-dialog>
</template>
<script type="text/javascript">
	import {newMsg,replyMsg} from '../../vuex/actions/MsgAction';
	export default{
		data(){
			return {
				rdisplay:'none',
				ndisplay:'block',
				title:'消息回复',
				dialogFormVisible:false,
				form:{
					rid:0
				}
			}
		},
		methods:{
			reply:function(){
				replyMsg(replyForm,this);
			},
			newMsg(){
				newMsg(newForm,this);
			},
			onRegist:function(){
				onRegister(registerForm);
			}
		}
	}
</script>