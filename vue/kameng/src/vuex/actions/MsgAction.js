
import {httpPost,httpGet} from '../../common/HttpBean'

export function replyMsg(form,thisa){
	httpPost('http://localhost:3000/msg/replymsg',form,function(err,rs){
		if(rs==1){
			alert('回复成功');
			thisa.dialogFormVisible=false;
		}else{
			alert('数据库错误,稍后再试');
		}
    });
}

export function newMsg(form,thisa){
	httpPost('http://localhost:3000/msg/newmsg',form,function(err,rs){
		if(rs==1){
			alert('发送成功');
			thisa.dialogFormVisible=false;
		}else if(rs==-1){
			alert('昵称输入有误,查无此人');
		}else{
			alert('数据库错误,稍后再试');
		}
    });
}

export function delMsg(msgid,thisa){
	httpGet('http://localhost:3000/msg/delmsg?id='+msgid,{},function(err,rs){
		if(rs.type==1){
			thisa.tableData=rs.rs;
		}
		// if(rs==1){
		// 	alert('回复成功');
		// 	thisa.dialogFormVisible=false;
		// }else{
		// 	alert('数据库错误,稍后再试');
		// }
    });
}
