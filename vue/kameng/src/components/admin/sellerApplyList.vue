<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
		  <el-table-column type="expand">
		  	<template scope="props" >
		  		<table width='100%'>
		  			<tr>
		  				<td align='center' colspan='2'>店铺名称:{{ props.row.shopname }}</td>
		  			</tr>
		  			<tr>
		  				<td align='right'>营业执照编号</td>
		  				<td>{{ props.row.licenseid}}</td>
		  			</tr>
		  			<tr>
		  				<td colspan='2'>
		  					<img :src='"http://localhost:3000/"+props.row.licensephoto'/>
		  				</td>
		  			</tr>
		  			<tr>
		  				<td align='right'>申请人</td>
		  				<td>{{ props.row.nicheng}}</td>
		  			</tr>
		  			<tr>
		  				<td align='right'>申请人身份证号</td>
		  				<td>{{ props.row.idnumber }}</td>
		  			</tr>
		  			<tr>
		  				<td colspan='2' align='center'>
		  					<img :src='"http://localhost:3000/"+props.row.idphoto'/>
		  				</td>
		  			</tr>
		  			<tr>
		  				<td align='right'>店铺类型</td>
		  				<td>{{ props.row.shoptype }}</td>
		  			</tr>
		  			<tr>
		  				<td align='right'>店铺描述</td>
		  				<td>{{ props.row.description }}</td>
		  			</tr>
		  			<tr>
		  				<td colspan='2' align='center'>
		  					<el-button type="primary" @click='accept(props.row.id,props.row.uid)'>接受申请</el-button>&nbsp;
		  					<el-button type="primary" @click='reject(props.row.id,props.row.uid)'>驳回申请</el-button>
		  				</td>
		  			</tr>
		  		</table>
		      </template>
		  </el-table-column>
	      <el-table-column
	        prop="nicheng"
	        label="申请人"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        label="商铺名称"
	        width="180">
	        <template scope="scope">
	        	<el-button type="text" size="small" @click="lookApplyInfo(scope.row.id)">
	        	{{scope.row.shopname}}
	        	</el-button>
	      	</template>
	      </el-table-column>
	      <el-table-column
	        prop="shoptype"
	        label="商铺类别">
	      </el-table-column>
	    </el-table>
	</div>
</template>
<script type="text/javascript">
import {sellerApplyList,acceptApply,rejectApply} from '../../vuex/actions/SellerAction'
import {getSellerApplyList} from '../../vuex/getters/SellerGetter'
	export default{
		data(){
			sellerApplyList();
			return {
			}
		},
		computed:{
			tableData:getSellerApplyList
		},
		methods:{
			accept:function(id,uid){
				acceptApply(id,uid);
			},
			reject:function(id,uid){
				rejectApply(id,uid);
			}
		}
	}
</script>
<style>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 180px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 30%;
  }
</style>