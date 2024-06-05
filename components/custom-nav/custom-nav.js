// components/custom-nav/custom-nav.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      // String Number Boolean Object Array  null（所有）
      type: String,
      value: ''
    }
  },
  options: {
    // 开启多slot
    multipleSlots: true, 
    // 开始不需要样式隔离 用于修改组件样式
    styleIsolation: 'shared'
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})