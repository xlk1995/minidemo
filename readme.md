## 文件目录

### 配置文件

1. app.json 小程序全局配置文件
2. 页面.json 每个页面的配置文件
3. project.config.json  小程序的项目配置文件
4. sitemap.json 配置小程序及其页面是否允许被微信索引


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