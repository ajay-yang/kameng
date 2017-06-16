class LoginBean { 
  static getInstance() { 
    if (!LoginBean.instance) { 
      LoginBean.instance = new LoginBean(); 
    } 
    return LoginBean.instance; 
  }
  constructor() { 
      this.id = 0; 
      this.nicheng = null;
      this.role = -1;
  }  
} 
 
var loginbean = LoginBean.getInstance(); 
export default loginbean;