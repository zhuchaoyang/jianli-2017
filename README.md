0. [使用react技术栈从零开始打造在线个人简历网站（一）](#实战案例介绍)
1. [项目需求分析及组件化规划](#项目需求分析及组件化规划)
2. [搭建项目基础架构（一）](#组件化拆分)

#《使用react技术栈从零开始打造在线个人简历网站（一）》

##实战案例介绍
使用全新的前端技术栈打造属于自己的个人在线酷炫建立网站，包括首页、个人介绍、专业技能、项目经验、联系我等内容。提前预览地址 (https://guoyongfeng.github.io/react-resume/dist/index.html#/)

##项目过程中会使用的技术点
- 基础的Shell、Chrome浏览器、Atom代码编辑器、Terminal终端、Node.js全局环境
- 最新的ES6/7 新语法特性、Babel编译器的使用和配置
- Git基本操作、NPM和Yarn的使用
- 全新的Webpack2 和 Webpack-dev-server、以及系列插件和loader的配置及使用
- 最新版React、React-dom以及react-addons-css-transition-group动画
- 路由系统React-router
- Axios实现HTTP请求和Promise数据处理
- 目录划分、分层、优良的代码组织方式等项目架构指导

##实战说明
1.对所涉及的知识点最好提前学习，或者跟着视频一步步实践
2.遇到问题及时相互交流，有不懂的可在讨论群提出
3.后续可自己发挥和扩展

#项目需求分析及组件化规划
>制作一个属于自己的个人简历网站，采用SPA架构进行开发

##需求分析
- 首页开发
	- 公共 layout 部分结合 react-addons-css-transition-group 实现CSS3过渡效果
	- 公共左侧导航组件开发，需要结合使用 react-router 实现前端理由的控制
	- 底部页面切换的过渡组件开发，这个地方
- “关于我”页面、“专业技能”页面、“联系我”页面
	- 主要涉及通用布局组件的封装
	- 以及数据和组件的结合渲染
- “项目经验”页面
	- 功能描述：需要使用Github Open API将Github上的个人信息拉取过来，并结合axios这个库封装公共方法，将数据抓取过来后进行展示
	- 需要利用antd的Timeline组件进行项目展示组件封装，将数据导入展示

##组件化拆分
- 容器型组件（Containers）
	- Home组件
	- About组件
	- Contact组件
	- Skills组件
	- Project组件
- 布局类组件（Layout）
	- NavMenu组件
	- Main组件
- 展示型组件（component）
	- 待定

#搭建项目基础架构（一）
- 虽说基础，但内容很重要
- 实践操作不难，但涉及的技术点很多
- 文档详细，零基础也能跟上

##初始化项目

```
sudu npm install yarn -g
```

```
mkdir react-resume && cd react-resume
git init
touch .gitignore README.md CHANGELOG.md LICENSE
mkdir src && cd src && touch index.html main.js main.css
cd ..
```

##安装依赖包
