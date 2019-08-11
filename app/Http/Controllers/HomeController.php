<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Model\Picture;

class HomeController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getAction()
    {
        $pictures = Picture::get();

        return view('home', [
            'pictures' => $pictures,
        ]);
    }

    public function postAction(Request $request)
    {
        $canvas_data = $request->input('canvas_data');

        $picture = Picture::create([
            'user_id' => 1,
            'data'    => $canvas_data,
            'status'  => 'black-published'
        ]);

        return redirect()->route('new-picture');
    }

}
