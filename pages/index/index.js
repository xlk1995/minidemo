// index.js
Page({

  data: {

    userInfo: {

    }
  }, 
  handleClick(){
    console.log('我被点击了！');
  },
  handleInput(e){
    console.log(e.detail.value);
  }, 
  handleGetMaskData(e){
    console.log(e.mark);
  }, 
  handleChange(){
    const userInfo =  {
      ...this.data.userInfo,
      name: 'xx',
      age: 12
    }
    
    this.setData({
      userInfo
    })
    const {age,...rest} = this.data.userInfo
    this.setData({
      userInfo: rest
    })
  }
})
