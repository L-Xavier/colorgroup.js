# 重新设置HTML的css
为REM重新设置HTML的font-size.


# 用法
 
#### 在你的页面上:

```
<script src="https://cdn.bootcss.com/jquery/3.2.1/core.js"></script>
<script src="js/htmltext.min.js"></script>
```

JS:

```
 $(document).ready(function(){
    resethtml();
});
```

#### 可选参数:

```
resethtml({//初始化，其余长度单位用rem，计算为1920下的宽度/32
    	  mode : 'auto',//模式,有auto和parts两种,parts为媒体自适应查询
    	  zoom : 'on',//zoom开关,on或off
    	  zoomsize : '1920',//设置缩放比例,以zoomsize为参照模型
          minfontsize : 62.5,//最小字体大小
          maxfontsize : 200,//最大字体大小
          winsizeparts : '360,640,1080,1366,1600',//parts下可用,窗口大小大于winsizeparts[1],则字体大小为fontsizeparts[1],最小为minfontsize,最大不超过maxfontsize
          fontsizeparts : '67,100,125,150,180'//parts下可用,与winsizeparts搭配
});
```

# 额外提示
 
REM 只支持 ie8+<br />
如果你想在IE8下使用REM<br />
请引用 rem.js<br />
GitHub 地址 : https://github.com/chuckcarpenter/REM-unit-polyfill<br />
 

# 许可证
 
作者 L.Xavier<br />
联系 l.xavier@foxmail.com<br />
欢迎使用和提出建议<br />
Copyright (C) 2017  L.Xavier<br />
