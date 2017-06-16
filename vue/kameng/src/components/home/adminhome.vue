<template>
  <div class="adminhome">
    <kmhead/>
    <el-row >
      <el-col :span="3" :push="3"><div class="grid-content" style='height: 600px;border:1px solid yellow'>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index='1' @click='sellerApplyList'><i class="el-icon-setting"></i>商户申请</el-menu-item>
          <el-menu-item index='2'><i class="el-icon-setting"></i>商户管理</el-menu-item>
          <el-menu-item index='3' ><i class="el-icon-setting"></i>用户管理</el-menu-item>
        </el-menu>

      </div></el-col>
      <el-col :span="15" :push="3">
        <component :is="currentView"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Head from '../Head'
import SellerApplyList from '../admin/sellerApplyList'
export default {
  name: 'hello',
  data () {
    return {
      currentView:null
    }
  },
  components:{
    kmhead:Head
  },
  methods:{
    sellerApplyList(){
      this.currentView=SellerApplyList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/emi/eui.css'
</style>
