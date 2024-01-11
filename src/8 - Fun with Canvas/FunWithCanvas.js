const canvas = document.querySelector('#draw');
const lineWidth = document.querySelector('#lineWidth');
const lineColor = document.querySelector('#color')
const ctx = canvas.getContext('2d');
lineWidth.addEventListener('change',(e)=>ctx.lineWidth=e.target.value);
lineColor.addEventListener('change',(e)=>ctx.strokeStyle=e.target.value)

canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle='#BADA55';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=5;
ctx.globalCompositeOperation= 'color-burn'
let isDrawing = false;
let lastX =0;
let lastY=0;

function draw(e){
    if(isDrawing){
        console.log(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        lastX=e.offsetX;
        lastY=e.offsetY;
    }
}

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e)=>{
    
[lastX,lastY]=[e.offsetX,e.offsetY]
isDrawing=true
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);
