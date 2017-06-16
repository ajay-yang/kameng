import sellerStore from '../stores/SellerStore'
import {httpPost,httpGet} from '../../common/HttpBean'

export function sellerApplyList(){
	httpGet('http://localhost:3000/sellers/sellerApplyList',{},function(err,rs){
    	sellerStore.commit('sellerApplyList',rs[0]);
    });
}

export function acceptApply(id,uid){
	httpGet('http://localhost:3000/sellers/acceptApply?id='+id+"&uid="+uid,{},function(err,rs){
    	//sellerStore.commit('acceptApply',rs);
    	if(rs==1){
    		alert('审核通过');
    		sellerApplyList();
    	}else{
    		alert('数据库操作失败');
    	}
    });
}

export function rejectApply(id,uid){
    httpGet('http://localhost:3000/sellers/rejectApply?id='+id+"&uid="+uid,{},function(err,rs){
        //sellerStore.commit('acceptApply',rs);
        if(rs==1){
            alert('审核驳回');
            sellerApplyList();
        }else{
            alert('数据库操作失败');
        }
    });
}
