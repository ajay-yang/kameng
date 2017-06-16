<template>
  <div>
    <el-form ref="form" name='applyForm' label-width="150px">
	  <el-form-item label="店铺名称:">
	    <el-input name='shopname'></el-input>
	  </el-form-item>
	  <el-form-item label="营业执照编号:">
	    <el-input name='licenseid'></el-input>
	  </el-form-item>
	  <el-form-item label="营业执照影印件" style='text-align:left'>
	  	<el-button type="primary">
	  	<input type='file' name='licensephoto'/>
	  	</el-button>
	  </el-form-item>
	  <el-form-item label="店主身份证号">
	    <el-input name='idnumber'></el-input>
	  </el-form-item>
	  <el-form-item label="店主手持身份证照" style='text-align:left'>
	    <el-button type="primary">
	  	<input type='file' name='idphoto'/>
	  	</el-button>
	  </el-form-item>
	  <el-form-item label="店铺分类" style='text-align: left'>
	    <el-select name='shoptype' v-model="typevalue" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		 </el-select>
	  </el-form-item>
	  <el-form-item label="店铺描述">
	  	<el-input
		  type="textarea"
		  :rows="6"
		  name='description'
		  >
		</el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="onSubmit">立即创建</el-button>
	    <el-button>取消</el-button>
	  </el-form-item>
	</el-form>
  </div>
</template>

<script>
import {onApplySeller} from '../../vuex/actions/UserAction';
export default {
  data () {
    return {
      fileList:[],
      typevalue:'',
      options: [{
          value: '1',
          label: '家教'
        }, {
          value: '2',
          label: '理发美容'
        }, {
          value: '3',
          label: '餐饮'
        }, {
          value: '4',
          label: '汽车'
        }, {
          value: '5',
          label: '其他'
        }]
    }
  },
  methods:{
  	handleRemove(file, fileList) {
        console.log(file, fileList);
	  },
	  handlePreview(file) {
	    alert('aa');
	  },
	  onSubmit(){
	  	let len = this.options.length;
	  	let shoptypeLable = applyForm.shoptype.value;
	  	for(let i=0;i<len;i++){
	  		if(this.options[i].label==shoptypeLable){
	  			applyForm.shoptype.value=this.options[i].value;
	  			break;
	  		}
	  	}
	  	onApplySeller(applyForm);
	  }
  }
}
</script>

<style scoped>

</style>
