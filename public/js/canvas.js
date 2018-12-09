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

// var baseImage = new Image();
// baseImage.src = 'data:image/png;base64,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AIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQAIYVKCohQSCVAIaVqixxQSCQwP8Bi0mJSzoOM3gAAAAASUVORK5CYII=';
// baseImage.onload = function() {
//   ctx.drawImage(baseImage, 0, 0);
// }

$('#save').click(function () {
  console.log($('[type="file"]'));
  console.log(canvas.toDataURL());
  $('[type="text"]').val(canvas.toDataURL());
  return false;
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