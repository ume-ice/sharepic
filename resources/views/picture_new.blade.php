<html>
  <head>
    <meta charset="UTF-8"/>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.22/fabric.min.js"></script>
    <title>シェアピク</title>
  </head>
  <body>
    <p id="title">書いてみよう！</p>
    <canvas id="canvas" width="300" height="300" style="border:1px solid;"></canvas>
    <br>
    <form method="POST">
      <button id="reset">リセット</button>
      <input type="hidden" name="id" value="1">
      <input type="hidden" name="text">
      {{ csrf_field() }}
      <button type="submit" id="save">保存</button>
    </form>

    @if (isset($canvas))
      さっき書いた絵
      <br>
      <canvas id="canvas2" width="300" height="300" style="border:1px solid;"></canvas>
    @endif
    <script type="text/javascript">
      var send_data = @json(isset($canvas) ? $canvas : null);
    </script>
    <script src="{{ asset('/js/canvas.js') }}"></script>
  </body>
</html>
