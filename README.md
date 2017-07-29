# resethtml
Reset the font size of HTML for REM.


# Usage

#### On your web page:

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

#### Additional options:

```
resethtml({//Initialization, and the remaining units of length are computed as REM by 1920, width /32
    	  'mode' : 'auto',//There are two kinds of patterns, 'auto' and 'parts', and 'parts' is media adaptive query
    	  'zoom' : 'on',//'Zoom' switch, 'on' or 'off'
    	  'zoomsize' : '1920',//Sets the scaling ratio to zoomsize as the reference model
          'minfontsize' : 62.5,//Minimum font size,Unit '%'
          'maxfontsize' : 200,//Maximum font size,Unit '%'
          'winsizeparts' : '360,640,1080,1366,1600',//'Parts' available, the window size is greater than 'winsizeparts[1]', then the font size is 'fontsizeparts[1]', minimum 'minfontsize', the maximum not more than 'maxfontsize'
          'fontsizeparts' : '67,100,125,150,180'//'Parts' available, paired with 'winsizeparts'
});
```

# Instructions

REM supports only ie8+<br />
If you want to use REM under IE8<br />
Please use rem.js<br />
GitHub address : https://github.com/chuckcarpenter/REM-unit-polyfill
 

# License

author L.Xavier
contact l.xavier@foxmail.com
Welcome to  suggestions and use
Copyright (C) 2017  L.Xavier
