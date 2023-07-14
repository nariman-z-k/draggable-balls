var bl,mx,my,distx,disty,mainbg,zidx;
document.onmousemove = move;

// ---------------------- create random number in range ------------------
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

//--------------------------create random color ---------------------------
function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

//------------------------- get document height ----------------------------

function getHeight(){
   return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

//------------------------- get document width ------------------------------
function getWidth(){
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

// ------------------------create ball-------------------------------
function create_balls(){
            
    let num=document.getElementById("bnum").value
    if(isNaN(num)){
     return
    }
    zidx=num+1
     document.body.innerHTML=""
     for (let i=0;i<num;i++){
         let newball=document.createElement("div")
         newball.style.borderRadius="100%"
         newball.style.position="absolute"
         let randwh= Math.floor((Math.random() * 200) + 100); 
         newball.style.width=randwh+"px"
         newball.style.height=randwh+"px"

         var pheight =getHeight()
         
         var pwidth=getWidth()
         
         
          newball.style.left=randomIntFromInterval(0,pwidth-randwh)+"px"
          newball.style.top=randomIntFromInterval(0,pheight-randwh)+"px"
          newball.style.backgroundColor=getRandomColor()
          newball.onmousedown=drag
          newball.onmouseup = drop;
          document.body.append(newball)
     }
 }
//------------------------- catch ball ------------------------------
function drag(e){
    bl=e.target
    
    
    distx=mx-bl.offsetLeft;
    disty=my-bl.offsetTop;

    mainbg=bl.style.backgroundColor
    bl.style.background="red"
    bl.style.zIndex=zidx
    zidx++
    
}

//------------------------- move ball ------------------------------

function move(e){
        mx=e.pageX;
        my=e.pageY;
     if (bl){
        bl.style.left = (mx - distx) + 'px';
        bl.style.top = (my - disty) + 'px';
    }

}

//------------------------- drop ball ------------------------------

function drop(){
    
    bl.style.backgroundColor=mainbg
    console.log(mainbg)
    bl=false
}


