// pages/cart/cart.js
import pubsub from 'pubsub-js'
const appInstance = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  
  },
  login(){
    appInstance.setToken()
    console.log(appInstance.globalData.token);
    pubsub.publish('refreshList', {list: [1,2,3]})
  },
  handleToList(){
    wx.navigateTo({
      url: '/pages/list/list',
      success(res){
        res.eventChannel.emit('cartEvent', {
          name: 'tom'
        })
      },
      events: {
        listEvent: (msg)=> {
          console.log('msg', msg);
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})