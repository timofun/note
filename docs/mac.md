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


