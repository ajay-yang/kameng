import homeStore from '../stores/HomeStore'
import {httpPost,httpGet} from '../../common/HttpBean'

export function getMsg(thisa,page){
	httpGet('http://localhost:3000/uhome/?page='+page,{},function(err,rs){
    	//homeStore.commit('getMsg',rs);
        thisa.tableData = rs.msgRs;
        thisa.count = rs.count;
        thisa.page = parseInt(rs.page);
    });
}

