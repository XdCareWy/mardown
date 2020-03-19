### git进阶

##### 客户端钩子

分类： 提交工作流钩子、电子邮件工作流钩子、其他钩子

提交工作流钩子(4个)

`pre-commit`

`prepate-commit-msg`

`commit-msg`

`post-commit`





#### git配置

系统：位置：`/etc/gitconfig`  操作该文件： `git config --system`

全局：位置： `~/.gitconfig` (或者 `~/.gitconfig/git/config`） 操作该文件： `git config --global`

本地：位置： `.git/config` 操作该文件： `git config --local`

读取配置文件的顺序：本地 -> 全局 -> 系统

git调用的编辑器

默认是`vi`，通过`git config --global core.editor emacs`进行配置

####在代码中集成Git hooks

使用`husky`对代码进行配置



##### commitlint.config.js文件配置

+ rules

  格式：`<name>: [0/1/2, 'always'/'never', Array/String]`，例如：`'subject-full-stop': [2, 'never', '.']`

  0：disable

  1：warning

  2： error

+ 

