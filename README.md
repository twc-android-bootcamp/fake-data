## 使用方法
1. 复制config.yaml并创建新文件如 list.yaml
2. 修改模板文件中的相应参数,可以参考 https://github.com/marak/Faker.js
3. 运行如下命令

  ```sh
  # 第一次运行
  npm i

  # 仅查看结果
  npm run plan list.yaml

  # 将结果写入对应的json文件
  npm run apply list.yaml
  ```
4. 将生成的数据粘贴至data中的文件夹中并上传
5. 直接访问gh-pages地址即可,如 https://twc-android-bootcamp.github.io/fake-data/data/list.json