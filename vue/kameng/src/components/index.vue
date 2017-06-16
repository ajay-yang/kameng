<template>
  <div class="hello">
    <kmhead/>
    <div ref='map' style='height:1px;background: green'>
    </div>
    
  </div>
</template>

<script>
import Head from './Head'
export default {
  name: 'hello',
  components:{
    kmhead:Head
  },
  mounted(){
    this.$refs.map.style.height=(window.innerHeight-80)/16+'em';
  }
}
</script>

<style scoped>

</style>
