# 获取一个渐变色数组
取到一组渐变的颜色



# 用法
 
#### 在你的页面上:

```
<script src="js/colorgroup.min.js"></script>
```

JS:

```
var color=getcolor();
```

#### 可选参数:

```
getcolor('130,230,130|130,230,130',1);//参数getcolor(color,space),color为rgb颜色参数,最多可以放两种颜色用'|'分隔,space为渐变色间隔
				      //颜色参数写法'rgb(130,230,130)|rgb(50,64,160)','130,230,130|50,64,160','#82e682|#3240a0','82e682|3240a0',这四种都可以
				      //1.color为一种颜色,或两种颜色相同时,返回color渐变到color的颜色数组
				      //2.color为两种颜色时,返回color1渐变到color2的颜色数组
```


# 许可证

作者 L.Xavier<br />
联系 l.xavier@foxmail.com<br />
欢迎使用和提出建议<br />
Copyright (C) 2017  L.Xavier<br />
