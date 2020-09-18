# Git 相关

## push报错
Permanently added 'github.com,13.229.188.59' (RSA) to the list of known hosts.
```sh
ssh-keygen -t rsa -C "xxx@xxx.com" // 重新生成rsa-key
```
![my-logo.png](./image/git/1.png)  
打开 .ssh/id_rsa.pub. 复制ssh-key  
粘贴到github，个人setting -> SSH and GPG keys，添加个新的key

## GitHook 工具 —— husky 配置
husky 是一个 Git Hook 工具。本文主要实现提交前 eslint 校验和 commit 信息的规范校验。   
**1. 安装 husky，lint-staged，@commitlint/cli，@commitlint/config-conventional 依赖**   


*lint-staged: 用于实现每次提交只检查本次提交所修改的文件。
```sh
npm i -D husky lint-staged @commitlint/cli @commitlint/config-conventional
```
>注意：一定要使用 npm 安装 eslint 和 husky，因为在 windows 操作系统下, 用 yarn 安装依赖，不会触发 husky pre-commit 钩子命令。   


**2. 创建 .huskyrc**   
```
{
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

**3. 创建 .lintstagedrc**   
```
{
  "src/**/*.js": "eslint"
}
```
设置 fix 可以自动修复错误：
```
{
   "src/**/*.js": ["eslint --fix", "git add"]
}
```
或者使用下面的配置，自动格式化代码（谨慎使用）：
```
{
   "src/**/*.js": ["prettier --write", "git add"]
}
```

**4. 创建 commitlint.config.js**   
```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
        2,
        'always',
        [
            'feat', // 新功能（feature）
            'update', // 更新小逻辑
            'fix', // 修补bug
            'docs', // 文档（documentation）
            'style', // 格式（不影响代码运行的变动）
            'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
            'perf', // 更改代码以提高性能
            'test', // 增加测试
            'build', // 构建过程或辅助工具的变动
            'ci', // 修改项目继续集成流程
            'chore', // 其他改动
            'revert' // 回滚
        ],
    ],
    'type-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  }
}
```
