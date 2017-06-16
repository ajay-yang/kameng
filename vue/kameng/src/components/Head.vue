<template>
  <div>
    <el-row >
      <el-col :span="3" :push="3"><div class="grid-content bg-purple-dark" >logo</div></el-col>
      <el-col :span="9" :push="3"><div class="grid-content bg-purple-dark">
        <el-input
          placeholder="请输入查找内容"
          icon="search"
          >
        </el-input>
        </div></el-col>
        <el-col :span="1" :push="3">
            <el-button type="default">搜</el-button>
        </el-col>
      <el-col :span="5" :push="3">

            <el-button v-if="loginBean.id==0" type="primary" @click='login'>登陆/注册</el-button>
            <div v-else>
              你好,{{loginBean.nicheng}}&nbsp;
              <router-link v-if='loginBean.role==1' to="/uhome">消息({{loginBean.msgNum}})</router-link>&nbsp;
              <router-link v-if='loginBean.role==1' to="/uhome">个人空间</router-link>
              <router-link v-if='loginBean.role==0' to="/adminhome">管理员空间</router-link>
              &nbsp;
              <a href="#" @click='logout'>注销</a>
            </div>
            
      </el-col>
    </el-row>
    
    <login ref='login'/>
  </div>
</template>

<script>
import Login from './user/login'
//import loginbean from '../common/LoginBean'
import {agetLoginBean,logout} from '../vuex/actions/UserAction';
import {getLoginBean,zhuceFinish,loginFinish} from '../vuex/getters/UserGetter';



export default {
  data(){
    return {
      //loginBean:{id:0,nicheng:'',role:-1}
    }
  },
  methods:{
    login:function(){
      this.$refs.login.dialogFormVisible=true;
    },
    logout:function(){
      logout();
    }
  },
  components:{
    login:Login
  },
  computed:{
    loginBean:getLoginBean,
    zhuceRs:zhuceFinish,
    loginRs:loginFinish
  },
  watch:{
    loginBean:function(rs){
      this.loginBean = rs;
    },
    zhuceRs:function(rs){
      if(rs.type==1){
       alert('注册成功');
       this.$refs.login.dialogFormVisible=false;
      }else{
       alert(rs.msg);
      }
    },
    loginRs:function(rs){
      if(rs.type==1){
       alert('登陆成功');
       this.$refs.login.dialogFormVisible=false;
       //this.loginBean = rs;
       //loginbean = rs;
      }else{
       alert('账号/密码错误');
      }
    }
  },
  mounted(){
    agetLoginBean();
  }
}
</script>

<style scoped>
@import '../assets/emi/eui.css'
</style>
