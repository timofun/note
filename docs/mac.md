# Mac 相关

## Mac上看不到.git目录的解决方法
显示隐藏
```sh
1.defaults write com.apple.finder AppleShowAllFiles TRUE
2.killall Finder
```

恢复隐藏
```sh
1.defaults write com.apple.finder AppleShowAllFiles FALSE
2.killall Finder
```

## Mac 刷新dns缓存
```sh
sudo killall -HUP mDNSResponder
```

## Mac 美化终端
[iTerm2 + Oh My Zsh 打造舒适终端体验](https://zhuanlan.zhihu.com/p/37195261)


## Mac 微信插件
[Oh My WeChat](https://github.com/lmk123/oh-my-wechat#oh-my-wechat)
### 安装 Oh My WeChat
在终端中运行
```
curl -o- -L https://omw.limingkai.cn/install.sh | bash -s
omw update 命令更新 Oh My WeChat。
```
运行 omw 会执行以下操作：

1. 检查小助手有没有新版本，有则从 GitHub 仓库下载最新版本安装包并安装  
2. 检测微信有没有安装小助手，没有则安装  
3. 最后，打开微信

你还可以添加 -n 参数，以跳过检查更新的步骤，优先使用下载过的安装包安装小助手。

## Npm源管理器Nrm使用
npm包有很多的镜像源，有的源有的时候访问失败，有的源可能没有最新的包等等，所以有时需要切换npm的源，nrm包就是解决快速切换问题的。
nrm可以帮助您在不同的npm源地址之间轻松快速地切换。
### 1.安装:
```
npm install -g nrm
```
查看是否安装成功
```
nrm --version
```
### 2.列出可选择的源:
```
nrm ls
```
### 3.切换使用的源:
```
nrm use npm
```
### 4.添加一个源: nrm add <registry> <url>
```
nrm add company http://npm.company.com/ 
```
### 5.删除一个源:nrm del <registry>
想要删除一个源，终端执行命令nrm del <registry>，reigstry为源名.
```
nrm del company
```
注：nrm del 命令不能删除nrm自己内置的源。
### 6.测试源速度:nrm test
```
nrm test npm
```
### 7.不使用nrm来切换源
1.查看当前使用的源
```
npm config get registry
```
2.设置一个源
```
npm config set registry https://registry.npm.taobao.org/
```
3.安装包使用特定源   
全部使用特定源安装：npm install --registry=https://registry.npm.taobao.org  
安装一个包使用特定源：npm i logo --registry=https://registry.npm.taobao.org  
### 8.访问源的主页
```
nrm home taobao
```




