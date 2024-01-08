# docker容器运行

## 构建镜像命令

```
docker build -t vue3-element-admin .

```

## 运行惊醒image命令
```
docker run -d -p 8088:3000 --name vue3-element-admin vue3-element-admin
```
## 打开浏览器查看

Open `http://localhost:8088` in your browser.