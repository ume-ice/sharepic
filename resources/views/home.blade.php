@extends('layouts.app')

@section('title', 'ホーム')
@section('sidebar')
@endsection

@section('content')
<div id="app" v-cloak>
  <div>
    <form method="POST">
      <div v-show="mode === 'black'">
        <div>新規作成（書く）</div>
        <p>タイトル：<br><input type="text" name="title" v-model="title"></p>
      </div>
      <div v-show="mode === 'color'">
        <div>新規作成（塗る）</div>
        <a href="#">色を選択する</a>
      </div>
      <div>
        <canvas id="new-canvas" width="300" height="300" style="border:1px solid;" @mousedown="mousedown($event)" @mousemove="mousemove($event)" @mouseup="mouseup"></canvas>
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
