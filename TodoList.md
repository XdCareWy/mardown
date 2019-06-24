# TodoList

+ [ ] ```git rm <file>   ```是否等价于```rm <file> ``` + ```git add <file> ```
+ [ ] ```git push -u origin master``` -u是什么的简写
+ [x] ```git push —set-upstream origin master```啥意思
+ [ ] git rebase的用法？该不该用？





# 工作TodoList

+ [x] 上传图片的宽、高、大小？待产品确认

+ [x] 素材管理页面，如果有多块的话，只填写一块，是否可以提交？待产品确认

+ [x] 测试环境：http://admin.ufo.jd.com  

  预发B：http://enjoy5.admin.jd.com   

  预发A(线上包)： http://enjoy.admin.jd.com  , 需要在axios.js文件中增加域名

+ [x] `plus.matrix`下的`plusResource`目录为**plus资源位配置化前台打包资源**；分支`sub_0412_hmc_B`是**预发B**；分支`sub_0412_hmc`为**预发A**； 这个两个分支上都已经创建好了目录`plusResource`

+ [x] `cyb dev`本地调试**带菜单**； `cyb dist`预发/线上打包**不带菜单**

+ [x] `build.sh`为**预发A/线上环境脚本**；`upload.sh`为**测试环境的脚本**

+ [x] host：

  本地调试：`192.168.144.78 admin.ufo.jd.com`

  预发B： `11.25.24.119 enjoy5.admin.jd.com`

  预发A： `10.181.42.229  enjoy.admin.jd.com`

  注意：本地调试需要携带cookie，使用域名[http://localhost.jd.com:8080/index.html](http://localhost.jd.com:8080/index.html)访问