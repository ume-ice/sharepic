var canvas = $('#new-canvas')[0];
var ctx = canvas.getContext("2d");

var listCanvas = [];
var listCanvasCtx = [];
var baseImage = [];
$.each(pictures, function(i, p) {
  listCanvas[i] = $('#canvas-' + p.id)[0];
  listCanvasCtx[i] = listCanvas[i].getContext("2d");
  baseImage[i] = new Image();
  baseImage[i].src = p.data;
  baseImage[i].onload = function() {
    listCanvasCtx[i].drawImage(baseImage[i], 0, 0);
  }
});

$('#reset').click(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return false;
});

$('#save').click(function() {
  $('[name="canvas_data"]').val(canvas.toDataURL());
});

//マウスを操作する
var mouse = {
  x:0,
  y:0,
  x1:0,
  y1:0,
  color:"black"
};
var draw = false;

//マウスの座標を取得する
$('#new-canvas').on('mousemove', function(e) {
  var rect = e.target.getBoundingClientRect();

  ctx.lineWidth = 10;
  ctx.globalAlpha = 100;

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  //クリック状態なら描画をする
  if(draw === true) {
    ctx.beginPath();
    ctx.moveTo(mouseX1,mouseY1);
    ctx.lineTo(mouseX,mouseY);
    ctx.lineCap = "round";
    ctx.stroke();
    mouseX1 = mouseX;
    mouseY1 = mouseY;
  }
});

//クリックしたら描画をOKの状態にする
$('#new-canvas').on('mousedown', function(e) {
  draw = true;
  mouseX1 = mouseX;
  mouseY1 = mouseY;
  undoImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
});

canvas.addEventListener("mouseup", function(e){
  draw = false;
});


//スマホ用
var finger=new Array;
for(var i=0;i<10;i++){
  finger[i]={
    x:0,
    y:0,
    x1:0,
    y1:0,
    color:"rgb(255,0,0)"
  };
}

//タッチした瞬間座標を取得
canvas.addEventListener("touchstart",function(e){
  e.preventDefault();
  draw = true;
  var rect = e.target.getBoundingClientRect();
  ctx.lineWidth = 10;
  ctx.globalAlpha = 100;
  undoImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
  for(var i=0;i<finger.length;i++){
    if (e.touches[i]) {
      finger[i].x1 = e.touches[i].clientX-rect.left;
      finger[i].y1 = e.touches[i].clientY-rect.top;
    }
  }
});

//タッチして動き出したら描画
canvas.addEventListener("touchmove",function(e){
  e.preventDefault();
  var rect = e.target.getBoundingClientRect();
  for(var i=0;i<finger.length;i++){
    if (e.touches[i]) {
      finger[i].x = e.touches[i].clientX-rect.left;
      finger[i].y = e.touches[i].clientY-rect.top;
      ctx.beginPath();
      ctx.moveTo(finger[i].x1,finger[i].y1);
      ctx.lineTo(finger[i].x,finger[i].y);
      ctx.lineCap="round";
      ctx.stroke();
      finger[i].x1=finger[i].x;
      finger[i].y1=finger[i].y;
    }
  }
});