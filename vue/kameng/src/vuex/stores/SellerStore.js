//import Vue from 'vue';
import Vuex from 'vuex';
//Vue.use(Vuex);			//vuex初始化

let shoptype=[,'家教','理发美容','餐饮','汽车服务','其他'];
let seller = new Vuex.Store({
  state:{			//存储空间
  	sellerApplyList:[]
  },
  mutations:{			//事件响应，修改存储的方法集
  	sellerApplyList(state,data){
        let len = data.length;
        for(let i=0;i<len;i++){
          data[i]['shoptype'] = shoptype[data[i].shoptype];
        }
        state.sellerApplyList=data;
    }
  }
});

export default seller;