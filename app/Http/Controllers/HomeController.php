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
        $pictures = Picture::orderBy('published_at', 'desc')->get();

        return view('home', [
            'pictures' => $pictures,
        ]);
    }

    public function postAction(Request $request)
    {
        $title       = $request->input('title');
        $canvas_data = $request->input('canvas_data');

        $picture = [
            'user_id'      => 1,
            'title'        => $title ? $title : 'なし',
            'data'         => $canvas_data,
            'status'       => 'black-published',
            'published_at' => date('Y-m-d H:i:s'),
        ];

        $picture = Picture::create($picture);

        return redirect()->route('new-picture');
    }

}
