function resethtml(options) {
    //设置参数
    var sets = $.extend({
    	  'mode' : 'auto',
    	  'zoom' : 'on',
    	  'zoomsize' : '1920',
          'minfontsize' : 62.5,
          'maxfontsize' : 200,
          'winsizeparts' : '360,640,1080,1366,1600',
          'fontsizeparts' : '67,100,125,150,180'
        }, options),
    	html=$('html');
    
    //设置zoom
    if(sets.zoom!='off'){
    	//判断浏览器终端
    	var ismobile = function(){
    		var browser={
    			versions:function(){
           			var u = navigator.userAgent, app = navigator.appVersion;
           			return {
                		mobile: !!u.match(/AppleWebKit.*Mobile.*/)
            		};
         		}(),
			}
			return browser.versions.mobile;
    	};
    	
    	//浏览器是否支持zoom属性
    	var supportCss3 = function (style) { 
			var prefix = ['webkit', 'Moz', 'ms', 'o'], 
				i, 
				humpString = [], 
				htmlStyle = document.documentElement.style, 
				_toHumb = function (string) { 
					return string.replace(/-(\w)/g, function ($0, $1) { 
						return $1.toUpperCase(); 
					}); 
				}; 
				
			for (i in prefix) {
			humpString.push(_toHumb(prefix[i] + '-' + style)); 
			}
			humpString.push(_toHumb(style)); 

			for (i in humpString) {
			if (humpString[i] in htmlStyle) return true; 
			}
			return false; 
		};
    	
    	//设置缩放比
    	var moble = ismobile(),
        	zoom=1;
    	(moble) ? zoom=1 : zoom=window.screen.width/sets.zoomsize;
    	if(supportCss3('zoom')){
			html.css('zoom',zoom);
		}
    }
    
    //选择模式auto和parts
    var resize = function () {
    	
    	var w=html.width(),
    	    fontsize=0;
    	    
    	(sets.mode == 'parts') ? fontsize=isparts(w) : fontsize=isauto(w);
    	html.css('font-size',fontsize+'%');
    	
    };
    
    //自动改变HTML字体大小
    var isauto = function (w) {
    	
      	var size=0;
      	    
      	//(w >= sets.minwinsize) ? w=w : w=sets.minwinsize;//最小窗口大小,默认最小360px
      	(w >= 360) ? size=(w-360)*0.08814+62.5 : size=62.5;
      	(size > sets.minfontsize) ? size=size: size=sets.minfontsize;
      	(size < sets.maxfontsize) ? size=size: size=sets.maxfontsize;
      	
      	size = Number(size).toFixed(2);
      	return size;
      	
    };
    
    //按分辨率改变HTML字体大小
    var isparts = function (w) {
    	
    	var size=0,
      	    winsize=sets.winsizeparts.split(","),
      		fontsize=sets.fontsizeparts.split(",");
      		
      	(w < winsize[0]) ? size=sets.minfontsize : size=fontsize[0];
      	for(var i=1;i<winsize.length;i++)
      	{
      		(w < winsize[i]) ? size=size : size=fontsize[i];
      	}
      	(size > sets.minfontsize) ? size=size: size=sets.minfontsize;
      	(size < sets.maxfontsize) ? size=size: size=sets.maxfontsize;
      	
      	size = Number(size).toFixed(2);
      	return size;
      	
    };
    
    //初始化字体大小
    resize();
	//设置窗口大小改变字体
	$(window).on('resize', resize);
};


/*resethtml({//初始化，其余长度单位用rem，计算为1920下的宽度/32
    	  'mode' : 'auto',//模式,有auto和parts两种,parts为媒体自适应查询
    	  'zoom' : 'on',//zoom开关,on或off
    	  'zoomsize' : '1920',//设置缩放比例,以zoomsize为参照模型
          'minfontsize' : 62.5,//最小字体大小
          'maxfontsize' : 200,//最大字体大小
          'winsizeparts' : '360,640,1080,1366,1600',//parts下可用,窗口大小大于winsizeparts[1],则字体大小为fontsizeparts[1],最小为minfontsize,最大不超过maxfontsize
          'fontsizeparts' : '67,100,125,150,180'//parts下可用,与winsizeparts搭配
});*/






/************************
 * 以下为自己研究,仅供学习参考
 * **********************/

/*
  
$.fn.resethtml =function (//maxwin,options) {
   	//var max = maxwin || 1920,
    //设置参数
    var sets = $.extend({
          'minwinsize' : 360,
          'minfontsize' : 62.5
        }, options);

    //改变HTML字体大小
    var resize = function () {
    	
      	var w=$(this).width(),
      	    size=0;
      	    
      	(w >= sets.minwinsize) ? w=w : w=sets.minwinsize;
      	(w >= 360) ? size=(w-360)*0.08314+62.5 : size=62.5;
      	(size > sets.minfontsize) ? size=size: size=sets.minfontsize;
      	size = size.toFixed(2);
      	$(this).css('font-size',size+'%');
      	
      };
      
    //初始化字体大小
    resize();
	//设置窗口大小改变字体
	$(window).on('resize', resize);
	
};
    	
  $('html').resethtml({ //初始化，其余长度单位用rem，计算为1920下的宽度/32
    	minwinsize:1000,//设置最小窗口大小，小于这个大小字体不变化。
    	minfontsize:100//设置最小字体大小，小于这个大小字体不变化。
  });

*/