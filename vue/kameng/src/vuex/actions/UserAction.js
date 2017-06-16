import userStore from '../stores/UserStore'
import {httpPost,httpGet,httpPostSerialize} from '../../common/HttpBean'

export function agetLoginBean(){
	httpGet('http://localhost:3000/users/getLoginBean',{},function(err,rs){
    	userStore.commit('getLoginBean',rs);
    });
}

export function onlogin(form){
    httpPost('http://localhost:3000/users/login',form,function(err,rs){
    	userStore.commit('login',rs);
    });
    //commit抛出事件,mutations中响应对应的事件changeItem
    //note.commit('changeItem',[{id:1,name:'张三',say:'hello'},{id:2,name:'李四',say:'你好'},{id:3,name:'王五',say:'哈哈'}]);
};
export function onRegister(form){
    httpPost('http://localhost:3000/users/zhuce',form,function(err,rs){
    	userStore.commit('zhuce',rs);
    });
    //commit抛出事件,mutations中响应对应的事件changeItem
    //note.commit('changeItem',[{id:1,name:'张三',say:'hello'},{id:2,name:'李四',say:'你好'},{id:3,name:'王五',say:'哈哈'}]);
};

export function logout(){
	httpGet('http://localhost:3000/users/logout',{},function(err,rs){
    	userStore.commit('getLoginBean',rs);
    });
}

export function onApplySeller(form){
	httpPostSerialize('http://localhost:3000/users/applySeller',form,function(err,rs){
		alert(rs);
    	//userStore.commit('applySeller',rs);
    });
}
