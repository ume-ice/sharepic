@extends('layouts.app')

@section('title', 'ホーム')
@section('sidebar')
@endsection

@section('content')
<div id="app" v-cloak>
  <div>
    <form method="POST">
      <div v-show="1">
        <div>dev status</div>
        <div>mode: ${mode}</div>
        <div>mouse x: ${mouse.x}, y: ${mouse.y}, x1: ${mouse.x1}, y1: ${mouse.y1}</div>
        <div>isDrawing: ${isDrawing}</div>
      </div>
      <div v-show="mode === 'black'">
        <div>新規作成（書く）</div>
        <p>タイトル：<br><input type="text" name="title" v-model="title"></p>
      </div>
      <div v-show="mode === 'color'">
        <div>新規作成（塗る）</div>
        <div style="margin: 10px 0px;">
          <div @click="selectColor('red')" style="display: inline-block;width: 20px;height: 20px;margin-right: 10px;background: red;"></div>
          <div @click="selectColor('blue')" style="display: inline-block;width: 20px;height: 20px;margin-right: 10px;background: blue;"></div>
          <div @click="selectColor('green')" style="display: inline-block;width: 20px;height: 20px;margin-right: 10px;background: green;"></div>
        </div>
      </div>
      <div>
        <canvas id="new-canvas" width="300" height="300" style="border:1px solid;" @mousedown="mousedown($event)" @mousemove="mousemove($event)" @mouseup="mouseup($event)"></canvas>
      </div>
      <button id="reset" @click.stop.prevent="resetCanvas">リセット</button>
      <input type="hidden" name="id" value="1">
      <input type="hidden" name="canvas_data">
      {{ csrf_field() }}
      <button id="save" @click="savePicture">保存</button>
    </form>
  </div>

  <hr>

  <div>
    <div v-for="picture,index in picturesRaw">
      <p>
        ${picture.id} : ${picture.title} ${picture.published_at}
        <a href="#" @click.prevent="selectPicture(index)">塗る</a>
      </p>
      <canvas
        :id="'canvas-' + picture.id"
        width="300"
        height="300"
        style="border:1px solid;"></canvas>
    </div>
  </div>
</div>

@endsection

@section('footer_script')
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.min.js"></script>
<script type="text/javascript">
  var context  = {
    picturesRaw: @json($pictures)
  };
  var pictures = @json($pictures);
</script>
<script src="{{ asset('/js/canvas.js') }}"></script>
@endsection
