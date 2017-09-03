/*
 * colorgroup.js
 * version v2.3
 * author L.Xavier 
 * Contact me through L.Xavier@qq.com
 */
function getcolor(color,spacing) {
	
	//参数设置
	color = color || 'rgb(130,230,130)',
    spacing = parseInt(spacing) || 3;
    spacing = (spacing < 1) ? 1 : spacing;
    var colorgroup=color.split('|'),
    	color1=colorRgb(colorgroup[0]).replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),
    	color2='';
    try{
     	color2=colorRgb(colorgroup[1]).replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
    }
    catch (e) {
		color2='';
	}
    
    
    //方法选择
    colorgroup=(color2=='' || colorgroup[0]==colorgroup[1]) ? coloritem1(color1,spacing) : coloritem2(color1,color2,spacing);

    return colorgroup;
    
     
};

function colorRgb(color){
	var reg = /^#?([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = color.toLowerCase();
    if(!/^(rgb|RGB)/.test(sColor) && sColor.indexOf(',')>-1){
    	sColor='rgb('+sColor+')';
    }
    else if(!/^(rgb|RGB)/.test(sColor) && sColor.indexOf('#')==-1){
    	sColor='#'+sColor;
    }
    
    if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
            var sColorNew = "#";
                for(var i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));        
                }
                sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for(var i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));        
        }
        return "RGB(" + sColorChange.join(",") + ")";
    }else{
        return sColor;        
    }
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
getcolor('130,230,130|130,230,130',1);//参数getcolor(color,space),color为rgb颜色参数,最多可以放两种颜色用'|'分隔,space为渐变色间隔
				      //颜色参数写法'rgb(130,230,130)|rgb(50,64,160)','130,230,130|50,64,160','#82e682|#3240a0','82e682|3240a0',这四种都可以
				      //1.color为一种颜色,或两种颜色相同时,返回color渐变到color的颜色数组
				      //2.color为两种颜色时,返回color1渐变到color2的颜色数组
 * 	 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
