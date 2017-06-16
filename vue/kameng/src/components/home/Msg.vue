<template>
	<div>
		<table align="center" width="90%">
			<tr align="center">
				<td>发送人</td>
				<td>消息</td>
				<td>发送时间</td>
				<td>操作
					<el-button size="large" type='success' @click="newMsg()">新消息</el-button>
				</td>
			</tr>
			<template v-for="(msg,index)  in tableData">
			<tr>
				<td>{{msg.nicheng}}</td>
				<td>{{msg.message}}</td>
				<td>{{msg.sendtime}}</td>
				<td>
					<el-button
          size="small"
          @click="reply(msg.sendid,msg.nicheng)">回复</el-button>
          &nbsp;
          <el-button
          size="small"
          @click="del(msg.id)">删除</el-button>
				</td>
			</tr>
			</template>
			<tr>
				<td colspan='4' align='center'>
					<div class="block">
					  <el-pagination
					   @current-change="handleCurrentChange"
					   :current-page="page"
				       :page-size="2"
				       layout="total, prev, pager, next"
				       :total="count">
					  </el-pagination>
					</div>

				</td>
			</tr>
		</table>
		<!-- <el-table :data="tableData" style="width: 100%">
		  <el-table-column
	        prop="nicheng"
	        label="发送人">
	      </el-table-column>
	      <el-table-column
	        prop="message"
	        label="消息">
	      </el-table-column>
	      <el-table-column
	        label='操作'
	      >
	        <template scope="scope">
	        
	        	<el-button
          size="small"
          @click="reply(scope.row.sendid,scope.row.nicheng)">回复</el-button>
          &nbsp;
          <el-button
          size="small"
          @click="del(scope.row.id)">删除</el-button>
	        </template>
	      </el-table-column>
	    </el-table> -->
	    
	    <sendmsg ref='sendmsg'/>
	</div>
</template>
<script type="text/javascript">
import {getMsg} from '../../vuex/actions/HomeAction';
import {delMsg} from '../../vuex/actions/MsgAction';
import {getMsgList} from '../../vuex/getters/HomeGetter';
import SendMsg from '../msg/SendMsg';
	export default{
		data(){
			return {
				tableData:[],
				page:1,
				count:0
			}
		}, 
		created(){
			let thisa = this;
			getMsg(thisa,1);
		},
		methods:{
			newMsg(){
				this.$refs.sendmsg.title = '新消息';
				this.$refs.sendmsg.rdisplay='none';
				this.$refs.sendmsg.ndisplay='block';
				this.$refs.sendmsg.dialogFormVisible=true;
			},
			reply(sendid,nicheng){
				this.$refs.sendmsg.form.rid = sendid;
				this.$refs.sendmsg.title = '回复:'+nicheng;
				this.$refs.sendmsg.ndisplay='none';
				this.$refs.sendmsg.rdisplay='block';
				this.$refs.sendmsg.dialogFormVisible=true;

			},
			del(msgid){
				if(confirm('确定删除吗?')){
					delMsg(msgid,this);
				}
			},
			handleCurrentChange(val) {
	        	this.page = val;
	        	let thisa = this;
	        	getMsg(thisa,this.page);
	        }
		},
		components:{
			sendmsg:SendMsg
		}
	}
</script>
<style>
/*@import url("//unpkg.com/element-ui/lib/theme-default/index.css");*/
</style>