import homeStore from '../stores/HomeStore'

export function getMsgList(vuea){
	return homeStore.state.msgrs;
}