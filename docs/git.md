# Git 相关

## push报错
Permanently added 'github.com,13.229.188.59' (RSA) to the list of known hosts.
```sh
ssh-keygen -t rsa -C "xxx@xxx.com" // 重新生成rsa-key
```
![my-logo.png](./image/git/1.png)  
打开 .ssh/id_rsa.pub. 复制ssh-key  
粘贴到github，个人setting -> SSH and GPG keys，添加个新的key
