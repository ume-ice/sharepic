@extends('layouts.app')

@section('title', 'ホーム')
@section('sidebar')
@endsection

@section('content')
  <p id="title">新規作成</p>
  <canvas id="new-canvas" width="300" height="300" style="border:1px solid;"></canvas>
  <br>
  <form method="POST">
    <button id="reset">リセット</button>
    <input type="hidden" name="id" value="1">
    <input type="hidden" name="canvas_data">
    {{ csrf_field() }}
    <button type="submit" id="save">保存</button>
  </form>

  <hr>

  @foreach ($pictures as $p)
  <div>
    <p>{{$p['id']}} : {{$p['name']}} <a href="#">塗る</a></p>
    <canvas id="canvas-{{$p['id']}}" width="300" height="300" style="border:1px solid;"></canvas>
  </div>
  @endforeach

@endsection


@section('footer_script')
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.min.js"></script>
<script type="text/javascript">
  var pictures = @json($pictures);
</script>
<script src="{{ asset('/js/canvas.js') }}"></script>
@endsection

