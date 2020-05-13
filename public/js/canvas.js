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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// require('./bootstrap');
// window.Vue = require('vue');

function initNewCanvas(self) {
  var canvas = $('#new-canvas')[0];
  self.canvas = canvas;
  self.ctx = canvas.getContext("2d");
  self.ctx.lineWidth = 10;
  self.ctx.globalAlpha = 100;
}

function initPictures() {
  var listCanvas = [];
  var listCanvasCtx = [];
  var baseImage = [];
  $.each(pictures, function (i, p) {
    listCanvas[i] = $('#canvas-' + p.id)[0];
    listCanvasCtx[i] = listCanvas[i].getContext("2d");
    baseImage[i] = new Image();
    baseImage[i].src = p.data;
    baseImage[i].onload = function () {
      listCanvasCtx[i].drawImage(baseImage[i], 0, 0);
    };
  });
}

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    mode: 'black',
    title: '',
    picturesRaw: context.picturesRaw,
    image: new Image(),
    isDrawing: false,
    mouse: {
      x: 0,
      y: 0,
      x1: 0,
      y1: 0
    },
    canvas: null,
    ctx: null
  },
  mounted: function mounted() {
    initNewCanvas(this);
    initPictures();
  },
  computed: {},
  methods: {
    mousedown: function mousedown(e) {
      this.$set(this.mouse, 'x1', e.offsetX);
      this.$set(this.mouse, 'y1', e.offsetY);
      this.$set(this, 'isDrawing', true);
      this.$forceUpdate();
    },
    mouseup: function mouseup() {
      this.$set(this, 'isDrawing', false);
      this.$forceUpdate();
    },
    mousemove: function mousemove(e) {
      if (this.isDrawing == false) {
        return;
      }
      var rect = e.target.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.ctx.beginPath();
      this.ctx.moveTo(this.mouse.x1, this.mouse.y1);
      this.ctx.lineTo(this.mouse.x, this.mouse.y);
      this.ctx.lineCap = "round";
      this.ctx.stroke();
      this.mouse.x1 = this.mouse.x;
      this.mouse.y1 = this.mouse.y;
    },
    selectPicture: function selectPicture(index) {
      this.resetCanvas();
      this.image.src = this.picturesRaw[index].data;
      this.ctx.drawImage(this.image, 0, 0);
      this.mode = 'color';
      // this.$forceUpdate();
      console.log('nuttayo');
    },
    savePicture: function savePicture() {
      $('[name="canvas_data"]').val(this.canvas.toDataURL());
    },
    resetCanvas: function resetCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.$forceUpdate();
    }
  }
});

// //スマホ用
// var finger=new Array;
// for(var i=0;i<10;i++){
//   finger[i]={
//     x:0,
//     y:0,
//     x1:0,
//     y1:0,
//     color:"rgb(255,0,0)"
//   };
// }

// //タッチした瞬間座標を取得
// canvas.addEventListener("touchstart",function(e){
//   e.preventDefault();
//   draw = true;
//   var rect = e.target.getBoundingClientRect();
//   ctx.lineWidth = 10;
//   ctx.globalAlpha = 100;
//   undoImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
//   for(var i=0;i<finger.length;i++){
//     if (e.touches[i]) {
//       finger[i].x1 = e.touches[i].clientX-rect.left;
//       finger[i].y1 = e.touches[i].clientY-rect.top;
//     }
//   }
// });

// //タッチして動き出したら描画
// canvas.addEventListener("touchmove",function(e){
//   e.preventDefault();
//   var rect = e.target.getBoundingClientRect();
//   for(var i=0;i<finger.length;i++){
//     if (e.touches[i]) {
//       finger[i].x = e.touches[i].clientX-rect.left;
//       finger[i].y = e.touches[i].clientY-rect.top;
//       ctx.beginPath();
//       ctx.moveTo(finger[i].x1,finger[i].y1);
//       ctx.lineTo(finger[i].x,finger[i].y);
//       ctx.lineCap="round";
//       ctx.stroke();
//       finger[i].x1=finger[i].x;
//       finger[i].y1=finger[i].y;
//     }
//   }
// });

/***/ })

/******/ });