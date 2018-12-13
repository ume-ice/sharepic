/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

console.log('start canvas');
//canvasの読み込み設定
var canvas = $('#canvas')[0];
var ctx = canvas.getContext("2d");

if (send_data) {
  var canvas2 = $('#canvas2')[0];
  var ctx2 = canvas2.getContext("2d");
  var baseImage = new Image();
  baseImage.src = send_data;
  baseImage.onload = function () {
    ctx2.drawImage(baseImage, 0, 0);
  };
}

$('#reset').click(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return false;
});

$('#save').click(function () {
  $('[name="text"]').val(canvas.toDataURL());
});

//マウスを操作する
var mouse = {
  x: 0,
  y: 0,
  x1: 0,
  y1: 0,
  color: "black"
};
var draw = false;

//マウスの座標を取得する
$('#canvas').on('mousemove', function (e) {
  var rect = e.target.getBoundingClientRect();

  ctx.lineWidth = 10;
  ctx.globalAlpha = 100;

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  //クリック状態なら描画をする
  if (draw === true) {
    ctx.beginPath();
    ctx.moveTo(mouseX1, mouseY1);
    ctx.lineTo(mouseX, mouseY);
    ctx.lineCap = "round";
    ctx.stroke();
    mouseX1 = mouseX;
    mouseY1 = mouseY;
  }
});

//クリックしたら描画をOKの状態にする
$('#canvas').on('mousedown', function (e) {
  draw = true;
  mouseX1 = mouseX;
  mouseY1 = mouseY;
  undoImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mouseup", function (e) {
  draw = false;
});

//スマホ用
var finger = new Array();
for (var i = 0; i < 10; i++) {
  finger[i] = {
    x: 0,
    y: 0,
    x1: 0,
    y1: 0,
    color: "rgb(255,0,0)"
  };
}

//タッチした瞬間座標を取得
canvas.addEventListener("touchstart", function (e) {
  e.preventDefault();
  draw = true;
  var rect = e.target.getBoundingClientRect();
  ctx.lineWidth = 10;
  ctx.globalAlpha = 100;
  undoImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < finger.length; i++) {
    if (e.touches[i]) {
      finger[i].x1 = e.touches[i].clientX - rect.left;
      finger[i].y1 = e.touches[i].clientY - rect.top;
    }
  }
});

//タッチして動き出したら描画
canvas.addEventListener("touchmove", function (e) {
  e.preventDefault();
  var rect = e.target.getBoundingClientRect();
  for (var i = 0; i < finger.length; i++) {
    if (e.touches[i]) {
      finger[i].x = e.touches[i].clientX - rect.left;
      finger[i].y = e.touches[i].clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(finger[i].x1, finger[i].y1);
      ctx.lineTo(finger[i].x, finger[i].y);
      ctx.lineCap = "round";
      ctx.stroke();
      finger[i].x1 = finger[i].x;
      finger[i].y1 = finger[i].y;
    }
  }
});

/***/ })

/******/ });