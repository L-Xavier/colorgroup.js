
/************************
 * author L.Xavier
 * version 1.0.1 © 2017.7.20
 * The following is my research, for reference purposes only
 * **********************/
function resethtml(options) {
    //Set parameters
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
    
    //Set zoom
    if(sets.zoom!='off'){
    	//Judgment browser terminal
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
    	
    	//Determine whether the browser supports the zoom property
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
    	
    	//Set zoom ratio
    	var moble = ismobile(),
        	zoom=1;
    	(moble) ? zoom=1 : zoom=window.screen.width/sets.zoomsize;
    	if(supportCss3('zoom')){
			html.css('zoom',zoom);
		}
    }
    
    //Select mode 'auto' and 'parts'
    var resize = function () {
    	
    	var w=html.width(),
    	    fontsize=0;
    	    
    	(sets.mode == 'parts') ? fontsize=isparts(w) : fontsize=isauto(w);
    	html.css('font-size',fontsize+'%');
    	
    };
    
    //Automatically change the HTML font size
    var isauto = function (w) {
    	
      	var size=0;
      	    
      	//(w >= sets.minwinsize) ? w=w : w=sets.minwinsize;//Minimum window size, defaults to minimum 360px
      	(w >= 360) ? size=(w-360)*0.08814+62.5 : size=62.5;
      	(size > sets.minfontsize) ? size=size: size=sets.minfontsize;
      	(size < sets.maxfontsize) ? size=size: size=sets.maxfontsize;
      	
      	size = Number(size).toFixed(2);
      	return size;
      	
    };
    
    //Change the size of the HTML font by resolution
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
    
    //Initial font size
    resize();
	//Set window size to change font
	$(window).on('resize', resize);
};


/*resethtml({//Initialization, and the remaining units of length are computed as REM by 1920, width /32
    	  mode : 'auto',//There are two kinds of patterns, 'auto' and 'parts', and 'parts' is media adaptive query
    	  zoom : 'on',//'Zoom' switch, 'on' or 'off'
    	  zoomsize : '1920',//Sets the scaling ratio to zoomsize as the reference model
          minfontsize : 62.5,//Minimum font size,Unit %
          maxfontsize : 200,//Maximum font size,Unit %
          winsizeparts : '360,640,1080,1366,1600',//'Parts' available, the window size is greater than 'winsizeparts[1]', then the font size is 'fontsizeparts[1]', minimum 'minfontsize', the maximum not more than 'maxfontsize'
          fontsizeparts : '67,100,125,150,180'//'Parts' available, paired with 'winsizeparts'
});*/





