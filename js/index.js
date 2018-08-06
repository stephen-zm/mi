/*
* @Author: Administrator
* @Date:   2018-07-23 10:28:53
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-06 22:16:49
*/

'use strict';
window.onload=function(){
	//头部开始
	let headerRb=document.getElementsByClassName("headerRb")[0];
	let hrdown=document.getElementsByClassName("hrdown")[0];
	headerRb.onmouseenter=function(){
		hrdown.style.height="98px";
		hrdown.style.boxShadow="0 3px 4px 1px rgba(0,0,0,0.3)";
	}
    headerRb.onmouseleave=function(){
    	hrdown.style.height=0;
        hrdown.style.boxShadow="none";
    }
    //导航开始
    let titlel=document.getElementsByClassName("titlel")[0];
    let wb=titlel.getElementsByClassName("wb")[0];
    let lia=wb.getElementsByClassName("we");
    let box=document.getElementsByClassName("box");
    for (let i=0; i<lia.length; i++) {
        lia[i].onmouseenter=function(){
        box[0].style.height="229px";
        box[0].style.borderTop="1px solid #e0e0e0";
        box[0].style.boxShadow="0 3px 4px 1px rgba(0,0,0,0.3)";
        }
        lia[i].onmouseleave=function(){
        box[0].style.height=0;
        box[0].style.borderTop="none";
        box[0].style.boxShadow="none";
        }
    }
    // adide开始
    let ce=document.getElementsByClassName("ce")[0];
    let lis=document.getElementsByClassName("ce1");
    let wbox=document.getElementsByClassName("wbox");
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseenter=function(){
    		for(let j=0;j<lis.length;j++){
    			wbox[j].style.display="none";
    		}
    		wbox[i].style.display="block";
    	}
    	lis[i].onmouseleave=function(){
    		wbox[i].style.display="none";
    	}
    }
    //图片自动
    let banner=document.querySelector(".banner");
    let ban=document.querySelector(".ban");
    let lib=document.querySelectorAll(".ban li");
    let lic=document.querySelectorAll(".circle li");
    let btn_left=document.querySelector(".btn_left");
    let btn_right=document.querySelector(".btn_right");
    let width=parseInt(getComputedStyle(ban,null).width);
    let next=0;
    let now=0;
    let flag=true;
    let t=setInterval(move,3000);
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        setInterval(move, 3000);
    }
    btn_left.onclick=function(){
        /*if(flag==false){
            return;
        }
        flag=false;*/
        move1();
        clearInterval(t);
    }
    btn_right.onclick=function(){
        /*if(flag==false){
            return;
        }
        flag=false;*/
        move();
        clearInterval(t);
    }
    function move(){
        next++;
        if(next>lib.length-1){
            next=0;
            /*return;*/
        }
        /*lib[next].style.left=width+"px";
        animate(lib[now],{left:-width});
        animate(lib[next],{left:0},function(){flag=true;});*/
        lib[next].style.zIndex=5;
        lib[now].style.zIndex=0;
        lic[now].classList.remove("hot");
        lic[next].classList.add("hot");
        now=next;
    }
    function move1(){
        next--;
        if(next<0){
            next=lib.length-1;
        }
        /*lib[next].style.left=-width+"px";
        animate(lib[now],{left:width});
        animate(lib[next],{left:0},function(){flag=true;});*/
        lib[next].style.zIndex=5;
        lib[now].style.zIndex=0;
        lic[now].classList.remove("hot");
        lic[next].classList.add("hot");
        now=next;
    }
    for(let j=0;j<lic.length;j++){
        lic[j].onclick=function(){
            if(j==now){
                return;
            }
            else if(j>now){
                /*animate(lib[now],{left:-width});
                animate(lib[j],{left:0},function(){flag=true;});*/
                lib[now].style.zIndex=0;
                lib[j].style.zIndex=5;
                lic[now].classList.remove("hot");
                lic[j].classList.add("hot");
                next=now=j;
            }
            else if(j<now){
                /*animate(lib[now],{left:width});
                animate(lib[j],{left:0},function(){flag=true;});*/
                lib[now].style.zIndex=0;
                lib[j].style.zIndex=5;
                lic[now].classList.remove("hot");
                lic[j].classList.add("hot");
                next=now=j;
            }
        }
    }
    //倒计时
    fn();
    setInterval(fn,1000);
    function fn(){
    let div=document.querySelectorAll(".sg_left_down_box");
    let arrs=time();
    div.forEach(function(e,i){
        e.innerHTML=arrs[i];
    })
    return div;
    }
    function time(){
    let nows=new Date();
    let future=new Date(2018,7,3);
    let times=Math.floor((future.getTime()-nows.getTime())/1000);
    let arr=[];
    let hour=Math.floor(times/(60*60));
    if(hour<10){
        hour="0"+hour;
    }
    arr.push(hour);
    times=times%(60*60);
    let min=Math.floor(times/60);
    if(min<10){
        min="0"+min;
    }
    arr.push(min);
    let s=Math.floor(times%60);
    if(s<10){
        s="0"+s;
    }
    arr.push(s);
    return arr;
   }
    //图片滑动
    let za=document.querySelector(".za");
    let zb=document.querySelector(".zb");
    let ul=document.querySelector(".sg_right ul");
    let widtha=744;
    let times=0;
        zb.onclick=function(){
            if(times>0){
                return;
            }
            times++;
            ul.style.transform=`translateX(${-widtha*times}px)`;
        }
        za.onclick=function(){
            if(times<1){
                return;
            }
            times--;
            ul.style.transform=`translateX(${-widtha*times}px)`;
        }
        //家电
        function dd(qwer){
            let shang_right=qwer.querySelector(".shang_right");
            let uul=qwer.querySelector(".uul");
            let liz=uul.querySelectorAll("li");
            let xia=qwer.querySelector(".xia");
            let xia_right=qwer.querySelectorAll(".xia_right");
            for(let i=0;i<liz.length;i++){
                liz[i].onmouseenter=function(){
                    for (let j = 0; j < liz.length; j++) {
                        xia_right[j].style.display="none";
                        liz[j].className="";
                    }
                    xia_right[i].style.display="block";
                }
                liz[i].onmouseleave=function(){
                    liz[i].className="go";
                }
            }
        }



        let jiadian=document.querySelector(".jiadian");
        dd(jiadian);
        let zhineng=document.querySelector(".zhineng");
        dd(zhineng);
        let dapei=document.querySelector(".dapei");
        dd(dapei);
        let peijian=document.querySelector(".peijian");
        dd(peijian);
        let zhoubian=document.querySelector(".zhoubian");
        dd(zhoubian);
        //为你推荐
        let zaa=document.querySelector(".zaa");
        let zbb=document.querySelector(".zbb");
        let ulb=document.querySelector(".sg_xia ul");
        let widthb=1226;
        let timea=0;
            zbb.onclick=function(){
                if(timea>0){
                    return;
                }
                timea++;
                ulb.style.transform=`translateX(${-widthb*timea}px)`;
            }
            zaa.onclick=function(){
                if(timea<1){
                    return;
                }
                timea--;
                ulb.style.transform=`translateX(${-widthb*timea}px)`;
            }
        //内容
            let bt_left=document.querySelector(".bt_left");
            let bt_right=document.querySelector(".bt_right");
            let cl=document.querySelectorAll(".cl");
            let luc=document.querySelector(".r_down_one ul");
            let widthq=296;
            let timec=0;
            let noww=0; 
            bt_right.onclick=function(){
                if(timec>1){
                    return;
                }
                timec++;
                luc.style.transform=`translateX(${-widthq*timec}px)`;
                cl[noww].classList.remove("yup");
                cl[timec].classList.add("yup");
                noww=timec;
            }
            bt_left.onclick=function(){
                if(timec<1){
                    return;
                }
                timec--;
                luc.style.transform=`translateX(${-widthq*timec}px)`;
                cl[noww].classList.remove("yup");
                cl[timec].classList.add("yup");
                noww=timec;
            }
            for(let j=0;j<cl.length;j++){
                cl[0].onclick=function(){
                    luc.style.transform="translateX(0)";
                    cl[1].classList.remove("yup");
                    cl[2].classList.remove("yup");
                    cl[0].classList.add("yup");
                }
                cl[1].onclick=function(){
                    luc.style.transform="translateX(-296px)";
                    cl[0].classList.remove("yup");
                    cl[2].classList.remove("yup");
                    cl[1].classList.add("yup");
                }
                cl[2].onclick=function(){
                    luc.style.transform="translateX(-592px)";
                    cl[0].classList.remove("yup");
                    cl[1].classList.remove("yup");
                    cl[2].classList.add("yup");
                }
            }
            
        //点击返回
        let cao=document.querySelector(".cao");
        cao.onclick=function(){
            animate(document.body,{scrollTop:0},2000);
            animate(document.documentElement,{scrollTop:0},2000);
        }

}