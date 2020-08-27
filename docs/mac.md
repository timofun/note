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


