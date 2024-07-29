
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval;

function startChangingColor(){
    if(!interval){
    interval=setInterval(backGroundColor,1000);
    }
    function backGroundColor(){
        let newColor=randomColor();
        document.body.style.backgroundColor=newColor;
    }
}


document.getElementById("start").addEventListener('click',startChangingColor);
document.getElementById("stop").addEventListener('click',stopChangingColor);


function stopChangingColor(){
    clearInterval(interval);
    interval=null;
}