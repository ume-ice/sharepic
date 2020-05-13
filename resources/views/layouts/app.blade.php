<!-- Stored in resources/views/layouts/app.blade.php -->

<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>シェアピク - @yield('title')</title>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    @yield('header_css')
  </head>
  <body>
    @section('sidebar')
      This is the master sidebar.
    @show

    <div class="container">
      @yield('content')
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    @yield('footer_script')
  </body>
</html>