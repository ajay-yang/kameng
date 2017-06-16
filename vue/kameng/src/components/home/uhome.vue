<template>
  <div class="uhome">
    <kmhead/>
    <el-row >
      <el-col :span="3" :push="3"><div class="grid-content" style='height: 600px;border:1px solid yellow'>
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index='1'><i class="el-icon-setting"></i>我的卡包</el-menu-item>
          <el-menu-item index='2'><i class="el-icon-setting"></i>我的收藏</el-menu-item>
          <el-menu-item index='3' @click='applySeller'><i class="el-icon-setting"></i>申请为商家</el-menu-item>
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
import ApplySeller from './ApplySeller'
import Msg from './Msg'
export default {
  name: 'hello',
  data () {
    return {
      currentView:Msg
    }
  },
  components:{
    kmhead:Head
  },
  methods:{
    applySeller:function(){
      this.currentView=ApplySeller;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../assets/emi/eui.css'
</style>
