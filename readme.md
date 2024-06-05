## 文件目录

### 配置文件

1. app.json 小程序全局配置文件
2. 页面.json 每个页面的配置文件
3. project.config.json  小程序的项目配置文件
4. sitemap.json 配置小程序及其页面是否允许被微信索引
5. project.private.config.json 私有配置，放入.gitignore中


#### app.json

```json
  "entryPagePath": "pages/list/list", // 入口文件路径
  "pages": [ // 可在pages数组中创建页面
    "pages/index/index", 
    "pages/list/list",
    "pages/cart/cart",
    "pages/profile/profile"
  ],
  "window": {
    "navigationBarTitleText": "demo",   // navbar的文字
    "navigationBarBackgroundColor": "#f3514f", // navbar的背景颜色
    "navigationBarTextStyle": "black", // navbar文字的颜色
    "enablePullDownRefresh": true, // 允许下拉刷新
    "backgroundColor": "#efefef", // 下拉刷新背景颜色
    "backgroundTextStyle": "light" // 下拉刷新三个点的颜色
  },
    "tabBar": { // tabBar配置
    "selectedColor": "#f3414f",
    "color": "#666",
    "borderStyle": "black",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      "iconPath": "/assets/tabbar/index.png",
      "selectedIconPath": "/assets/tabbar/index-active.png"
    }]
  },
```

#### project.config.json

```json
  "setting": {
    "useCompilerPlugins": [
      "sass" // 配置使用sass
    ]
  }

```

## 一些组件的用法

###  text

1. 可以复制
2. 可以多空格

### scroll-view

1. scroll-x
2. scroll-y

### navgation

- navgate
- swicthTab
- redirect
- relauch

## css

### 注意点

1. 根组件为page
2. 导入css文件之后必须加分号

### background-image

不支持本地路径， 需要使用网络图片或者base64，或者使用image组件。


## 事件绑定和事件对象

绑定事件使用bind方法， click使用tap事件来进行代替

```
  <button type="primary" size="mini" bind:tap="handleClick">click me</button>
  <button type="primary" size="mini" bindtap="handleClick">click me</button>
```

### 输入框事件

input 无边框

```html
<input type="text" bindinput="handleInput"/>
```

```
handleInput(e){
  console.log(e.detail.value);
}
```

### 冒泡事件和非冒泡事件

1. bind是冒泡事件
2. catch是非冒泡事件

### 事件传参之data

currentTarget指绑定事件的对象，target指触发事件的对象。

使用`-`会自动转为小驼峰，有大写会全部转为小写

### 事件传参之mask

```
  <view mark:parentid='1'>
    <button mark:id='2' bind:tap="handleGetMaskData">点我</button>
  </view>
```

### 简易双向绑定

不能绑定对象

```
model:value
model:checked
```

## 处理数据

### data注意事项

1. 需要使用`{{}}`。
2. 不能在里面使用做逻辑判断，使用js方法


#### 新增/修改/删除对象
删除使用rest。

```
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
```
#### 数组增删改

增： push concat 展开运算符

修改 

```javasript
this.setData({
  'list[0].name': 'xx'
})
```
删除使用splice， filter

## 循环渲染

可以循环数组和对象

需要注意的点

1. wx:for={{list}} 直接双大括号包裹
2. 默认渲染项为item，下标为index
3. 使用wx:for-item, wx:form-index修改上面的值
4. wx:key有两种使用形式，一种字符串， 使用唯一的key， 一种*this表示当前项
5. block标签相当于template

## 条件渲染

1. wx:if wx:elif wx:else
2. 使用hidden（相当于v-show）
3. 必须连贯


## 小程序生命周期

### 全局生命周期
1. onLaunch 冷启动
2. onShow 热启动（切前台）
3. onHide （切后台） 30分钟销毁

### 页面生命周期

- onLoad
- onShow
- onReady dom加载完
- onHide
- onUnload

navgate 页面不会销毁， redirect会销毁

切换tab，页面不会销毁， 左上返回，页面会销毁

## 小程序api

分为3类

1. 异步api，通常都接受一个Object类型的参数， 如wx.request({})
2. 同步api， 约定以sync结尾， 如wx.setStorageSync()
3. 事件监听api，约定以on开头，例如 wx.onAppHide()

异步api支持callback & promise两种调用方式

- 当接口参数Object对象中不包含success/fail/complete时默认返回Promise
- 部分接口如request， uploadFile本身就有返回值，不支持promise风格的调用方式


### wx.request

### loanding

- wx.showLoading()
- wx.hideLoading()

### showToast

wx.showToast()

### showModal

wx.showModal()

### storage

- wx.setStorageAysn()
- wx.getStorageAysn()
- wx.removeStorageAysn()
- wx.clearStorageAysn()


## 路由与通信

- navgateTo  保留当前页面
- redirectTo 不保留当前页面
- switchTab 保留当前页面
- relaunch 关闭所有页面打开一个新页面
- navgateBack 关闭当前页面回到上一个页面

除了switchTab都能传递参数 `?id=1&name=2`，在下一个页面的onLoad的形参中可以获取到

## 组件

### data和properties


data为组件自己的数据， properties相当于props

```javascript
  properties: {
    text: {
      // String Number Boolean Object Array  null（所有）
      type: String,
      value: ''
    }
  },
```

### slot

```javascript
  options: {
    // 开启多slot
    multipleSlots: true, 
    // 开始不需要样式隔离 用于修改组件样式
    styleIsolation: 'shared'
  },
```

### watch

```javascript
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

```




