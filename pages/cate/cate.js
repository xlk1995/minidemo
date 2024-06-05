// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: [1, 2, 3],
    isTriggered: false
  },
  refreshHandler () {

    wx.showToast({
      title: '下拉刷新...'
    })
    
    setTimeout(() => {
      this.setData({
        numList: [1, 2, 3],
        isTriggered: false
      })
    }, 2000)

  },
    // scroll-view 上拉加载更多事件的事件处理函数
    getMore () {

    
      wx.showLoading({
        title: '数据加载中...'
      })
  
      setTimeout(() => {
        // 获取数组的最后一项
        const lastNum = this.data.numList[this.data.numList.length - 1]
        // 定义需要追加的元素
        const newArr = [lastNum + 1, lastNum + 2, lastNum + 3]
  
        this.setData({
          numList: [...this.data.numList, ...newArr]
        })
  
        wx.hideLoading()
      }, 1500)
  
  
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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