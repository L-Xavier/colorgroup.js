/*
 * colorgroup.js
 * version v1.3
 * author L.Xavier 
 * Contact me through L.Xavier@qq.com
 */
function getcolor(mincolor,maxcolor,spacing) {
	//参数调整
	var temp=0;
	if(mincolor>maxcolor){
		temp=mincolor;
		mincolor=maxcolor;
		maxcolor=temp;
	}
	mincolor=parseInt(mincolor);
	maxcolor=Math.ceil(maxcolor);
	spacing=Math.ceil(spacing);
	
    //设置参数
    var min = mincolor || 130,
        max = maxcolor || 230,
        space = spacing || 5;
    
    (mincolor<=0) ? min=0 : min=min;
    (mincolor>255) ? min=255 : min=min;
    (maxcolor<=0) ? max=0 : max=max;
    (maxcolor>255) ? max=255 : max=max;
    (spacing<=0) ? space=5 : space=space;
    
    //设置变量
    var value=[min,max,min],i=0,lock=true,
    	grouplength=parseInt((max-min)/space)*6,
    	rgb='rgb('+value[1]+','+value[2]+','+value[0]+')',
    	colorgroup=new Array();
    
    //获取颜色
    var colorvalue=function(){
    	(value[i]<(min+space)) ? lock=true : lock=lock;
		(value[i]>(max-space)) ? lock=false : lock=lock;
		if(lock){
			value[i]=value[i]+space;
			temp=value[i]+space;
			if(temp>max){
				i++;
				(i==3) ? i=0 : i=i;
			}
		}
		if(!lock){
			value[i]=value[i]-space;
			temp=value[i]-space;
			if(temp<min){
				i++;
				(i==3) ? i=0 : i=i;
			}
		}
		rgb='rgb('+value[1]+','+value[2]+','+value[0]+')';
    }
    
	//添加颜色数组
	colorgroup.push(rgb);
    for(var s=0;s<grouplength;s++){
    	colorvalue();
    	colorgroup.push(rgb);
    }
    return colorgroup;
     
};


/*参数说明*/
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
 getcolor(100,//rgb(130,230,130),指rgb参数中的最小值,范围0-255(整数),默认130
		  200,//rgb(130,230,130),指rgb参数中的最大值,范围0-255(整数),默认230
		  1//颜色渐变间隔,整数,默认5
		 );
 * 	 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
