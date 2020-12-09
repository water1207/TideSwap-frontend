# TideSwap 前端

### 预备

#### 下载项目并安装依赖

- 下载前端项目：`git clone https://github.com/water1207/TideSwap-frontend.git`
- 使用 `npm install` 或者 `yarn` 进行项目依赖安装

#### Conflux Portal 的安装及配置

Conflux Portal 是由 Conflux 提供的浏览器插件，目前提供了 Chrome 及 Firefox 的支持，用户可以使用 Conflux Portal 进行私钥的管理以及交易签名。

前往 [Conflux Portal GitHub](https://github.com/Conflux-Chain/conflux-portal/releases/latest) 下载安装。项目的源代码在 [GitHub](https://github.com/Conflux-Chain/conflux-portal ) 中可以找到。

### 运行前端项目

使用 `yarn start` 启动前端项目，开发服务器运行起来后会在浏览器中打开前端页面（如果没有打开，请在浏览器中访问 http://localhost:3000）。

项目运行起来后，页面将显示四个模块，分别为
- 中央  合约交互模块
- 左侧 合约切换导航栏
- 右侧 TideSwap潮汐倒计时
- 右上角 Conflux Portal 模块

<p align="center">
  <img src="./screenshots/compressed UI.jpg" width="800px">
</p>
tips: If the image above fails to load, try using VPN to access.

