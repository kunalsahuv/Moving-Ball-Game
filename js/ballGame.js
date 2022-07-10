var ball =document.getElementById("ball");
var box =document.getElementById("box");
var maxTop=box.getBoundingClientRect().bottom-ball.offsetHeight;
var maxLeft=box.getBoundingClientRect().right-ball.offsetWidth;
var minTop=box.getBoundingClientRect().top;
var minLeft=box.getBoundingClientRect().left;
ball.style.top="0px";
ball.style.left="0px";
var dx=5;
var dy=5;
window.addEventListener("keydown",function(event){
  var leftCoordinate=ball.getBoundingClientRect().left;
  var topCoordinate=ball.getBoundingClientRect().top;
  if(event.key=="w"){
    if(topCoordinate-dy>=minTop){
      ball.style.top=((ball.getBoundingClientRect().top-box.getBoundingClientRect().top-dy)+"px");
    }
  }else if(event.key=='a'){
    if(leftCoordinate-dx>=minLeft){
      ball.style.left=((ball.getBoundingClientRect().left-box.getBoundingClientRect().left-dx)+"px");
    }
  }else if(event.key=='s'){
    if(topCoordinate+dy<=maxTop){  
      ball.style.top=((ball.getBoundingClientRect().top-box.getBoundingClientRect().top+dy)+"px");
    }
  }else if(event.key=='d'){
    if(leftCoordinate+dx<=maxLeft){     
      ball.style.left=(ball.getBoundingClientRect().left-box.getBoundingClientRect().left+dx)+"px";
    }
  }
});