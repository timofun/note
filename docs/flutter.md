# Flutter 相关

## 升级CocoaPods到最新版本
查看版本 pod --version
```sh
pod --version
```

运行sudo gem install cocoapods
```sh
sudo gem install cocoapods
```

安装过程中，报了权限错误 ERROR: While executing gem ... (Gem::FilePermissionError)  
You don't have write permissions for the /usr/bin directory.。  
解决办法：运行sudo gem install -n /usr/local/bin cocoapods
```sh
sudo gem install -n /usr/local/bin cocoapods
```
## pod install报错LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
### 解决方式1
```sh
git config --global http.postBuffer 4194304000
```
### 解决方式2
确定gem版本 : sudo gem update —system  
确定pod : pod update (更新项目podfile)  
重新pod : pod repo update  
安装: pod setup  
再次install: pod install  
