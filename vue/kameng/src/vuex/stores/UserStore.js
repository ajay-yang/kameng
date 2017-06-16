import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);			//vuex初始化


let user = new Vuex.Store({
  state:{			//存储空间
  	loginBean:null,
    zhuceRs:null,
    loginRs:null
  },
  mutations:{			//事件响应，修改存储的方法集
  	getLoginBean:function(state,data){
  		state.loginBean = data;
  	},
    zhuce:function(state,data){
    	state.zhuceRs = data;
    },
    login:function(state,data){
    	state.loginRs = data;
      state.loginBean = data.loginbean;
    }
  }
});

export default user;