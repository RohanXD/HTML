function changeheading(){
    var head=document.getElementsByTagName("h2");
    for(i=0; i<head.length ; i++)
    {
        head[i].textContent="cccccchange heading";
    }
}
function changecolor(){
    var list=document.getElementsByTagName("li");
    for(i=0; i<list.length ; i++)
    {
        list[i].style.backgroundColor="magenta";
    }
}
function hidediv(){
    var divs=document.getElementsByTagName("div");
    for(i=0; i<divs.length ; i++)
    {
        divs[i].style.display="none";
    }
}
function show(){
    var divs=document.getElementsByTagName("div");
    for(i=0; i<divs.length ; i++)
    {
        divs[i].style.display="block";
    }
}

function pborder(){
    var para=document.getElementsByTagName("p");
    for(i=0; i<para.length ; i++)
    {
        para[i].style.border="10px solid lime";
    }
}
function changesize(){
    var span=document.getElementsByTagName("p");
    for(i=0; i<span.length ; i++)
    {
        span[i].style.fontSize="50px";
    }
}
function queryS(){      
        var qy=document.querySelectorAll('.para')
        for(i=0;i<qy.length;i++)
        {
            qy[i].style.backgroundColor="yellow"
        }
    }
function query(){
        document.querySelector('h1').style.fontSize="50px"
        document.querySelector('h1').style.color="green"
}