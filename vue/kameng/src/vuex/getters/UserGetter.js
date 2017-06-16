import userStore from '../stores/UserStore'

export function getLoginBean(vuea){
	return userStore.state.loginBean;
}
export function zhuceFinish(vuea){
	return userStore.state.zhuceRs;
}
export function loginFinish(vuea){
	return userStore.state.loginRs;
}