// components/custom-01/custom-01.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    label: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0, 
    str: 'xx',
    obj:{
      name: 'uu'
    }, 
    arr: [1,2,3]
  },
  observers: {
    num: function(newValue){
      console.log(newValue, "num")
    },
    str: function(newValue){
      console.log(newValue, 'str');
    },
    "num, str": function(newNum, newStr){
      console.log(newNum, newStr, '====');
    },
    'obj.name': function(newValue){
      console.log(newValue, 'obj.name');
    },
    // 监听整个对象
    'obj.**': function(newValue){
      console.log(newValue, 'obj.**');
    },
    // 监听props， 初始会运行一次
    'label': function(newValue){
      console.log(newValue, 'lable');
    },

  }, 
  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(){
      this.setData({
        num: this.data.num + 1,
        str: 'oo' + new Date(),
        'obj.name': 'pp',
        'arr[1]': this.data.num + 1,
        label: '我改变了'
      })
    }
  }
})