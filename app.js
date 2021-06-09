let p=document.getElementById("time");

function showclock(){
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    if(s>60)
    {
        s=0;
        m++;
    }
    if(m>60)
    {
        m=0;
        h++;
    }
    if(s<10)
    {
        s="0"+s;
    }
    if(m<10)
    {
        m="0"+m;
    }
    if(h<10)
    {
        h="0"+h;    
    }
    if(h==0)
    {
        h=h-12;
    }
    p.innerHTML=h+":"+m+":"+s;
    setTimeout(showclock,1000)
}