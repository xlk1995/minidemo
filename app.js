// app.js
App({

  onLaunch(){
    const updateManager = wx.getUpdateManager()
    // 监听下载状态， 下载完之后触发onUpdateReady方法
    updateManager.onUpdateReady(()=> {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        complete: (res) => {      
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
  }
})
