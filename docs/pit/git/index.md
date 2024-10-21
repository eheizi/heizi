# git 中的坑

## Windows 默认不识别文件大小写

```shell
#全局禁用大小写不敏感
git config --global core.ignoreCase false
#局部禁用大小写不敏感
git config core.ignoreCase false
#确认配置是否生效 true：未开启 false：开启
git config --get core.ignoreCase
```
