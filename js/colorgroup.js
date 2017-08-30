/*
 * colorgroup.js
 * version v2.1
 * author L.Xavier 
 * Contact me through L.Xavier@qq.com
 */
function getcolor(color,spacing) {
	
	//参数设置
	color = color || '130,230,130',
    spacing = spacing || 3;
    var colorgroup=color.split('|'),
    	color1=colorgroup[0].split(','),
    	color2='';
    try{
     	color2=colorgroup[1].split(',');
    }
    catch (e) {
		color2='';
	}
    
    
    //方法选择
    colorgroup=(color2=='' || colorgroup[0]==colorgroup[1]) ? coloritem1(color1,spacing) : coloritem2(color1,color2,spacing);

    return colorgroup;
    
     
};

function coloritem1(color,space) {
	//参数调整
	var min=255,max=0;
	for(var l=0;l<color.length;l++)
	{
		min=(parseInt(color[l])<min) ? parseInt(color[l]) : min;
		max=(parseInt(color[l])>max) ? parseInt(color[l]) : max;
	}

    (space<=0) ? space=3 : space=space;
    //设置变量
    var value=[parseInt(color[0]),parseInt(color[1]),parseInt(color[2])],
    	i=0,lock=true,
    	grouplength=parseInt((max-min)/space)*6,
    	rgb='rgb('+value[0]+','+value[1]+','+value[2]+')',
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
		rgb='rgb('+value[0]+','+value[1]+','+value[2]+')';
    }
    
	//添加颜色数组
	colorgroup.push(rgb);
    for(var s=0;s<grouplength;s++){
    	colorvalue();
    	colorgroup.push(rgb);
    }
    
    return colorgroup;
     
};



function coloritem2(color1,color2,space) {
    //设置变量
    var value1=[parseInt(color1[0]),parseInt(color1[1]),parseInt(color1[2])],
    	value2=[parseInt(color2[0]),parseInt(color2[1]),parseInt(color2[2])],
    	length=0;
    	rgb='rgb('+value1[0]+','+value1[1]+','+value1[2]+')',
    	colorgroup=new Array();

    //参数调整
    colorgroup.push(rgb);
    var cha=[Math.abs(value1[0]-value2[0]),Math.abs(value1[1]-value2[1]),Math.abs(value1[2]-value2[2])];
    length=Math.max.apply(null, cha)/space;
    var spacing=[cha[0]/length,cha[1]/length,cha[2]/length];

    //获取颜色
    for(var i=0;i<length;i++){
    	for(var l=0;l<3;l++){
    		if(value1[l]<=value2[l]){
    			value1[l]=((value1[l]+spacing[l])>=value2[l]) ? value2[l] : value1[l]+spacing[l];
    		}
    		else{
    			value1[l]=((value1[l]-spacing[l])<=value2[l]) ? value2[l] : value1[l]-spacing[l];
    		}
    	}
    	rgb='rgb('+Math.round(value1[0])+','+Math.round(value1[1])+','+Math.round(value1[2])+')';
    	colorgroup.push(rgb);
    }
    
    return colorgroup;
 
};







/*参数说明*/
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 
getcolor('130,230,130|130,230,130',1);//参数getcolor(color,space),color为rgb颜色参数,最多可以放两种颜色用'|'分隔
				      //1.color为一种颜色,或两种颜色相同时,返回color渐变到color的颜色数组
				      //2.color为两种颜色时,返回color1渐变到color2的颜色数组
 * 	 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
