//import Vue from 'vue';
import Vuex from 'vuex';
//Vue.use(Vuex);			//vuex初始化

let home = new Vuex.Store({
  state:{			//存储空间
  	msgrs:[]
  },
  mutations:{			//事件响应，修改存储的方法集
  	getMsg:function(state,data){
      state.msgrs = data;
    }
  }
});

export default home;